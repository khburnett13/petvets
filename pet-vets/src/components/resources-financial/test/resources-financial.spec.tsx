import { newSpecPage } from '@stencil/core/testing';
import { ResourcesFinancial } from '../resources-financial';

describe('resources-financial', () => {
  const className = 'financial-support__intro-text__show-more--show';

  describe('seeMoreText', () => {
    it('should add the class', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ResourcesFinancial],
        html: '<resources-financial></resources-financial>'
      })

      rootInstance.seeMoreHandler({detail: true})
      const classes = rootInstance.introFull.__attributeMap.__items[0]._value
      expect(classes).toContain(className);
    });


    it('should NOT add the class, and remove it if there', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ResourcesFinancial],
        html: '<resources-financial></resources-financial>'
      })

      rootInstance.seeMoreHandler({detail: false})
      const classes = rootInstance.introFull.__attributeMap.__items[0]._value
      expect(classes).not.toContain(className);
    });
  })
});
