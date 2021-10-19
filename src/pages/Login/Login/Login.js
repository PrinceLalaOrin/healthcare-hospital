
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, isLogIn,handleReg,handleEmail,handlePassword,toggleLogIn,handleResetPass,error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    
   
    
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }
    return (
        <div className='container-fluid p-5'>
           <h3 className='text-center'>Please {isLogIn ? 'Sign In' : 'Register'}</h3>
         <Form onSubmit={handleReg}>
       <div className="mx-5">
       <Form.Group  as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control style={{ width: '60%' }}  onBlur={handleEmail} type="email" placeholder="Email" required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control  style={{ width: '60%' }} onBlur={handlePassword} type="password" placeholder="Password" required/>
    </Col>
  </Form.Group>
       </div>
 
  <Form.Group as={Row} className="mb-3" onChange={toggleLogIn} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Already Logged In ?" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3 text-danger" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      {error}
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">{isLogIn ? 'Sign In' : 'Do Entry'}</Button>
      
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
    <Button onClick={handleResetPass} variant="secondary" size="sm">
      Reset Password
    </Button>
      <br />
      <br />
      <Button onClick ={handleGoogleLogin} variant="info">Google Sign In</Button>
    </Col>
  </Form.Group>
</Form>
   
        </div>
    );
};

export default Login;