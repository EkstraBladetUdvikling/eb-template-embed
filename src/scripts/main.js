'use strict'

/* ES6 import */
import testFunc from './_importme'

(function () {
  let ecmascriptest = 'world'
  const header = document.getElementsByClassName('article-widget-header--text')[0]
  header.innerHTML = testFunc() + ` ${ecmascriptest}`
})()
