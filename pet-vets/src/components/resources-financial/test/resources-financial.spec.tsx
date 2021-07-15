import { newSpecPage } from '@stencil/core/testing';
import { ResourcesFinancial } from '../resources-financial';

describe('resources-financial', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ResourcesFinancial],
      html: `<resources-financial></resources-financial>`,
    });
    expect(page.root).toEqualHtml(`
      <resources-financial>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </resources-financial>
    `);
  });
});
