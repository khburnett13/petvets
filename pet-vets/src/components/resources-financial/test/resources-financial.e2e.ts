import { newE2EPage } from '@stencil/core/testing';

describe('resources-financial', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<resources-financial></resources-financial>');

    const element = await page.find('resources-financial');
    expect(element).toHaveClass('hydrated');
  });
});
