import { ScholarsUiPage } from './app.po';

describe('scholars-ui App', () => {
  let page: ScholarsUiPage;

  beforeEach(() => {
    page = new ScholarsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
