import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

const Signup = () => {
    const [username, setUsername] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isadmin, setIsadmin] = useState(false);
    const [code, setCode] = useState();
    const [iscodevalid, setIscodevalid] = useState(false);
    const navigate = useNavigate();
    const Submitdata = async (e) => {
        e.preventDefault();
        if (isadmin && code != "MYORG123") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Invalid Organization Code",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        try {
            let data = {
                username: username,
                phone: phone,
                email: email,
                password: password,
                isadmin: isadmin
            };
            const res = await axios.post("https://emsbackend.vercel.app/register", data);
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
                <div className='border border-2 rounded ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '85vh', width: '80%' }}>
                    <h4 className='my-4 font-weight-bold'>Signup</h4>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Username' id='username' type='username' name="username" value={username} onChange={(event) => { setUsername(event.target.value) }}></input>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Phone No' id='phone' type='phone' name="phone" value={phone} onChange={(event) => { setPhone(event.target.value) }}></input>
                    <input className='my-2 p-2 w-75' placeholder="Enter Your Email address" id='email' type='email' name="email" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
                    <input className='my-2 p-2 w-75' placeholder='Enter Your Password' id='password' type='password' name="password" value={password} onChange={(event) => { setPassword(event.target.value) }}></input>
                    <div>
                        <label>Sign up as Admin?</label><input className='mx-2' type="checkbox" checked={isadmin} onChange={(event) => { setIsadmin(event.target.checked) }}></input>
                    </div>
                    {isadmin == true ? <div style={{ display: 'flex', alignItems: 'center' }}><input style={{ width: '100% !important' }} className='my-2 p-2' placeholder='Enter Your ORG Code' id='code' type='code' name="code" value={code} onChange={(event) => {
                        setCode(event.target.value)
                        if (event.target.value == "MYORG123") {
                            setIscodevalid(true);
                        }
                        else {
                            setIscodevalid(false);
                        }
                    }}></input>
                        {iscodevalid == true ? <img src="https://i.makeagif.com/media/3-19-2015/8JIQ3-.gif" style={{ width: '30px', height: '30px' }} /> : null}
                    </div> : null}
                    <button className='btn btn-primary my-3 px-5' onClick={Submitdata}>Sign Up </button>
                    <p>Already have an account? <Link to="/" className='text-primary'> Log In </Link> here </p>
                </div>
            </div>
        </div>
    );
}
export default Signup;
