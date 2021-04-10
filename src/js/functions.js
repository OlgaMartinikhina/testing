export function checkCardLuhn(cardNumber) {
  let number = 0;
  let sum = 0;
  const spl = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < `${cardNumber}`.length; i++) {
    number = +`${cardNumber}`.split('').reverse().join('')[i];
    spl.push(number);

    if (i % 2 !== 0) {
      number *= 2;
      if (number > 9) number -= 9;
    }
    sum += number;
  }
  return sum % 10;
}

export function checkPaySystem(iin, cardNumber) {
  const result = { digitsMatch: '' };

  // eslint-disable-next-line no-restricted-syntax
  for (const key in iin) {
    if (Object.prototype.hasOwnProperty.call(iin, key)) {
      const iinStr = (`${iin[key]}`).replace(/\s/g, '');
      const iinArr = iinStr.split(',');
      const firstDigitsMatch = iinArr.find((el) => el === `${cardNumber}`.substring(0, (el.length)));
      if (firstDigitsMatch) {
        if (firstDigitsMatch.length > result.digitsMatch.length) {
          result.paySystem = key;
          result.digitsMatch = firstDigitsMatch;
        }
      }
    }
  }
  return result.paySystem;
}

export function getPaysystemList(iin) {
  const resultArr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in iin) {
    if (Object.prototype.hasOwnProperty.call(iin, key)) {
      resultArr.push(key);
    }
  }
  return resultArr;
}
