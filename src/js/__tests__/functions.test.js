/* eslint-disable no-loop-func */
// eslint-disable-next-line import/extensions
import { checkCardLuhn, checkPaySystem } from '../functions.js';

const cards = {
  VISA: [
    '4024007103059415',
    '4272752548841039',
    '4716659732475238035',
  ],
  AmericanExpress: [
    '378730202602443',
    '346942136785785',
    '373813288639938',
  ],
};

const iin = {
  Mastercard: '2221-2720, 51–55',
  Visa: 4,
  AmericanExpress: '34, 37',
  DiscoverCard: '6011, 622126 - 622925, 644, 645, 646, 647, 648, 649, 65',
  JCB: '3528–3589',
  MIR: '2200–2204',
};

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 3; i++) {
  // eslint-disable-next-line no-loop-func
  // eslint-disable-next-line no-undef
  test(`CardLuhn ${i}`, () => {
    // eslint-disable-next-line no-undef
    expect(checkCardLuhn(cards.VISA[i])).toBe(0);
  });
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 3; i++) {
  // eslint-disable-next-line no-undef
  test(`PaySystem ${i}`, () => {
    // eslint-disable-next-line no-undef
    expect(checkPaySystem(iin, cards.VISA[i])).toBe('Visa');
  });
}
