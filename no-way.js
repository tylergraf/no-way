import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {WCI18n} from 'wc-i18n/wc-i18n.js';

/**
 * `no-way`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class NoWay extends WCI18n(import.meta.url)(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <p>[[i18n('stuff')]]</p>
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
