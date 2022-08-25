
describe('Тестирование авторизации', function () {
    
    it('Вводим логин и пароль и входим на сайт', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('alexandra_dolbnya@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Dtxthbyrf100');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})
