describe('Тестирование банковской карты, проверка валидных данных', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Ввод полного имени', () => {
    cy.get('#name').type('John Doe');
    cy.get('#name').should('have.value', 'John Doe');
  });

  it('Ввод номера карты', () => {
    cy.get('#cardnumber').type('4183636888887423');
    cy.get('#cardnumber').should('have.value', '4183 6368 8888 7423');
  });

  it('Ввод даты истечения срока карты', () => {
    cy.get('#expirationdate').type('1026');
    cy.get('#expirationdate').should('have.value', '10/26');
  });

  it('Ввод кода безопасности', () => {
    cy.get('#securitycode').type('123');
    cy.get('#securitycode').should('have.value', '123');
  });
});

describe('Тестирование банковской карты, ввод некорректных данных', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Ввод некорректного полного имени', () => {
    cy.get('#name').type('Иван/ Roh');
    cy.get('#name').should('have.value', ' Roh');
    cy.get('.form__submit').click();
    cy.get('.validation-message-block').should('contain', 'Данные невалидные');
  });

  it('Ввод некорректного номера карты', () => {
    cy.get('#cardnumber').type('и/448363R 64848');
    cy.get('#cardnumber').should('have.value', '4483 6364 848      ');
    cy.get('.form__submit').click();
    cy.get('.validation-message-block').should('contain', 'Данные невалидные');
  });

  it('Ввод некорректной даты истечения срока карты', () => {
    cy.get('#expirationdate').type('1333');
    cy.get('#expirationdate').should('have.value', '13/33');
    cy.get('.form__submit').click();
    cy.get('.validation-message-block').should('contain', 'Данные невалидные');
  });

  it('Ввод некорректного кода безопасности', () => {
    cy.get('#securitycode').type('a1/');
    cy.get('#securitycode').should('have.value', '1  ');
    cy.get('.form__submit').click();
    cy.get('.validation-message-block').should('contain', 'Данные невалидные');
  });
});
