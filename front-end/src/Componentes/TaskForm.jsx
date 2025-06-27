import React, { useState } from 'react'

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ dia: '', descripcion: '', urgencia: 'Baja' })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.dia || !task.descripcion) return
    onAdd(task)
    setTask({ dia: '', descripcion: '', urgencia: 'Baja' })
  }

  return (
    <form className="row g-3 mb-4" onSubmit={handleSubmit}>
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Día"
          name="dia"
          value={task.dia}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Descripción"
          name="descripcion"
          value={task.descripcion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-2">
        <select
          className="form-select"
          name="urgencia"
          value={task.urgencia}
          onChange={handleChange}
        >
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-primary w-100">Agregar</button>
      </div>
    </form>
  )
}

export default TaskForm