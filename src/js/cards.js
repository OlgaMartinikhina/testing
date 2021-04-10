export default class Paysystems {
  constructor() {
    this.list = null;
  }

  static get list() {
    return {
      Mastercard: '2221-2720, 51–55',
      AmericanExpress: '34, 37',
      Visa: 4,
      DiscoverCard: '6011, 622126 - 622925, 644, 645, 646, 647, 648, 649, 65',
      JCB: '3528–3589',
      MIR: '2200–2204',
    };
  }
}
