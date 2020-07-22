
export default () => (
<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src="/favicon-96x96.png" height="28"/>
      <h1><b>Jacar</b></h1>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item" href="/" >
        Home
      </a>

      <a className="navbar-item" href="/trips" >
        Trips
      </a>
    </div>
  </div>
</nav>
)