
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";
import './Register.css';

const schema = yup.object().shape({
    Name: yup.string().required('please enter your Name'),
    email: yup.string().required('please enter your  valid email').required('enter email'),
    password: yup.string().required('please enter your password'),
    phoneNumber: yup.string().required('enter 10 digit your mobile number'),
});
const Register = () => {
    // const history=useHistory();
    const [form, setForm] = useState(true);
    const { register, handleSubmit, formState: { errors, isValid, isDirty },

    } = useForm({
        resolver: yupResolver(schema),
    });
    const valid1 = sessionStorage.getItem("Name");
    const valid2 = sessionStorage.getItem("Email");
    const valid3 = sessionStorage.getItem("Password");
    const valid4 = sessionStorage.getItem("phoneNumber");
    if (isValid && valid1 && valid2 && valid3 && valid4 && !form) {
        return <Redirect to='/home' />
    }

    return (
        <div className="header">
            <h1 id="firstone">Register Now</h1>
            <div id="forms">
                {<form onSubmit={handleSubmit((data) => {
                    sessionStorage.setItem("name", data.Name);
                    sessionStorage.setItem("email", data.Email);
                    sessionStorage.setItem("password", data.phoneNumber);
                    sessionStorage.setItem("phoneNumber", data.phoneNumber);
                    sessionStorage.setItem("token", 5745)

                })}>

                    <input {...register('Name')} type="text" placeholder="Name"></input>
                    <p id="errormes">{errors.Name?.message}</p>
                    <input {...register('email')} type="email" placeholder="Email"></input>
                    <p id="errormes">{errors.email?.message}</p>
                    <input {...register('password')} type="password" placeholder="password"></input>
                    <p id="errormes">{errors.password?.message}</p>
                    <input {...register('phoneNumber')} type="number" placeholder="phone number"></input>
                    <p id="errormes">{errors.phoneNumber?.message}</p>
                    <button type="submit" disabled={isDirty && !isValid} onClick={() => setForm(false)} id="submit">submit</button>
                    

                </form>}
                <p className="redpara p-4">
                       Go to login?click this <a href="/login">Login</a>
                    </p>

            </div>

        </div>
    )
}
export default Register