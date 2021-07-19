import { newE2EPage } from '@stencil/core/testing';

describe('org-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<org-list></org-list>');

    const element = await page.find('org-list');
    expect(element).toHaveClass('hydrated');
  });
});
