import {html, LitElement} from '@polymer/lit-element/lit-element.js';

/**
 * `no-way`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class NoWayLit extends LitElement {
  constructor(){
    super();
    this.prop1 = 'no way';
  }
  _render({prop1}) {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello ${prop1}!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: String,
    };
  }
}

window.customElements.define('no-way-lit', NoWayLit);
