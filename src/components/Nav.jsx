import "../App.css"
function Navbar(){
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom  sticky-top ">
       <div className="container-fluid bg-primary ">
    <a className="navbar-brand text-white fs-2" href="#">ꪊtask</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="link nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">About</a>
        </li>
      </ul>
    </div>
  </div>
    </nav>
    </>
  )
}

export default Navbar