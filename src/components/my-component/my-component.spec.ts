import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
  });

  it('renders with values', async () => {
    await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    console.log(
      new File(['whatever'], 'myFile.png', {
        type: 'image/png',
      }),
    );
  });
});
