import { Component, h, Listen, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false,
})
export class AppRoot {
  @Prop() pageTitle: string = this.getTitle()

  @Listen('updateTitle')
  updateTitleHandler(event: CustomEvent<MatchResults>) {
    this.setTitle(event.detail.params.title)
  }

  getTitle(loc?: string): string {
    return `${loc || 'Pet'} Resources`
  }

  setTitle(loc?: string): void {
    this.pageTitle = this.getTitle(loc)
  }

  render() {
    return (
      <div>
        <header>
          <stencil-route-link url="/" onClick={() => this.setTitle()}>
            <ion-icon class="header_icon" name="paw"></ion-icon>
          </stencil-route-link>
          <h1>{this.pageTitle}</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/resources/:title" component="resources-financial" />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
