import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'org-list',
  styleUrl: 'org-list.scss',
  shadow: true,
})

export class OrgList {
  data: any

  async componentWillLoad() {
    await this.getData()
  }

  async getData() {
    const response = await fetch(`https://up42kbsxak.execute-api.us-east-1.amazonaws.com/default/getResources`)
    this.data = await response.json()
  }

  render() {
    return (
      <Host>
        <h2>Helpful Organizations</h2>
        <ion-icon class="filter_organizations" name="funnel"></ion-icon>
        <div>
          {this.data.map(org =>
            <div>
              <h3>{org.organization}</h3>
              <p>
                <strong>{org.location}</strong>
                &nbsp;-&nbsp;
                {org.description}
              </p>
              <p>Services:</p>
              <ul>
                {org.services.map(service =>
                  <li>{service}</li>
                )}
              </ul>
              {org.contact
                ? <p>{org.contact}</p>
                : ``
              }
            </div>
          )}
        </div>
      </Host>
    );
  }

}
