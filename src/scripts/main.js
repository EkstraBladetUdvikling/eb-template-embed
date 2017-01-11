'use strict'

/* ES6 import */
import testFunc from './_importme'

window.ebmodule = (function () {
  let privateProperty = 'foo'

  function privateMethod(args) {
    // do something
    return privateProperty
  }

  return {

    publicProperty: '',

    init: function (args) {
      let ecmascriptest = 'world'
      const header = document.getElementsByTagName('h1')[0]
      header.innerHTML = testFunc() + ` ${ecmascriptest}`
    },

    privilegedMethod: function (args) {
      return privateMethod(args)
    }
  }
})()
