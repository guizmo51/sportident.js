import si from '../../src/index';

const tests = {
    'card': (context) => {
        const mainStation = context.mainStation;
        let fixedSiNumber = null;
        const samples = {};
        const _wait = (seconds) => () => new Promise((resolve) => {
            context.logLine('Please wait...');
            setTimeout(resolve, seconds * 1000);
        });
        let cardState = '';
        const simulateStation = (mode, code, actionName) => () => mainStation.code(code)
            .then(() => mainStation.mode(mode))
            .then(() => mainStation.autoSend(1))
            .then(() => {
                context.logLine(`${actionName} card...`);
                return new Promise((resolve) => {
                    mainStation.resetCardCallbacks();
                    mainStation.onCardRemoved = (card) => {
                        if (fixedSiNumber === null) {
                            fixedSiNumber = card.cardNumber;
                        }
                        if (fixedSiNumber === card.cardNumber) {
                            mainStation.resetCardCallbacks();
                            context.logLine(`${actionName} ${card.type()} succeeded: ${card.cardNumber}`);
                            if (mode === si.Station.Mode.Clear) {
                                cardState = '';
                            } else {
                                cardState += `${cardState === '' ? '' : '-'}${actionName}`;
                            }
                            setTimeout(resolve, 1);
                        } else {
                            context.logLine(`Other ${card.type()}: ${card.cardNumber}`);
                        }
                    };
                });
            });
        const readoutCard = () => () => mainStation.autoSend(0)
            .then(() => mainStation.mode(si.Station.Mode.Readout))
            .then(() => mainStation.code(10))
            .then(() => {
                context.logLine('Read card...');
                return new Promise((resolve) => {
                    mainStation.resetCardCallbacks();
                    mainStation.onCard = (card) => {
                        if (fixedSiNumber === null) {
                            fixedSiNumber = card.cardNumber;
                        }
                        if (fixedSiNumber === card.cardNumber) {
                            context.logLine(`${card.type()} read: ${card.cardNumber}`);
                            samples[cardState] = card.toDict();
                            context.logLine(cardState);
                            context.logLine(card.toHtml());
                            mainStation.onCardRemoved = (removedCard) => {
                                if (fixedSiNumber === removedCard.cardNumber) {
                                    mainStation.resetCardCallbacks();
                                    setTimeout(resolve, 1);
                                }
                            };
                        } else {
                            context.logLine(`Other ${card.type()}: ${card.cardNumber}`);
                        }
                    };
                });
            });
        return simulateStation(si.Station.Mode.Clear, 1, 'Clear')()
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Check, 2, 'Check'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Start, 3, 'Start'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 31, 'Punch 31'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 32, 'Punch 32'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 33, 'Punch 33'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 34, 'Punch 34'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 35, 'Punch 35'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 36, 'Punch 36'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 37, 'Punch 37'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 38, 'Punch 38'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 39, 'Punch 39'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 40, 'Punch 40'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 41, 'Punch 41'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 42, 'Punch 42'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 43, 'Punch 43'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 44, 'Punch 44'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 45, 'Punch 45'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 46, 'Punch 46'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 47, 'Punch 47'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 48, 'Punch 48'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 49, 'Punch 49'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 50, 'Punch 50'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 51, 'Punch 51'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 52, 'Punch 52'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 53, 'Punch 53'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 54, 'Punch 54'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 55, 'Punch 55'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 56, 'Punch 56'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 57, 'Punch 57'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 58, 'Punch 58'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 59, 'Punch 59'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 60, 'Punch 60'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 61, 'Punch 61'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 62, 'Punch 62'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 63, 'Punch 63'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 64, 'Punch 64'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 65, 'Punch 65'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 66, 'Punch 66'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 67, 'Punch 67'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 68, 'Punch 68'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 69, 'Punch 69'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Control, 70, 'Punch 70'))
            .then(readoutCard())
            .then(simulateStation(si.Station.Mode.Clear, 4, 'Clear'))
            .then(readoutCard('clear'))
            .then(simulateStation(si.Station.Mode.Control, 31, 'Punch 31'))
            .then(readoutCard('clear-31'))
            .then(readoutCard('clear-[31-70]'))
            .then(() => {
                context.logLine('Finished!');
                console.log('SAMPLES', samples);
            });
    },
};

export const testCommand = (context) => {
    const usage = si.utils.timeoutResolvePromise('Usage: test [what]');
    const res = /test ([^\s]+)/.exec(context.userLine);
    if (res === null) {
        return usage;
    }
    const what = res[1];
    if (!(what in tests)) {
        return si.utils.timeoutResolvePromise(
            `No such test: ${what}<br />Available tests: ${Object.keys(tests)}`,
        );
    }
    return tests[what](context);
};