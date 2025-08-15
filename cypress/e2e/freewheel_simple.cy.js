describe('Connexion à FreeWheel', () => {
  it('Ouvre la page de login FreeWheel', () => {
    cy.visit('https://mrm.freewheel.tv/system/account/login?source=MRM&sso_return_to=%2F%2Fmrm.freewheel.tv');

    cy.url().should('include', '/system/account/login');
    cy.contains('LOG IN').should('be.visible');
  });
});
