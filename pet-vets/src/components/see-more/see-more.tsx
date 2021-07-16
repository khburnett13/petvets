import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'see-more',
  styleUrl: 'see-more.scss',
  shadow: true,
})
export class SeeMore {
  @Prop() show = false

  @Event() seeMore: EventEmitter<boolean>
  seeMoreHandler() {
    this.show = !this.show
    this.seeMore.emit(this.show)
  }

  render() {
    return (
      <Host onClick={() => this.seeMoreHandler()}>
        {/* <ion-icon class="show-more-icon" name={this.show ? 'remove' : 'add'}></ion-icon> */}
        {/* <span>{this.show ? ' - ' : ' + '} See {this.show ? 'less' : 'more'}</span> */}
        {this.show ? ' - ' : ' + '} See {this.show ? 'less' : 'more'}
      </Host>
    );
  }

}
