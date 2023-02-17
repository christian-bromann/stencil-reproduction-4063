import { h } from '@stencil/core';
import type { FunctionalComponent } from '@stencil/core';

export interface MyFunctionalComponentProps {
  someProp: string;
}

export const MyFunctionalComponent: FunctionalComponent<MyFunctionalComponentProps> = ({ someProp }) => {
  return <div>someProp is {someProp}</div>;
};
