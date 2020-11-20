import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
  
<div className="card-header">
<nav className="navbar navbar-dark bg-dark">
<a className="navbar-brand" href="#">Navbar</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="/">Home/About<span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/portfolio">Portfolo</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/contact">Contact</a>
    </li>
  </ul>
</div>
</nav>
</div>
  );
}

export default Navbar;
