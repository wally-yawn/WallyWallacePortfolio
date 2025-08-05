describe('Portfolio Site', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays home page with avatar and intro text', () => {
    cy.get('img[alt="image of developer"]').should('exist');
    cy.contains("Hi, I'm Wally").should('exist');
    cy.contains("a Full Stack Developer").should('exist');
  });

  it('displays mini bio emojis and resume link', () => {
    cy.contains('🌎 Based in the US');
    cy.contains('📧 jrvw001@gmail.com');
    cy.get('#resume-link').should('have.attr', 'href', '/wally_wallace_resume.pdf');
  });

  it('displays social icons with links', () => {
    cy.get('a[aria-label="github"]').should('have.attr', 'href', 'https://github.com/wally-yawn');
    cy.get('a[aria-label="linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/in/wally-wallace-719b0875/');
  });

  it('toggles dark mode on click', () => {
    cy.get('[aria-label="New Moon"]').click();
    cy.get('[aria-label="Full Moon"]').should('exist');
  });

  it('navigates to About section and displays bio, skills, and hobbies', () => {
    cy.contains('About Me').click();

    cy.contains('cat aboutwally').should('exist');
    cy.contains('cd skills/tools').should('exist');
    cy.contains('Proficient With').should('exist');
    cy.contains('Exposed To').should('exist');

    // Check that at least one skill is listed
    cy.get('ul').contains('javascript');
    cy.get('ul').contains('java');

    // Check that hobbies exist
    cy.get('ul').contains('combat robotics');
    cy.get('ul').contains('music');
  });

  it('navigates to Portfolio section and shows project cards', () => {
    cy.contains('Portfolio').click();

    cy.contains('Smart Gardening').should('exist');
    cy.contains('Tracker CRM').should('exist');
    cy.contains('Rancid Tomatillos').should('exist');

    // Check that live and source links are visible
    cy.contains('Smart Gardening')
      .parent()
      .contains('Live Demo')
      .should('have.attr', 'href')
      .and('include', 'smart-gardening-fe');

    cy.contains('FE Source Code').should('have.attr', 'href').and('include', 'github.com');
  });

  it('footer contains creator credit', () => {
    cy.contains('template created with ♥ by Payton Pierce');
    cy.contains('© 2023');
  });

  it('has correct title and meta tags', () => {
  cy.title().should('eq', 'Wally Wallace');
  cy.get('meta[name="description"]').should('have.attr', 'content', 'developer portfolio');
  });

  it('displays font-awesome icons correctly', () => {
  cy.get('i.fa').should('exist');
  });
});
