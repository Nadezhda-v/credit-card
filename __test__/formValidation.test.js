jest.mock('inputmask', () => {
  return {
    mask: jest.fn(),
  };
});

import {
  isValidName,
  isValidCardNumber,
  isValidCVC,
} from '../script/formValidation.js';

describe('Проверка валидности имени', () => {
  it ('Корректный формат имени', () => {
    const inputName = 'John Doe';
    expect(isValidName(inputName)).toBe(true);
  });

  it ('Имя с содержанием одного слова', () => {
    const inputName = 'John';
    expect(isValidName(inputName)).toBe(false);
  });

  it ('Имя, введенное на кириллице', () => {
    const inputName = 'Иван Петров';
    expect(isValidName(inputName)).toBe(false);
  });

  it ('Имя с содержанием цифр', () => {
    const inputName = '123 John';
    expect(isValidName(inputName)).toBe(false);
  });
});

describe('Проверка валидности номера карты', () => {
  it ('Корректный номер карты', () => {
    const cardNumber = '4183636888887423';
    expect(isValidCardNumber(cardNumber)).toBe(true);
  });

  it ('Номер с содержанием латиницы', () => {
    const cardNumber = '418363688ohn74236';
    expect(isValidCardNumber(cardNumber)).toBe(false);
  });

  it ('Номер с содержанием кириллицы', () => {
    const cardNumber = '41о363688МА774236';
    expect(isValidCardNumber(cardNumber)).toBe(false);
  });

  it ('Номер с содержанием знаков препинания', () => {
    const cardNumber = '4183,36888887/236';
    expect(isValidCardNumber(cardNumber)).toBe(false);
  });

  it ('Номер с недостаточным количеством цифр', () => {
    const cardNumber = '418363688888742';
    expect(isValidCardNumber(cardNumber)).toBe(false);
  });

  it ('Номер с превышенным количеством цифр', () => {
    const cardNumber = '418363688888742361';
    expect(isValidCardNumber(cardNumber)).toBe(false);
  });
});

describe('Проверка валидности CVC', () => {
  it ('Корректный формат CVC', () => {
    const securityCode = '123';
    expect(isValidCVC(securityCode)).toBe(true);
  });

  it ('CVC с содержанием одной цифры', () => {
    const securityCode = '1';
    expect(isValidCVC(securityCode)).toBe(false);
  });

  it ('CVC с содержанием двух цифр', () => {
    const securityCode = '12';
    expect(isValidCVC(securityCode)).toBe(false);
  });

  it ('CVC с содержанием более 3 цифр', () => {
    const securityCode = '1234';
    expect(isValidCVC(securityCode)).toBe(false);
  });

  it ('CVC с содержанием латиницы', () => {
    const securityCode = '1W2';
    expect(isValidCVC(securityCode)).toBe(false);
  });

  it ('CVC с содержанием кириллицы', () => {
    const securityCode = '1И2';
    expect(isValidCVC(securityCode)).toBe(false);
  });

  it ('CVC с содержанием знаков препинания', () => {
    const securityCode = '12/';
    expect(isValidCVC(securityCode)).toBe(false);
  });
});
