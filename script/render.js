import {
  setChildren,
  mount,
} from 'redom';

import {
  createTitle,
  createCard,
  createForm,
  createStartValidationButton,
  createValidationMessage,
} from './createElements.js';

const renderPage = () => {
  const title = createTitle();
  const {
    cardСontainer,
    creditCard,
    cardNumber,
    cardName,
    cardExpire,
    cardSecurity,
    nameBack,
  } = createCard();
  const {
    formContainer,
    inputName,
    inputCardNumber,
    inputExpirationDate,
    inputSecurityCode,
  } = createForm();

  const startValidationButton = createStartValidationButton();
  const validationMessage = createValidationMessage();

  mount(formContainer, validationMessage);
  mount(formContainer, startValidationButton);
  setChildren(document.body, [title, cardСontainer, formContainer]);

  return {
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
  };
};

export default renderPage;
