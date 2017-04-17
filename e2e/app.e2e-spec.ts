import { StuffDevelopersPage } from './app.po';

describe('stuff-developers App', () => {
  let page: StuffDevelopersPage;

  beforeEach(() => {
    page = new StuffDevelopersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
