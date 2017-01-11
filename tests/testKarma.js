/* global describe, it, expect, __html__ */
describe('default test', function () {
  it('script should change header', function () {
    /* Load HTML to DOM */
    document.body.innerHTML = __html__['dist/index']

    /* Initate mainscript */
    window.ebmodule.init()

    /* Run Test(s) */
    expect(document.getElementsByTagName('h1')[0].innerHTML)
      .toEqual('Hallo world')
  })

  /* Additional test (DOM already loaded) */
  it('it should return private variable', function () {
    expect(window.ebmodule.privilegedMethod())
      .toEqual('foo')
  })
})
