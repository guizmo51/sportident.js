/* eslint-env jasmine */

import {BaseSiCard} from '../BaseSiCard';
import {PCard} from './PCard';

describe('PCard', () => {
    it('is registered', () => {
        expect(BaseSiCard.getTypeByCardNumber(4000000)).toEqual(PCard);
        expect(BaseSiCard.getTypeByCardNumber(4999999)).toEqual(PCard);
    });
});