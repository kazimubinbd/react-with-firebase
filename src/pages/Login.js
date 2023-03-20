import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {

    const [showPass, setShowPass] = useState('password')
    const hadnleShowPassword = () => {
        if (showPass === 'password') {
            setShowPass('text')
        } else {
            setShowPass('password')
        }
    }
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setErrorPassword('')
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError('')
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            setEmailError('email is requered');
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError('oi beta thik thak email de')
            }
        }
        if (!password) {
            setErrorPassword('password de');
        } 

        else{
            console.log(email, password)
        }
    }



    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-lg-4 offset-lg-4 mt-5 mb-5">
                    <div>
                        <h1 className='text-primary text-center h1'>Lgoin</h1>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    onChange={handleEmail}
                                    type="text"
                                    placeholder="Enter email"
                                    className={`${emailError && 'border border-danger'}`} />
                                <p className='text-danger'>{emailError}</p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <div className='position-relative'>
                                    <div onClick={hadnleShowPassword} style={{ right: '5px' }} className=" position-absolute top-50 translate-middle">
                                        {
                                            showPass === 'password' ?
                                                <AiFillEyeInvisible></AiFillEyeInvisible>
                                                :
                                                <AiFillEye></AiFillEye>
                                        }
                                    </div>
                                    <Form.Control className={`${errorPassword && 'border border-danger'}`} onChange={handlePassword} type={showPass} placeholder="Password" />
                                </div>
                                <p className='text-danger'>{errorPassword}</p>
                            </Form.Group>


                            <Button variant="primary" className='w-100' type="submit">
                                Loign
                            </Button>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;