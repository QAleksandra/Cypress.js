
describe('Тестирование авторизации', function () {
    
    it('Вводим логин и неправильный пароль, проверяем, что зайти на сайт невозможно', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('alexandra_dolbnya@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Ya_ne_prav');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})