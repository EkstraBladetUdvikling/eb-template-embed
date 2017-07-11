'use strict'

/* Browserify */
const { h, app } = require('hyperapp')
const hyperx = require('hyperx')
const html = hyperx(h)

/* ES6 Import */
import dispIncompBrowser from './_browserComp'

/*
let initialInteraction = true

if (typeof ga !== 'undefined' && initialInteraction) {
  ga('send', { // eslint-disable-line no-undef
    hitType: 'event',
    eventCategory: 'Unnamed embed',
    eventAction: 'initial Interaction',
    eventLabel: 'embed'
  })
  initialInteraction = false
}
*/

window.ebmodule = (function () {
  let privateProperty = 'foo'

  function privateMethod (args) {
    // do something
    return privateProperty
  }

  return {
    publicProperty: '',

    init: function (args) {
      dispIncompBrowser()

      app({
        state: {
          privateProperty: privateMethod(),
          counter: 0
        },
        view: (state, actions) => (
          html`<div class="article-widget">
            <h3 class="article-widget-header">
              <div class="article-widget-icon fa fa-question"></div><span class="article-widget-header--text">${((state.text) ? state.text : '') + privateMethod() + state.counter}</span>
            </h3>
            <div class="article-widget-content">
              <div class="eb-flexbox">
                <div class="eb-col eb-no-collapse">
                  <button onclick=${actions.add}>PLUS</button>
                </div>
                <div class="eb-col eb-no-collapse">
                  <button onclick=${actions.sub}>MINUS</button>
                </div>
              </div>
              <p>Nej. Det er imod god dansk kø-kultur</p>
              <label for="checkbox_id">
                <input type="checkbox" id="checkbox_id" checked />Fuldstændig enig
              </label>
              <input class="no-border-bottom" type="text" placeholder="Placeholder 1" value=${state.text} oninput=${actions.update} />
              <input class="no-border-bottom" type="text" placeholder="Placeholder 2" />
            </div>
          </div>`
        ),
        actions: {
          add: state => ({counter: state.counter + 1}),
          sub: state => ({counter: state.counter - 1}),
          update: state => ({text: 'test'})
        }
      })
    },

    privilegedMethod: function (args) {
      return privateMethod(args)
    }
  }
})()
window.ebmodule.init()
