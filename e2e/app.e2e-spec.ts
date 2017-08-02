import { Ng4authenticationPage } from './app.po';

describe('ng4authentication App', () => {
  let page: Ng4authenticationPage;

  beforeEach(() => {
    page = new Ng4authenticationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
