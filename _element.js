import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `no-way`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class NoWay extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'no-way',
      },
    };
  }
}

window.customElements.define('no-way', NoWay);
