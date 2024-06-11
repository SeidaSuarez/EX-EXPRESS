import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";



function Navbar() {

  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={
          isAuthenticated ? "/tasks" : "/"
          }>
            <h1 className="text-2xl font-bold">Tabla de tareas </h1>          
      </Link>
      
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Bienvenido {user.username}
            </li>
            <li>
              <Link to="/add-task"
              className="bg-blue-500 px-4 py-1 rounded-md">Add Task</Link>
              
            </li>
            <li>
              <Link to="/" onClick={() => logout()}
              className="bg-sky-500 px-4 py-1 rounded-md">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login"
              className="bg-sky-500 px-4 py-1 rounded-md"
              >Login</Link>
            </li>
            <li>
              <Link to="/register"
              className="bg-sky-500 px-4 py-1 rounded-md"
              >Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;