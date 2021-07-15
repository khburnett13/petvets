import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})

export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Hello and welcome. You can use this resource to find financial support for your pet's medical treatment, 
          find nearby emergency vets, and find information about pet insurance options.
        </p>

        <stencil-route-link url="/resources/financial">
          <button>Financial Resources</button>
        </stencil-route-link>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
