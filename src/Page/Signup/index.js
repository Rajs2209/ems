import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

const Signup = () => {
    const [username, setUsername] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const Submitdata = async (e) => {
        e.preventDefault();
        try {
            let data = {
                username: username,
                phone: phone,
                email: email,
                password: password
            };

            const res = await axios.post("http://localhost:5000/register", data);
            console.log(res);
            if (res.status == 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/');
            }

            else if (res.status == 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })

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

        }
        catch (err) {
            console.log("Error", err)
        }
    }
    return (

        <div style={{ height: '500px !important', display: 'flex' }}>
            <div className='bg-primary bg-gradient' style={{ width: '50%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '40%', height: '40vh', objectFit: 'cover' }} src="https://www.clipartmax.com/png/middle/414-4147696_favicon-ico-news-favicon.png" />
            </div>
            <div className='' style={{ width: '50%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='border border-2 rounded ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', width: '80%' }}>
                    <h4 className='my-4 font-weight-bold'>Signup</h4>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Username' id='username' type='username' name="username" value={username} onChange={(event) => { setUsername(event.target.value) }}></input>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Phone No' id='phone' type='phone' name="phone" value={phone} onChange={(event) => { setPhone(event.target.value) }}></input>
                    <input className='my-2 p-2 w-75' placeholder="Enter Your Email address" id='email' type='email' name="email" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Password' id='password' type='password' name="password" value={password} onChange={(event) => { setPassword(event.target.value) }}></input>
                    <button className='btn btn-primary my-3 px-5' onClick={Submitdata}>Sign Up </button>
                    <p>Already have an account? <Link to="/" className='text-primary'> Log In </Link> here </p>
                </div>
            </div>
        </div>
    );
}
export default Signup;
