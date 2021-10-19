import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const linkStyle ={
    margin : '1rem',
    textDecoration : 'none',
    color : 'black',
    fontWeight : '100px'
};

const Header = () => {
    const {user , logOut} = useAuth();
    return (
        
        <div>
            <h1>Healthcare Hospital</h1>
            <NavLink to='/home'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}> Home </NavLink>
           

           <NavLink to='/doctors'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}> Our Doctors </NavLink>
           <NavLink to='/contact'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}> Contact Us </NavLink>

           <NavLink to='/about'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}> About </NavLink>
           
           
           {user?.email ? 
               <Button onClick={logOut} variant="secondary">Log Out</Button> :
               <NavLink to='/login'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}>  <Button variant="info"> Log In</Button> </NavLink>}
           
           <Navbar>
        <Container>
         <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
               Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
            </Navbar>
        </div>
    );
};

export default Header;