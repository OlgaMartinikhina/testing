export default class Widget {
  constructor() {
    this.cardsArea = document.querySelector('.cardsArea');
    this.cardNumber = document.querySelector('[name=cardNumber]');
    this.form = document.querySelector('.checkCard form');
    this.message = document.querySelector('.message');
  }

  drawUI() {
    this.cardNumber.value = '';
  }

  drawCardImages(list) {
    list.forEach((elem) => {
      const img = document.createElement('img');
      img.src = `./assets/${elem.toLowerCase()}.png`;
      img.className = 'blureimg';
      this.cardsArea.appendChild(img);
    });
  }

  getCardNumber() {
    return this.cardNumber.value;
  }

  showMessage(message) {
    this.message.innerHTML = `${message}`;
  }

  showPaySystem(name) {
    const filename = `${name.toLowerCase().replaceAll(' ', '')}.png`;
    const imgArr = [...this.cardsArea.children];
    const index = imgArr.findIndex((elem) => elem.src.includes(filename));
    imgArr[index].className = '';
    this.cardNumber.value = '';
  }

  clear() {
    this.message.innerHTML = '';
    this.message.className = 'message';
    const imgArr = [...this.cardsArea.children];
    imgArr.forEach((el, index) => {
      imgArr[index].className = 'blureimg';
    });
  }
}
