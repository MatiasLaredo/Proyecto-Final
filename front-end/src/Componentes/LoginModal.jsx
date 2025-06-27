import React, {useState} from 'react'
import './Modal.css'

const API_URL=import.meta.env.VITE_API_URL

const LoginModal = ({ onClose }) => {

  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const inicioSesion = async () => {
    try{
      const response = await fetch(`${API_URL}/usuarios/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, contrasena })
      });
      const datos = await response.json();
      if (response.ok && datos.token) {localStorage.setItem('token', datos.token);
        setError('');
        onClose();
        window.location.reload()
      }
      else {
        setError(datos.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión');
    }
  }
  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Iniciar Sesión</h2>
        
        <input 
        type="text"
        placeholder="Email"
        className="form-control mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}/>

        <input type="password" 
        placeholder="Contraseña" 
        className="form-control mb-3"
        value={contrasena}
        onChange={e => setContrasena(e.target.value)}/>


        {error && <div className="alert alert-danger py-1">{error}</div>}
        <div className="d-flex justify-content-between">

          <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>

          <button className="btn btn-primary" onClick={inicioSesion}>Ingresar</button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
