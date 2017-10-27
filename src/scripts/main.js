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
      const header = document.getElementsByClassName('article-widget-header--text')[0]
      header.innerHTML = testFunc() + ` ${ecmascriptest}`
      console.log('This will be stripped')
    },

    privilegedMethod: function (args) {
      return privateMethod(args)
    }
  }
})()
window.ebmodule.init()
