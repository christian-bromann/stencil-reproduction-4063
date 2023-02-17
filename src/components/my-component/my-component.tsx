import { Component, h } from '@stencil/core';
import { MyFunctionalComponent } from '../common/my-functional-component/my-functional-component';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div>
        I'm rendering a functional component!!:
        <MyFunctionalComponent someProp="💩" />
      </div>
    );
  }
}
