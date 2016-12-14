import { MovieCliPage } from './app.po';

describe('movie-cli App', function() {
  let page: MovieCliPage;

  beforeEach(() => {
    page = new MovieCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
