import { h, Component } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { MyFunctionalComponent } from '../my-functional-component';

@Component({ tag: 'my-functional-component-test' })
class MyFunctionalTestComponent {}

describe('my-functional-component', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MyFunctionalTestComponent],
      template: () => <MyFunctionalComponent someProp="🚽"></MyFunctionalComponent>,
    });
  });
  it('should render', async () => {
    expect(page.root).toEqualHtml(`<div>someProp is 🚽</div>`);
  });
});
