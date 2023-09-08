import renderPage from './render.js';
import controlInputValue from './formValidation.js';

const init = () => {
  const cardElements = renderPage();
  controlInputValue(cardElements);
};

init();
