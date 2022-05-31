function active() {
  
   
  const nav = document.querySelector('NAV')
  document.addEventListener('click', (ev) => {
     if (ev.target.tagName == 'A' && ev.target.id !== 'mail') {
      [...nav.children].forEach(element => element.classList.remove('active'))
      document.getElementById(`${ev.target.id}`).classList.add('active')
      //ev.target.classList.add('active')
     }
    
  })
  
  const a = document.querySelectorAll('A')
  window.addEventListener('popstate', (ev) => {
    if (location.pathname == ev.state.path) {
      [...a].forEach(element => element.classList.remove('active'))
      document.getElementById(`${ev.state.path.substring(1)}`).classList.add('active')
    }

  })

}
active()
