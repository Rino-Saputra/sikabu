import React,{ useState } from 'react'
import { useEffect } from 'react';
import { Image, Modal, Row, Col } from 'react-bootstrap'
import { loginImg } from '../../../../export/image'
import './style.css'

export default function LoginModal(props) {

  const[showLogin, setShowLogin] = useState(true);
  const[showsign, setShowSign] = useState(false);
  const[forgetPw, setForgetPw] = useState(false);
  const[isCheck, setIsCheck]= useState(true);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSign(false);
    setForgetPw(false)
  }

  const handleShowSign = () =>{
    setShowLogin(false);
    setForgetPw(false);
    setShowSign(true);
  }

  const handleForget = () =>{
    setShowLogin(false);
    setShowSign(false);
    setForgetPw(true)
  }

  useEffect(()=>{
    return () =>{
      console.log('unmount')
    }
  },[])

  return (
    <Modal 
      show={props.show} 
      onHide={props.handleClose} 
      size='lg'
      centered 
    >
      <Modal.Body className='bg-transparent'>
        <Row className='d-flex flex-row g-0 align-items-center'>
          <Col lg={8} sm={0}>
            <Image src={loginImg} className='img-fluid d-none d-sm-block'></Image>
          </Col>
          <Col>
            <Row className='text-center position-relative'>
              <Col onClick={handleShowSign}>
                <h5 className='text-secondary'>SIGN UP</h5>
              </Col>
              <Col onClick={handleShowLogin}>
                <h5 className='text-secondary'>LOGIN</h5>
              </Col>
              <div className='bord-wrp position-absolute bottom-0' style={{ marginLeft: showLogin ? '50%' : 0 }}></div>
            </Row>

            { showLogin &&
              <>
                <h5 className='fw-bold my-5'>Log into Your Account</h5>
                <form action="">
                  <input type="email" placeholder='Your Email' className='email-login' required/>
                  <input type="password" placeholder='Your Password' className=' pw-login my-4' required/>
                  <p className='forget' onClick={handleForget}>Forget Password?</p>
                  <button className='btn-login'  style={{backgroundColor: '#f96900'}}>Login Now</button>
                </form>
                <hr />
                <p className='text-secondary text-center' style={{fontSize: 13.9}}>
                  Dont have an account?<span> </span>
                  <span className='sign-up' onClick={handleShowSign}>
                    Sign Up
                  </span>
                </p>
              </> 
            }
            { showsign &&
              <>
                <h5 className='fw-bold my-4'>Create Your Account</h5>
                <form action="">
                  <input type="text" placeholder='Your Name' className='email-login my-4' required/>
                  <input type="phone" placeholder='Your Phone' className='email-login mb-4' required/>
                  <input type="email" placeholder='Your Email' className='email-login mb-4' required/>
                  <input type="password" placeholder='Your Pasword' className='email-login mb-4' required/>
                  <input type="password" placeholder='Confirm Password' className=' pw-login mb-4' required/>
                  <p className='' style={{fontSize: 12}}>
                    <input type="checkbox" className='me-2'checked={isCheck} onClick={() => setIsCheck(!isCheck)}/>
                      By joining, you agree to the Terms and Privacy Policy.
                  </p>
                  <button 
                    className='btn-login'
                    style={{backgroundColor: isCheck ? '#f96900' : '#a1a1a1'}}
                    disabled={isCheck ? '' : 'disabled'}
                    >
                      Create Account
                    </button>
                </form>
                <p className='text-secondary text-center mt-2' style={{fontSize: 13.9}}>
                  Already have acoount?<span> </span>
                  <span className='sign-up' onClick={handleShowLogin}>
                    LogIn
                  </span>
                </p>
              </>
            }
            {forgetPw &&
              <>
                <h5 className='fw-bold my-5'>Forgot Password</h5>
                <form action="">
                  <input type="email" placeholder='Your Email' className='email-login mb-5' required/>
                  <button className='btn-login' style={{backgroundColor: '#f96900'}}>Continue</button>
                </form>
              </>
            }
            
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}
