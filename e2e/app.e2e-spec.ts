import { PaperPage } from './app.po';

describe('paper App', function() {
  let page: PaperPage;

  beforeEach(() => {
    page = new PaperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
