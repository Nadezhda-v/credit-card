import CardInfo from 'card-info';

import {
  el,
} from 'redom';

const getImg = (URL, urlLogo, id = '') => {
  const fileName = urlLogo.split('/').pop();

  const img = el('img', {
    src: `${URL}${fileName}`,
    alt: 'logo',
    id: `${id}`,
  });

  img.style.backgroundColor = fileName.includes('white') ?
    'darkgray' : '';

  return img;
};

let currentBrand = null; // Инициализация текущего бренда как null

const getBrandInfo = (cardNumber) => {
  if (cardNumber.length < 2) {
    currentBrand = null;
    return;
  }

  const cardInfo = new CardInfo(cardNumber);
  const brandLogo = cardInfo.brandLogo;

  // Проверка, изменился ли бренд
  if (String(cardNumber).startsWith(cardInfo.numberSource) &&
      currentBrand === brandLogo) {
    return;
  }

  const ccicon = document.querySelector('#ccicon');
  const existingBrandLogo = document.querySelector('#brand-logo');
  const URL = 'img/brands-logos/';

  if (existingBrandLogo) {
    existingBrandLogo.remove();
    currentBrand = null;
  }

  // Обновление текущего бренда
  if (brandLogo) {
    currentBrand = brandLogo;
    const img = getImg(URL, currentBrand, 'brand-logo');

    ccicon.append(img);
  }
};

const getBankInfo = (cardNumber) => {
  const cardInfo = new CardInfo(cardNumber);
  const ccsingle = document.querySelector('#ccsingle');
  const existingBankLogo = document.querySelector('#bank-logo');

  if (String(cardNumber).startsWith(cardInfo.numberSource) &&
      existingBankLogo) {
    return;
  }

  // Смена цвета карты
  const [light, dark] = cardInfo.backgroundColors;
  const pathLightColor = document.querySelector('.lightcolor');
  const pathDarkColor = document.querySelector('.darkcolor');
  const rectangle2 = document.querySelector('#Rectangle-1_2_');

  if (!String(cardNumber).startsWith('402532')) {
    pathLightColor.setAttribute('fill', light);
    pathDarkColor.setAttribute('fill', dark);
    rectangle2.setAttribute('fill', dark);
  } else {
    pathLightColor.setAttribute('fill', dark);
    pathDarkColor.setAttribute('fill', light);
    rectangle2.setAttribute('fill', light);
  }

  const URL = 'img/banks-logos/';
  let urlBankLogo;

  if (cardInfo.bankLogoSvg) {
    urlBankLogo = cardInfo.bankLogoSvg;
  } else if (cardInfo.bankLogo) {
    urlBankLogo = cardInfo.bankLogo;
  }

  if (urlBankLogo) {
    const img = getImg(URL, urlBankLogo, 'bank-logo');
    ccsingle.append(img);
  } else {
    console.warn('Отсутствует информация о логотипе банка');
  }
};

export {
  getBankInfo,
  getBrandInfo,
};
