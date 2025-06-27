import React, { useState, useEffect } from "react";
import Navbar from "./Componentes/Navbar";
import FormularioTarea from "./Componentes/TaskForm";
import ListaTareas from "./Componentes/TaskList";
import LoginModal from "./Componentes/LoginModal";
import RegisterModal from "./Componentes/RegisterModal";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  useEffect(() => {
  const obtenerTareas = async () => {
    const token = localStorage.getItem("token");
    if (!token)
    {
      setTareas([]);
      return;
    }
    try {
      const response = await fetch(`${API_URL}/tareas`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setTareas(data);
    } catch (error) {
      console.error("Error al encontrar tareas:", error);
      setTareas([]);
    }
  };
  obtenerTareas();
}, []);


const agregarTarea = async (tarea) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${API_URL}/tareas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(tarea)
    });
    const nuevaTarea = await res.json();
    setTareas([...tareas, nuevaTarea]);
  } catch (error) {
    console.error("Error al agregar tarea:", error);
  }
};

const alternarHecha = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const tareaActual = tareas.find(t => t._id === id);
    const res = await fetch(`${API_URL}/tareas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ hecha: !tareaActual.hecha })
    });
    const tareaActualizada = await res.json();
    setTareas(tareas.map(t => t._id === id ? tareaActualizada : t));
  } catch (error) {
    console.error("Error al alternar tarea:", error);
  }
};

const eliminarTarea = async (id) => {
  const token = localStorage.getItem("token");
  try {
    await fetch(`${API_URL}/tareas/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setTareas(tareas.filter(t => t._id !== id));
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
  }
};

const token = localStorage.getItem("token");

  return (
    <div className="app-container">

      <Navbar 
  
  token={token}
  onLoginClick={() => setMostrarLogin(true)} 
  onRegisterClick={() => setMostrarRegistro(true)} 
  onLogout={() => {
    localStorage.removeItem("token");
    window.location.reload();
  }}
/> 
      <main className="main-content">

        <h1 className="text-center title">Agenda Personal</h1>

        <FormularioTarea onAdd={agregarTarea} />
        <ListaTareas tasks={tareas  || []} onToggle={alternarHecha} onDelete={eliminarTarea} />

      </main>

      {mostrarLogin && <LoginModal onClose={() => setMostrarLogin(false)} />}
      {mostrarRegistro && <RegisterModal onClose={() => setMostrarRegistro(false)} />}
    </div>
  );
};

export default App;
