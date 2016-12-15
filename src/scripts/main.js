'use strict'

/* ES6 import */
import testFunc from './_importme'

(function () {
  let ecmascriptest = 'world'
  const header = document.getElementsByTagName('h1')[0]
  header.innerHTML = testFunc() + ` ${ecmascriptest}`
})()
