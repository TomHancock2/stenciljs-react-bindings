import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <Host>
        <div>
          <h3 class="hello">
            My Component
          </h3>
          <slot></slot>
        </div>
      </Host>
      
    );
  }
}
