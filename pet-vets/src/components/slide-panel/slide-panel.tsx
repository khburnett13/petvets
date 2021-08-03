import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'slide-panel',
  styleUrl: 'slide-panel.scss',
  shadow: true,
})

export class SlidePanel {
  @Prop() slideFrom = 'right'

  slider: HTMLDivElement

  showFilter(ev: CustomEvent) {
    ev.stopImmediatePropagation()

    console.log('listen', ev)
    if (/visible/.test(this.slider.className))
      this.slider.classList.remove('visible')
    else
      this.slider.classList.add('visible')
  }

  render() {
    return (
      <Host>
        <ion-icon 
          class="filter" 
          name="filter"
          onClick={(ev: CustomEvent) => this.showFilter(ev)}
          size="large"></ion-icon>

        <div class={`panel from-${this.slideFrom}`} ref={el => this.slider = el}>
          <header>
            <h2>Filter Content</h2>
            <ion-icon class="close" name="close"></ion-icon>
          </header>

          <div class="container">
            <div class="content">
              Let's try putting some content in you!
            </div>
          </div>

          <footer>
            
          </footer>
        </div>
      </Host>
    );
  }

}
