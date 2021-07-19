import { newSpecPage } from '@stencil/core/testing';
import { OrgList } from '../org-list';

describe('org-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OrgList],
      html: `<org-list></org-list>`,
    });
    expect(page.root).toEqualHtml(`
      <org-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </org-list>
    `);
  });
});
