import { newE2EPage } from '@stencil/core/testing';

describe('slide-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<slide-panel></slide-panel>');

    const element = await page.find('slide-panel');
    expect(element).toHaveClass('hydrated');
  });
});
