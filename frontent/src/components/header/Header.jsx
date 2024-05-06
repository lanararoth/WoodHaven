import React, { useEffect, useRef } from 'react'
import './header.css';
import {  Container, Row } from 'react-bootstrap';
import logo from '../../assets/images/clean-house.png';
import {  Link, NavLink, useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/images/cart.png';

import userIcon from '../../assets/images/user.png';
import {motion} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';



const nav__links = [
{
    path:'home',
    display:'Home',
},
{
    path:'shop',
    display:'Shop',
},
{
    path:'cart',
    display:'Cart',
},
];

const Header = () => {
const dispatch = useDispatch()

const headerRef = useRef(null)

const totalQuantity=useSelector(state=>state.cart.totalQuantity);

const navigate = useNavigate()

const stickyHeaderFunc = () => {
  window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
      headerRef.current.classList.add('sticky__header');
    }
    else{
      headerRef.current.classList.remove('sticky__header');
    }
  });
};


useEffect(() => {
  stickyHeaderFunc();

  return() => window.removeEventListener('scroll',stickyHeaderFunc);
});


  

  const navigateToCart=()=>{
    navigate("/cart")
  }

  const navigateToUser=()=>{
    navigate("/user")
  }
  const user = useSelector((state) => state.user.user);
  
  const logout = () => {
    dispatch(setUser(null))

  }

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt=""/>
            <div>
              <h1>WoodHaven</h1>
            </div>
          </div>
            
            <div className="navigation">
               <ul className="menu">
                {
                    nav__links.map((item, index)=>(
                      <li className="nav__item" key={index}>
                        <NavLink to={item.path}
                         className={(navClass)=>navClass.isActive ? 'nav__active' : ''}>
                            {item.display}</NavLink>
                      </li>  
                    ))
                }
                

               </ul> 
            </div>

            <div className="nav__icons">


                
                <span className="cart__icon" onClick={navigateToCart}><img src={cartIcon} alt=''/>
                <span className="badge">{totalQuantity}</span>
                </span>
               {user &&<span>
                <motion.button whileTap={{scale:1}} style={{width:'65px',height:'35px',display:'flex',alignItems:'center',justifyContent:'',background:'#000C43',color:'#fff',borderRadius:'5px',border:'1px solid #003366'}} >
                  <button onClick={logout} style={{width:'65px',height:'35px',display:'flex',alignItems:'center',justifyContent:'',background:'#000C43',color:'#fff',borderRadius:'5px',border:'1px solid #003366'}}>Logout</button>
                </motion.button>
               </span>}
               <span>                
                <motion.img whileTap={{scale:1.2}} onClick={navigateToUser} src={userIcon} alt=''/>
               </span>
             
               {!user &&   <span><motion.button whileTap={{scale:1}} style={{width:'60px',height:'30px',display:'flex',alignItems:'center',justifyContent:'center',background:'#000C43',color:'#fff',borderRadius:'5px',border:'1px solid #003366'}}>
                  <Link to='/login'>Login</Link>
                </motion.button>
                </span>}
                
             
            </div>
            
                
            

         </div>  
        </Row>
    </Container>
  </header>
}

export default Header;