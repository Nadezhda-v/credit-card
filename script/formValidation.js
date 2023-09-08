import Inputmask from 'inputmask';

import {
  createBlockWithError,
} from './createElements.js';

import {
  getBankInfo,
  getBrandInfo,
} from './bankIdentifier.js';

const isValidDate = (inputExpirationDateValue) => {
  const datePattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;

  if (datePattern.test(inputExpirationDateValue)) {
    const [month, year] = inputExpirationDateValue.split('/');

    if (month >= 1 && month <= 12 &&
        year >= (new Date().getFullYear()) % 100 && year <= 99) {
      return true;
    }
  }

  return false;
};

const isValidInputDate = (inputExpirationDate) => {
  const isValidExpirationDate = isValidDate(inputExpirationDate.value);
  const errorMessageBlockFromDom = document.
    querySelector('.error-message-block');

  if (!isValidExpirationDate) {
    const blockWithError = createBlockWithError('Введите корректную дату');
    inputExpirationDate.after(blockWithError);
  }

  if (errorMessageBlockFromDom) {
    errorMessageBlockFromDom.remove();
  }
};

const namePattern = /^([A-Za-z]{2,}\s){1,}([A-Za-z]{2,}){1}$/;

const isValidInputName = (inputName) => {
  const isValidName = namePattern.test(inputName.value);
  const errorMessageBlockFromDom = document.
    querySelector('.error-message-block');

  if (!isValidName) {
    const blockWithError = createBlockWithError(
      'Введите корректное полное имя',
    );
    inputName.after(blockWithError);
  }

  if (errorMessageBlockFromDom) {
    errorMessageBlockFromDom.remove();
  }
};

const controlInputValue = ({
  cardСontainer,
  creditCard,
  formContainer,
  inputName,
  inputCardNumber,
  inputExpirationDate,
  inputSecurityCode,
  cardNumber,
  cardName,
  cardExpire,
  cardSecurity,
  nameBack,
}) => {
  inputName.addEventListener('input', () => {
    inputName.value = inputName.value.replace(/[^A-Za-z\s]/g, '');
    cardName.textContent = inputName.value;
    nameBack.textContent = inputName.value;
  });

  formContainer.addEventListener('input', ({target}) => {
    const existingBankLogo = document.querySelector('#bank-logo');
    const existingBrandLogo = document.querySelector('#brand-logo');
    const pathLightColor = document.querySelector('.lightcolor');
    const pathDarkColor = document.querySelector('.darkcolor');

    if (target.tagName === 'INPUT' &&
        target.getAttribute('inputmode') === 'numeric') {
      target.value = target.value.replace(/[^0-9]/g, '');
    }

    if (target.id === 'cardnumber') {
      cardNumber.textContent = target.value;
      const numberWithoutSpaces = target.value.replace(/\s/g, '');

      if (numberWithoutSpaces.length === 0) {
        cardNumber.textContent = 'XXXX XXXX XXXX XXXX';
      }

      if (numberWithoutSpaces.length > 0) {
        getBrandInfo(numberWithoutSpaces);
      }

      if (numberWithoutSpaces.length < 2 && existingBrandLogo) {
        existingBrandLogo.remove();
      }

      if (numberWithoutSpaces.length >= 6) {
        getBankInfo(numberWithoutSpaces);
      }

      if (numberWithoutSpaces.length < 6) {
        pathLightColor.setAttribute('fill', '#bdbdbd');
        pathDarkColor.setAttribute('fill', '#616161');
        if (existingBankLogo) {
          existingBankLogo.remove();
          getBrandInfo(numberWithoutSpaces);
        }
      }
    }

    if (target.id === 'expirationdate') {
      cardExpire.textContent = target.value;
    }

    if (target.id === 'securitycode') {
      creditCard.classList.add('flipped');
      cardSecurity.textContent = target.value;
    }
  });

  cardСontainer.addEventListener('click', () => {
    creditCard.classList.toggle('flipped');
  });

  inputName.addEventListener('blur', () => isValidInputName(inputName));
  inputExpirationDate.addEventListener('blur', () =>
    isValidInputDate(inputExpirationDate));

  const maskCardNumber = new Inputmask('9999 9999 9999 9999', {
    placeholder: ' ',
    clearMaskOnLostFocus: false,
  });

  maskCardNumber.mask(inputCardNumber);

  const maskExpiration = new Inputmask('99/99', {
    placeholder: ' ',
    clearMaskOnLostFocus: false,
  });

  maskExpiration.mask(inputExpirationDate);

  const maskSecurity = new Inputmask('999', {
    placeholder: ' ',
    clearMaskOnLostFocus: false,
  });

  maskSecurity.mask(inputSecurityCode);
};

export default controlInputValue;
