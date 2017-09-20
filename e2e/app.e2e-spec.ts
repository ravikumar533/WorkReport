import { WorkReportPage } from './app.po';

describe('work-report App', () => {
  let page: WorkReportPage;

  beforeEach(() => {
    page = new WorkReportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
