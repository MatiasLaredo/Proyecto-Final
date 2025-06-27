import React, {useState} from 'react'
import './Modal.css'

const API_URL = import.meta.env.VITE_API_URL;

const RegisterModal = ({ onClose }) => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');  

  const registrarUsuario = async () => {
    try {
      const response = await fetch(`${API_URL}/usuarios/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, contrasena })
      });
      const datos= await response.json()
      if (response.ok) {
        setError('');
        setExito('Usuario registrado con éxito');
        setTimeout(() => {
          setExito ('');
          onClose();
        }, 1500);
      } else {
        setError (datos.mensaje || 'Error al registrar usuario');
      }
    } catch (error) {
      setError('Error de conexión');
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Registrarse</h2>

        <input type="text" 
        placeholder="Nombre" 
        className="form-control mb-2"
        value={nombre}
        onChange={e => setNombre (e.target.value)}/>

        <input type="email" 
        placeholder="Email" 
        className="form-control mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}/>

        <input type="password" 
        placeholder="Contraseña" 
        className="form-control mb-3"
        value={contrasena}
        onChange={e => setContrasena (e.target.value)}/>

        {error && <div className='alert alert-danger py-1'>{error}</div>}
        {exito && <div className='alert alert-success py-1'>{exito}</div>}

        <div className="d-flex justify-content-between">

          <button className="btn btn-secondary"  onClick={onClose}>Cerrar</button>
          <button className="btn btn-success" onClick={registrarUsuario}>Registrarse</button>

        </div>
      </div>
    </div>
  )
}

export default RegisterModal
