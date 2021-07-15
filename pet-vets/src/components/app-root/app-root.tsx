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
    this.pageTitle = this.getTitle(event.detail.params.title)
  }

  getTitle(loc?: string) {
    return `${loc || 'Pet'} Resources`
  }

  render() {
    return (
      <div>
        <header>
          <ion-icon class="header_icon" name="paw"></ion-icon>
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
