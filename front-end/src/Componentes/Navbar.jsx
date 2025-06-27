
import React from 'react'
/*
const Navbar = ({ onLoginClick, onRegisterClick }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Mi Agenda</a>
      <div className="ms-auto">
        <button className="btn btn-outline-light me-2" onClick={onLoginClick}>Login</button>
        <button className="btn btn-outline-light" onClick={onRegisterClick}>Register</button>
      </div>
    </nav>
  )
}

export default Navbar*/

/*import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Mi Agenda</a>
    </nav>
  )
}

export default Navbar*/


const Navbar = ({ token, onLoginClick, onRegisterClick, onLogout }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Mi Agenda</a>
      <div className="ms-auto">
        {!token && (
          <>
            <button className="btn btn-outline-light me-2" onClick={onLoginClick}>Iniciar sesión</button>
            <button className="btn btn-outline-light" onClick={onRegisterClick}>Registrarse</button>
          </>
        )}
        {token && (
          <button className="btn btn-danger" onClick={onLogout}>Cerrar sesión</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar