# Stencil Reproduction Project
This is a reproduction case project for [https://github.com/ionic-team/stencil/issues/4063](https://github.com/ionic-team/stencil/issues/4063)

# Issue specifics
There is no specified way on how to properly unit test Functional Components.
An approach we took can be seen in `conditional-wrapper.spec.tsx`. While this approach is not perfect as the defined components end up in the final `components.d.ts` file we haven't found a better way for this.
As soon as this test is removed, the HMR rebuild works again.

> 🚨 This approach results in an issue where on a watched build during development, the initial build succeeds, but upon changes we receive this build-breaking error:
> 
> [ ERROR ]  Rollup: Parse Error: ./node_modules/@stencil/core/compiler/stencil.js:37281:26
Unexpected token
> L37280:  SVGTextPathElement: C,
> L37281:  SVGTextPositioningElement: C,
> L37282:  SVGTitleElement: C,

## Steps to reproduce

- Run the project:
```bash
npm install
npm start
```

- Edit the `my-component.tsx` file.
- The rebuild fails.


