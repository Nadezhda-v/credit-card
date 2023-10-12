import Inputmask from 'inputmask';

import {
  createBlockWithError,
} from './createElements.js';

import {
  getBankInfo,
  getBrandInfo,
} from './bankIdentifier.js';

const isValidCardNumber = (cardNumber) => {
  const numberCardPattern = /^[0-9]{16}$/;

  if (!numberCardPattern.test(cardNumber)) {
    return false;
  }

  return true;
};

const isValidCVC = (securityCode) => {
  const numberCardPattern = /^[0-9]{3}$/;

  if (!numberCardPattern.test(securityCode)) {
    return false;
  }

  return true;
};

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

// Добавить блок с сообщением об ошибке
const addErrorMessageBlock = (className, message, inputElement) => {
  const errorMessageBlock = document.querySelector(`.${className}`);
  if (!errorMessageBlock) {
    const blockWithError = createBlockWithError(className, message);
    inputElement.after(blockWithError);
  }
};

// Удалить блок с сообщением об ошибке
const removeErrorMessageBlock = (className) => {
  const errorMessageBlock = document.querySelector(`.${className}`);
  if (errorMessageBlock) {
    errorMessageBlock.remove();
  }
};

const isValidInputDate = (inputExpirationDate) => {
  const isValidExpirationDate = isValidDate(inputExpirationDate.value);
  const className = 'error-message-block_date';

  if (!isValidExpirationDate) {
    addErrorMessageBlock(
      className,
      'Введите корректную дату',
      inputExpirationDate,
    );
  } else {
    removeErrorMessageBlock(className);
  }
};

const isValidName = (inputName) => {
  const namePattern = /^([A-Za-z]{2,}\s){1,}([A-Za-z]{2,}){1}$/;
  const isValidName = namePattern.test(inputName);

  return isValidName;
};

const isValidInputName = (inputName) => {
  const isValid = isValidName(inputName.value);
  const className = 'error-message-block_name';

  if (!isValid) {
    addErrorMessageBlock(className, 'Введите корректное полное имя', inputName);
  } else {
    removeErrorMessageBlock(className);
  }
};

const isValidInputCardNumber = (inputCardNumber) => {
  const cardNumber = inputCardNumber.value.replace(/[^0-9]/g, '');
  const isValid = isValidCardNumber(cardNumber);
  const className = 'error-message-block_card';

  if (!isValid) {
    addErrorMessageBlock(
      className,
      'Введите корректный номер карты',
      inputCardNumber,
    );
  } else {
    removeErrorMessageBlock(className);
  }
};

const isValidInputSecurityCode = (inputSecurityCode) => {
  const isValid = isValidCVC(inputSecurityCode.value);
  const className = 'error-message-block_cvc';

  if (!isValid) {
    addErrorMessageBlock(
      className,
      'Введите корректный CVC',
      inputSecurityCode,
    );
  } else {
    removeErrorMessageBlock(className);
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

  formContainer.addEventListener('input', ({ target }) => {
    const existingBankLogo = document.querySelector('#bank-logo');
    const existingBrandLogo = document.querySelector('#brand-logo');
    const pathLightColor = document.querySelector('.lightcolor');
    const pathDarkColor = document.querySelector('.darkcolor');
    const rectangle2 = document.querySelector('#Rectangle-1_2_');

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
        rectangle2.setAttribute('fill', '#616161');
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
  inputCardNumber.addEventListener('blur', () =>
    isValidInputCardNumber(inputCardNumber));
  inputExpirationDate.addEventListener('blur', () =>
    isValidInputDate(inputExpirationDate));
  inputSecurityCode.addEventListener('blur', () =>
    isValidInputSecurityCode(inputSecurityCode));

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


  const startValidationButton = document.querySelector('.form__submit');
  const validationMessage = document.querySelector('.validation-message-block');

  // Запуск валидации полей формы
  startValidationButton.addEventListener('click', () => {
    const isValidFullname = isValidName(inputName.value);
    const cardNumber = inputCardNumber.value.replace(/\s/g, '');
    const isValidCard = isValidCardNumber(cardNumber);
    const isValidCode = isValidCVC(inputSecurityCode.value);
    const isValidExpiration = isValidDate(inputExpirationDate.value);

    if (isValidFullname && isValidCard && isValidCode && isValidExpiration) {
      validationMessage.textContent = 'Данные валидные ';
    } else {
      validationMessage.textContent = 'Данные невалидные';
    }

    // Скрыть сообщение через 2 секунды
    setTimeout(() => {
      validationMessage.textContent = '';
    }, 2000);
  });
};

export {
  controlInputValue,
  isValidCardNumber,
  isValidName,
  isValidCVC,
};
