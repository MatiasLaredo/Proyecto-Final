# Agenda Personal

Este proyecto es una **aplicación web de agenda personal** donde cada usuario puede registrarse, iniciar sesión y gestionar sus propias tareas diarias. Cada tarea tiene un día, una descripción y un nivel de urgencia.

---

## Tecnologías y Frameworks Utilizados

### **Frontend**

- **React** (con Vite)
- **Bootstrap 5** (para estilos)
- **Fetch API** (para peticiones HTTP)

### **Backend**

- **Node.js** y **Express**
- **MongoDB** (base de datos)
- **Mongoose** (ODM para MongoDB)
- **JWT** (jsonwebtoken, para autenticación)
- **bcryptjs** (para hashear contraseñas)
- **dotenv** (variables de entorno)
- **express-validator** (validación de datos)
- **CORS** (para permitir peticiones del frontend)

---

## Estructura del Proyecto

```
Proyecto Final/
│
├── Back_End/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── service/
│   ├── config/
│   ├── .env
│   └── package.json
│
└── front-end/
    ├── public/
    ├── src/
    │   ├── Componentes/
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env
    └── package.json
```

---
