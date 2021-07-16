import { newSpecPage } from '@stencil/core/testing';
import { SeeMore } from '../see-more';

describe('see-more', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SeeMore],
      html: `<see-more></see-more>`,
    });
    expect(page.root).toEqualHtml(`
      <see-more>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </see-more>
    `);
  });
});
