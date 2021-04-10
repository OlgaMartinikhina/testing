/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/extensions
import { checkCardLuhn, checkPaySystem, getPaysystemList } from './functions.js';
// eslint-disable-next-line import/extensions
import Paysystems from './cards.js';

export default class Logic {
  constructor(widget) {
    this.widget = widget;
    this.iin = null;
    this.paySystemsList = null;
  }

  init() {
    this.widget.drawUI();
    this.fetchPaySystems();

    this.widget.form.addEventListener('submit', (e) => {
      this.widget.clear();
      this.checkNumber(e);
      this.identifyPaySystem(e);
    });
  }

  checkNumber(e) {
    e.preventDefault();
    const cardNumber = this.widget.getCardNumber().replaceAll(',', ' ');
    if (`${cardNumber}`.length < 8) {
      this.widget.showMessage('please, enter minimum 8 digits');
      this.widget.message.classList.add('invalid');
      return;
    }
    const sum = checkCardLuhn(cardNumber);
    let result;
    if (sum === 0) result = { message: 'this card is valid', class: 'valid' };
    else result = { message: 'not valid card', class: 'invalid' };

    this.widget.message.classList.add(result.class);
    this.widget.showMessage(result.message);
  }

  identifyPaySystem(e) {
    e.preventDefault();
    const cardNumber = this.widget.getCardNumber();
    const result = checkPaySystem(Paysystems.list, cardNumber);
    if (result) this.widget.showPaySystem(result);
  }

  fetchPaySystems() {
    const list = getPaysystemList(Paysystems.list);
    this.widget.drawCardImages(list);
  }
}
