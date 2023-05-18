import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import Cart from '../screens/Cart';
export default function Navbar() {

  let data = useCart();
  const [cartView,setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () =>{
     localStorage.removeItem('authToken');
     navigate('/');
  }



  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 fst-italic" to='/' >Foodie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-1">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
      {/* {(localStorage.getItem("authToken")) ?
         <li className="nav-item">
         <Link className="nav-link active fs-5" aria-current="page" to="/">MyOrder</Link>
       </li> :""
      } */}
      </ul>
      { !(localStorage.getItem("authToken"))?
      <div className='d-flex'>
           <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/Signup">SignUp</Link>
      </div>
       :
       <>
       <div  className="btn bg-white text-success mx-1" onClick={()=>{setCartView(true)}}>
           MyCart {" "}
           <Badge pill bg-danger>{data.length}</Badge>
       </div>
       {cartView ? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:""}
       <div  className="btn bg-white text-danger mx-1" onClick={handleLogout}>
           Logout
       </div>
       </>
       }
    </div>
  </div>
</nav>
    </div>
  )
}


