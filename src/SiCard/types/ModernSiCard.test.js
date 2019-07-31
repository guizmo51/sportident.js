/* eslint-env jasmine */

import _ from 'lodash';
import {proto} from '../../constants';
import * as utils from '../../utils';
import * as testUtils from '../../testUtils';
import {ModernSiCard} from './ModernSiCard';
import {getModernSiCardExamples} from './modernSiCardExamples';
import {ModernSiCardSimulator} from '../../simulation/SiCardSimulator/types/ModernSiCardSimulator';

describe('ModernSiCard', () => {
    it('exists', () => {
        expect(ModernSiCard).not.toBe(undefined);

        const myModernSiCard = new ModernSiCard();
        expect(myModernSiCard.storage.data.has(0)).toBe(true);
        expect(myModernSiCard.storage.data.get(0)).toBe(undefined);
        expect(myModernSiCard.storage.data.has(1023)).toBe(true);
        expect(myModernSiCard.storage.data.get(1023)).toBe(undefined);
        expect(myModernSiCard.storage.data.has(1024)).toBe(false);
        expect(myModernSiCard.storage.data.get(1024)).toBe(undefined);
    });
    it('typeSpecificShouldDetectFromMessage works', () => {
        expect(ModernSiCard.typeSpecificShouldDetectFromMessage({
            command: proto.cmd.SI8_DET,
            parameters: undefined,
        })).toBe(true);
        expect(ModernSiCard.typeSpecificShouldDetectFromMessage({
            command: testUtils.getRandomByteExcept([proto.cmd.SI8_DET]),
            parameters: undefined,
        })).toBe(false);
    });
    it('getPunchOffset', () => {
        expect(ModernSiCard.getPunchOffset(0)).toEqual(0x200);
        expect(ModernSiCard.getPunchOffset(1)).toEqual(0x204);
        expect(ModernSiCard.getPunchOffset(64)).toEqual(0x300);
        expect(ModernSiCard.getPunchOffset(127)).toEqual(0x3FC);
    });
    it('cropPunches', () => {
        expect(ModernSiCard.cropPunches([])).toEqual([]);
        expect(ModernSiCard.cropPunches([
            {code: 31, time: 1},
        ])).toEqual([
            {code: 31, time: 1},
        ]);
        expect(ModernSiCard.cropPunches([
            {code: 32, time: 0xEEEE},
        ])).toEqual([
        ]);
        expect(ModernSiCard.cropPunches([
            {code: undefined, time: undefined},
        ])).toEqual([
        ]);
        expect(ModernSiCard.cropPunches([
            {code: 33, time: undefined},
        ])).toEqual([
        ]);
        expect(ModernSiCard.cropPunches([
            {code: 31, time: 1},
            {code: 32, time: 2},
            {code: 33, time: 3},
            {code: 0xEE, time: 0xEEEE},
            {code: undefined, time: undefined},
        ])).toEqual([
            {code: 31, time: 1},
            {code: 32, time: 2},
            {code: 33, time: 3},
        ]);
    });
    const cardHolderCharCodes1 = utils.unPrettyHex(`
        4A 6F 68 6E 3B 44 6F 65 3B 6D 3B 31 39 39 30 30
        31 33 31 3B 45 78 61 6D 70 6C 65 63 6C 75 62 3B
        6A 6F 68 6E 2E 64 6F 65 40 67 6D 61 69 6C 2E 63
        6F 6D 3B 2B 30 31 32 33 34 35 36 37 38 39 3B 45
        78 61 6D 70 6C 65 74 6F 6E 3B 53 61 6D 70 6C 65
        20 41 6C 6C 65 79 20 31 32 33 3B 31 32 33 34 3B
        45 58 50 3B EE EE EE EE EE EE EE EE EE EE EE EE
        EE EE EE EE EE EE EE EE EE EE EE EE EE EE EE EE
    `);
    const cardHolderString1 = (
        'John;Doe;m;19900131;Exampleclub;john.doe@gmail.com;' +
        '+0123456789;Exampleton;Sample Alley 123;1234;EXP;'
    );
    const emptyCardHolderDict = {
        firstName: undefined,
        lastName: undefined,
        gender: undefined,
        birthday: undefined,
        club: undefined,
        email: undefined,
        phone: undefined,
        city: undefined,
        street: undefined,
        zip: undefined,
        country: undefined,
        isComplete: false,
    };
    const cardHolderDict1 = {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'm',
        birthday: '19900131',
        club: 'Exampleclub',
        email: 'john.doe@gmail.com',
        phone: '+0123456789',
        city: 'Exampleton',
        street: 'Sample Alley 123',
        zip: '1234',
        country: 'EXP',
        isComplete: true,
    };
    it('getCroppedString', () => {
        expect(ModernSiCard.getCroppedString([])).toEqual('');
        expect(ModernSiCard.getCroppedString([0x61])).toEqual('a');
        expect(ModernSiCard.getCroppedString([0xEE])).toEqual('');
        expect(ModernSiCard.getCroppedString([0x41, 0xEE])).toEqual('A');
        expect(ModernSiCard.getCroppedString(cardHolderCharCodes1)).toEqual(cardHolderString1);
    });
    it('parseCardHolderString', () => {
        expect(ModernSiCard.parseCardHolderString('')).toEqual(emptyCardHolderDict);
        expect(ModernSiCard.parseCardHolderString('A')).toEqual(emptyCardHolderDict);
        expect(ModernSiCard.parseCardHolderString('A;')).toEqual({...emptyCardHolderDict, firstName: 'A'});
        expect(ModernSiCard.parseCardHolderString('A;B')).toEqual({...emptyCardHolderDict, firstName: 'A'});
        expect(ModernSiCard.parseCardHolderString(cardHolderString1)).toEqual(cardHolderDict1);
    });
    it('parseCardHolder', () => {
        expect(ModernSiCard.parseCardHolder([])).toEqual(emptyCardHolderDict);
        expect(ModernSiCard.parseCardHolder([0x61])).toEqual(emptyCardHolderDict);
        expect(ModernSiCard.parseCardHolder([0x61, 0x3B])).toEqual({...emptyCardHolderDict, firstName: 'a'});
        expect(ModernSiCard.parseCardHolder([0xEE])).toEqual(emptyCardHolderDict);
        expect(ModernSiCard.parseCardHolder([0x41, 0xEE, 0x3B])).toEqual(emptyCardHolderDict);
        expect(ModernSiCard.parseCardHolder([0x41, 0x3B, 0xEE])).toEqual({...emptyCardHolderDict, firstName: 'A'});
        expect(ModernSiCard.parseCardHolder(cardHolderCharCodes1)).toEqual(cardHolderDict1);
    });
    const examples = getModernSiCardExamples();
    Object.keys(examples).forEach((exampleName) => {
        it(`typeSpecificRead works with ${exampleName} example`, (done) => {
            const {storageData, cardData} = examples[exampleName];
            const myModernSiCard = new ModernSiCard(cardData.cardNumber);
            const myModernSiCardSimulator = new ModernSiCardSimulator(storageData);
            myModernSiCard.mainStation = {
                sendMessage: (message, numResponses) => {
                    const responses = myModernSiCardSimulator.handleRequest(message);
                    if (responses.length !== numResponses) {
                        throw new Error('Invalid numResponses');
                    }
                    return Promise.resolve(responses.map((response) => [0x00, 0x00, ...response.parameters]));
                },
            };

            myModernSiCard.typeSpecificRead().then(() => {
                Object.keys(cardData).forEach((cardDataKey) => {
                    expect(myModernSiCard[cardDataKey]).toEqual(cardData[cardDataKey]);
                });
                const cardSeriesString = myModernSiCard.storage.get('cardSeries').toString();
                expect(ModernSiCard.Series[cardSeriesString]).not.toBe(undefined);
                done();
            });
        });
    });
    it('typeSpecificRead if typeSpecificReadCardHolder fails', (done) => {
        const testError = new Error('test');
        let typeSpecificReadCardHolderCalled = false;
        class ModernSiCardWithoutCardHolder extends ModernSiCard {
            typeSpecificGetPage() {
                return Promise.resolve(_.range(128).map(() => 0x00));
            }

            typeSpecificReadCardHolder() {
                typeSpecificReadCardHolderCalled = true;
                return Promise.reject(testError);
            }
        }
        const myModernSiCard = new ModernSiCardWithoutCardHolder(7123456);
        myModernSiCard.typeSpecificRead()
            .catch((err) => {
                expect(typeSpecificReadCardHolderCalled).toBe(true);
                expect(err).toBe(testError);
                done();
            });
    });
    it('typeSpecificRead if typeSpecificReadPunches fails', (done) => {
        const testError = new Error('test');
        let attemptedToGetPage4 = false;
        class ModernSiCardWithoutCardHolder extends ModernSiCard {
            typeSpecificGetPage(pageNumber) {
                if (pageNumber === 4) {
                    attemptedToGetPage4 = true;
                    return Promise.reject(testError);
                }
                return Promise.resolve(_.range(128).map(() => 0x01));
            }
        }
        const myModernSiCard = new ModernSiCardWithoutCardHolder(7123456);
        myModernSiCard.typeSpecificRead()
            .catch((err) => {
                expect(attemptedToGetPage4).toBe(true);
                expect(err).toBe(testError);
                done();
            });
    });
});
