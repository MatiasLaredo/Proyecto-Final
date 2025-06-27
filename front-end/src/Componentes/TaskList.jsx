import React from 'react'

const TaskList = ({ tasks = [], onToggle, onDelete }) => {
  const getUrgencyColor = (urgencia) => {
    if (urgencia === 'Alta') return 'bg-danger text-white'
    if (urgencia === 'Media') return 'bg-warning'
    return 'bg-success text-white'
  }

  return (
    <div className="row">
      {tasks.length === 0 && <p className="text-center">No hay tareas aún.</p>}
      {tasks.map((task) => (
        <div className="col-md-6 mb-3" key={task._id}>
          <div className={`card ${getUrgencyColor(task.urgencia)}`}>
            <div className="card-body">
              <h5 className="card-title">{task.dia} - {task.descripcion}</h5>
              <p className="card-text">Urgencia: <strong>{task.urgencia}</strong></p>
              <button
                className={`btn btn-sm ${task.hecha ? 'btn-light' : 'btn-outline-light'} me-2`}
                onClick={() => onToggle(task._id)}
              >
                {task.hecha ? '✔ Hecha' : 'Marcar como hecha'}
              </button>
              <button
                className="btn btn-sm btn-dark"
                onClick={() => onDelete(task._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
