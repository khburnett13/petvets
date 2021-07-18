import { Component, Host, h, Element, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router'

@Component({
  tag: 'resources-financial',
  styleUrl: 'resources-financial.scss',
  shadow: true,
})
export class ResourcesFinancial {
  
  /**
   * 1. Own Properties
   * Always set the type if a default value has not
   * been set. If a default value is being set, then type
   * is already inferred. List the own properties in
   * alphabetical order. Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  introFull: HTMLDivElement

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
   @Element() el: HTMLElement

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */
  @Prop() match: MatchResults
  @Prop() showMore = false

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   * This makes sense since both statements are strongly connected.
   * - If renaming the instance variable name you must also update the name in @Watch()
   * - Code is easier to follow and maintain.
   */

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
   @Event() updateTitle: EventEmitter<MatchResults>;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  //  connectedCallback() {}
  //  disconnectedCallback() {}
  //  componentWillLoad() {}
   componentDidLoad() {
     this.updateTitle.emit(this.match)
   }
  //  componentWillUpdate() {}
  //  componentDidUpdate() {}
  //  componentWillRender() {}
  //  componentShouldRender(newVal: any, oldVal: any, propName: string) {}
  //  componentDidRender() {}

  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  @Listen('seeMore')
  seeMoreHandler(show: CustomEvent<boolean>) {
    this.introFull.classList[show.detail ? 'add' : 'remove']('financial-support__intro-text__show-more--show')
  }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */

  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */

  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */
  render() {
    const IntroText = () => (
      <div class="financial-support__intro-text">
        <p>
          Are you having trouble affording your pet? 
          Check this list of national and state resources for pet owners in need. 
          Below is a comprehensive list of pet financial aid related organizations.

          <see-more></see-more>
        </p>
        <div class="financial-support__intro-text__show-more" ref={el => this.introFull = el}>
          <p>
            <strong>Note:</strong>&nbsp;
            If your animal requires emergency veterinary care and you cannot afford treatment, contact groups or veterinary schools that may help. 
            If you are unsure what qualifies as emergency veterinary care, call your veterinarian and describe the symptoms.
          </p>
          <p>
            It could happen to anyone with a pet. 
            You've always managed to give your pet the medical care they deserve, but because of unexpected circumstances, you're faced with vet 
            expenses that are far beyond your ability to afford them.
            No owner wants a pet to suffer because medical care is out of reach. 
            Financial aid is out there, and there are steps you can take to cover an emergency vet bill.
          </p>
          <p>
            Please remember that, depending on the severity of your pet's illness or injury, you may still lose your pet even after great expense. 
            Discuss the prognosis and treatment options with your veterinarian, including whether surgery or treatment would just cause your 
            companion discomfort without preserving a life of good quality.
          </p>
          <p>
            Please keep in mind that each organization is independent and has their own set of rules and guidelines. 
            Therefore you will have to investigate each one separately to determine if you qualify for assistance.
          </p>
        </div>
      </div>
    )

    return (
      <Host>
        <h2>Overview</h2>
        <IntroText />
      </Host>
    );
  }

}
