import React from "react";
import style from "./Form.module.css";
import validate from './validation.js';

export default function Form(props) {
    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '', 
    });

    const [errors, setErrors] = React.useState({ 
        username: '', 
        password: '', 
    });

    const handleInputChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validate(userData));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="" className={style.label}>Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange} className={style.input}/>
                <p className={style.p}>{errors.username}</p>
                <label htmlFor="" className={style.label}>Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleInputChange} className={style.input}/>
                <p className={style.p}>{errors.password}</p>
                <button className={style.button}>LOGIN</button>
            </form>
        </div>
    )
}