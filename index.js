import EasierScroll from './package/component'

const EasierScrollPlugin = {
  install(app) {
    app.component('EasierScroll', EasierScroll)
  }
}

export default EasierScrollPlugin