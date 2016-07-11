import { GiphySearchPage } from './app.po';

describe('giphy-search App', function() {
  let page: GiphySearchPage;

  beforeEach(() => {
    page = new GiphySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
