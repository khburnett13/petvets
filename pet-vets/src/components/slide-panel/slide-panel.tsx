import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'slide-panel',
  styleUrl: 'slide-panel.css',
  shadow: true,
})
export class SlidePanel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
