import { newE2EPage } from '@stencil/core/testing';

describe('see-more', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<see-more></see-more>');

    const element = await page.find('see-more');
    expect(element).toHaveClass('hydrated');
  });
});
