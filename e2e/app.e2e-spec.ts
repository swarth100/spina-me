import { SpinaMePage } from './app.po';

describe('spina-me App', () => {
  let page: SpinaMePage;

  beforeEach(() => {
    page = new SpinaMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
