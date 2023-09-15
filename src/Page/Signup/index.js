import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

const Signup = () => {
    const [Username, setUsername] = useState();
    const [Phone, setPhone] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();
    const Submitdata = async (e) => {
        e.preventDefault();
        try {
            let data = {
                username: Username,
                phone: Phone,
                email: Email,
                password: Password
            };

            const res = await axios.post("http://localhost:5000/register", data);
            console.log(res);
            navigate('/');

        }
        catch (err) {
            console.log("Error", err)
        }
    }
    return (
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-20px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-8 text-center'>

                    <h2 className="fw-bold mb-5">Sign up now</h2>

                    <MDBRow>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Username' id='Username' type='Username' name="Username" value={Username} onChange={(event) => { setUsername(event.target.value) }} />
                        </MDBCol>

                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Phone No' id='Phone' type='Phone' name="Phone" value={Phone} onChange={(event) => { setPhone(event.target.value) }} />
                        </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' label='Email' id='Email' type='Email' name="Email" value={Email} onChange={(event) => { setEmail(event.target.value) }} />
                    <MDBInput wrapperClass='mb-4' label='Password' id='Password' type='Password' name="Password" value={Password} onChange={(event) => { setPassword(event.target.value) }} />

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                    </div>

                    <MDBBtn className='w-10 mb-4' size='md' onClick={Submitdata}>sign up</MDBBtn>

                    <div className="text-center">

                        <p>or sign up with:</p>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>

                    </div>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}
export default Signup;
