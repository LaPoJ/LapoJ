class Router {
  constructor(options){
    console.log(options)
    this.routes = {}
    this.bindEvent()
    options.forEach(item => {
      this.route(item.path, () => {
        document.querySelector('#content').innerHTML = item.component
      })
    })
    console.log(this.routes);
  }

  route(path, cb){
    this.routes[path] = cb
  }

  bindEvent () {
    const links = document.getElementsByTagName('a')
    const _this = this;
    [].forEach.call(links, link => {
      link.addEventListener('click', function () {
        const url = this.getAttribute('data-href')
        _this.push(url)
      })
    })
  }

  init () {
    window.addEventListener('load', this.updateView.bind(this), false)
    window.addEventListener('popstate', this.updateView.bind(this), false)
  }

  push(url){
    window.history.pushState({}, null, url)
    this.updateView()
  }

  updateView(){
    const currentUrl = window.location.pathname || '/'
    console.log(currentUrl)
    this.routes[currentUrl] && this.routes[currentUrl]()
  }

}

