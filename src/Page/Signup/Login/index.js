import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';


const Login = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();

    const dataSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = {
                email: Email,
                password: Password
            };

            const res = await axios.post("http://localhost:5000/userlogin", data);
            console.log(res);
            navigate('/dashboard');

        }
        catch (err) {
            console.log("Error", err)

        }
    }

    return (
        <div style={{ height: '500px !important', display: 'flex' }}>
            {/* <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='Email' type='Email' size="lg" name="Email" value={Email} onChange={(event) => { setEmail(event.target.value) }} />
                                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='Email' type='Password' size="lg" name="Password" value={Password} onChange={(event) => { setPassword(event.target.value) }} />

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                <MDBBtn size='lg' onClick={dataSubmit}>
                                    Login
                                </MDBBtn>

                                <hr className="my-4" />

                                 <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                                    <MDBIcon fab icon="google" className="mx-2" />
                                    Sign in with google
                                </MDBBtn> 

                                 <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                    <MDBIcon fab icon="facebook-f" className="mx-2" />
                                    Sign in with facebook
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer> */}
            <div className='border border-2' style={{ width: '50%', height: '100vh' }}>

            </div>
            <div className='border border-2' style={{ width: '50%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='border border-2 border-primary rounded ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', width: '80%' }}>
                    <h4 className='my-4 font-weight-bold'>Login</h4>
                    <input className='my-2 p-2 w-75' placeholder="Enter Your Email address"></input>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Password'></input>
                    <button className='btn btn-primary my-3 px-5'>Log In </button>

                    <p>Already have an account? <a className='text-primary'>Sign up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;