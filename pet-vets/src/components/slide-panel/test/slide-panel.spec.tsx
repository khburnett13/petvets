import { newSpecPage } from '@stencil/core/testing';
import { SlidePanel } from '../slide-panel';

describe('slide-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlidePanel],
      html: `<slide-panel></slide-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <slide-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </slide-panel>
    `);
  });
});
