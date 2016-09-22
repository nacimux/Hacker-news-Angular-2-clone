import { HackerNewsAngular2ClonePage } from './app.po';

describe('hacker-news-angular-2-clone App', function() {
  let page: HackerNewsAngular2ClonePage;

  beforeEach(() => {
    page = new HackerNewsAngular2ClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
