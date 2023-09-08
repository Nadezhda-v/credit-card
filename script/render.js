import {
  setChildren,
} from 'redom';

import {
  createTitle,
  createCard,
  createForm,
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
