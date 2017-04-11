import { Project3SettingColorPage } from './app.po';

describe('project3-setting-color App', () => {
  let page: Project3SettingColorPage;

  beforeEach(() => {
    page = new Project3SettingColorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
