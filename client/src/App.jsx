import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Registro</h1>} />
        <Route path="/tasks" element={<h1>Tareas</h1>} />
        <Route path="/add-task" element={<h1>Nueva tarea</h1>} />
        <Route path="/task/:id" element={<h1>Actualizar tarea</h1>} />
        <Route path="/profile" element={<h1>Perfil</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
