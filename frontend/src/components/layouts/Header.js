import {useContext} from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import {Link} from 'react-router-dom'
import AuthService from "../../api/AuthService";


export default function Header() {


  const {user, auth} = useContext(AuthContext)

  return (
    <nav className='bg-blueGray-900 text-white' >
     <div className='flex items-center mx-8 h-16 justify-between'>
     <h3>App Carrito</h3>
      <div className="">
        <button className="bg-blue-500 px-4 py-1 rounded-lg  "> Agregar </button>
      </div>
     </div>
    </nav>
  );
};

