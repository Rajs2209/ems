import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";


const Login = ({ setLoggedin }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const dataSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = {
                email: email,
                password: password
            };

            const res = await axios.post("https://emsbackend.vercel.app/userlogin", data);
            console.log(res);

            if (res.status == 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else if (res.status == 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(res.data.userdata)
                localStorage.setItem('username', res.data.userdata.username);
                localStorage.setItem('isadmin', res.data.userdata.isadmin);
                localStorage.setItem('isloggedin', true)
                setLoggedin(true);
                navigate('/dashboard');
            }

            else if (res.status == 202) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })


            }
            else if (res.status == 203) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })

            }

        }
        catch (err) {
            console.log("Error", err)

        }
    }

    return (
        <div style={{ height: '500px !important', display: 'flex' }}>
            <div className='bg-primary bg-gradient d-none d-md-flex' style={{ width: '80%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '50%', height: '40vh', objectFit: 'cover' }} src="https://www.clipartmax.com/png/middle/414-4147696_favicon-ico-news-favicon.png" />
            </div>
            <div className='w-100' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='border border-2 rounded ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', width: '80%' }}>
                    <h4 className='my-4 font-weight-bold'>Login</h4>
                    <input className='my-2 p-2 w-75' placeholder="Enter Your Email address" id='email' type='email' name="email" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Password' id='password' type='password' name="password" value={password} onChange={(event) => { setPassword(event.target.value) }}></input>
                    <button className='btn btn-primary my-3 px-5' onClick={dataSubmit}>Log In </button>
                    <p>Create an Account? <Link to="/signup" className='text-primary'> Sign up </Link> here </p>
                </div>
            </div>
        </div>
    );
}

export default Login;