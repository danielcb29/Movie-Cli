import { TmdbPage } from './app.po';

describe('tmdb App', function() {
  let page: TmdbPage;

  beforeEach(() => {
    page = new TmdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
