import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useState } from "react";
import style from './form.module.css';

function Form (){

    const [name, setName] = useState("");
    const  [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) =>
        // console.log(e.target.value);
        setName(e.target.value);

        const handleEmailChange = (e) =>
        // console.log(e.target.value);
        setEmail(e.target.value);

        const handlePhoneChange = (e) =>
        setPhone(e.target.value);

        const handlePasswordChange = (e) => 
        // console.log(e.target.value);
        setPassword(e.target.value);

        const handleSubmit = (e) => {
        console.log("form is submitted");
        let userInfo = {
            name,
            Email : email,
            Phone : phone,
            password

        }
        console.log(userInfo);
        e.preventDefault();
        };
    return(
        <div>
        
            <Card style={{width:"700px", textAlign: "center", marginleft:"400px"}}>
            <Card.Header className={style.heading1}>Registration Form</Card.Header>
            <Card.Body>
            <form action="" onSubmit={handleSubmit}>
            <div className={style.formGroup}>
            <label htmlFor="name" className={style.ml}>Name:  </label>
            <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor="email" className={style.ml}>Email:  </label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor="phone" className={style.ml}>Phone: </label>
            <input type="text" name = "phone" value={phone} onChange={handlePhoneChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor="password" className={style.ml}>Password:  </label>
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} required></input>
            </div>
            <div className={style.formGroup}>
                <Button variant="info" type="submit" >Submit</Button>
            </div>
            </form>
            </Card.Body>
            
            </Card>
            
        </div>
    )
}

export default Form;