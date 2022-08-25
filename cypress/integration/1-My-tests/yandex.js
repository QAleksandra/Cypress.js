
describe('Тестирование поисковой выдачи Яндекса', function () {
   it('Проверка, что при поиске в выдаче есть предложение посмотреть картинки', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('Котята').type('{enter}');
        cy.contains('Картинки по запросу «Котята»');
    })
})
