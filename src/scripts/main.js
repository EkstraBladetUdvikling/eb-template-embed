'use strict'

/* ES6 import */
import testFunc from './_importme'

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

(function () {
  let ecmascriptest = 'world'
  const header = document.getElementsByClassName('article-widget-header--text')[0]
  header.innerHTML = testFunc() + ` ${ecmascriptest}`
})()
