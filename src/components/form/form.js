import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useState } from "react";
import style from './form.module.css';

function Form (){

    const [user, setUser] = useState({name:'', email:'',phone:'', password:''});
    const {name, email, phone, password} = user;

    // const handleNameChange = (e) =>
    //     // console.log(e.target.value);
    //     setUser({name:e.target.value, email, phone, password});


        const handleChange = (e) => {
            setUser({ ...user, [e.target.value]:e.target.value });
        };


        // const handleChange = (e) => {
        //     const fieldName = e.target.name;
        //     if(fieldName === 'name'){
        //         setUser({name:e.target.value, email, phone, password});
        //     }else if(fieldName === 'email'){
        //         setUser({name, email:e.target.value, phone, password});
        //     }else if(fieldName === 'phone'){
        //         setUser({name, email, phone:e.target.value, password});
        //     }else if(fieldName === 'password'){
        //         setUser({name, email, phone, password:e.target.value});
        //     }
        //     }

        
        

        const handleSubmit = (e) => {
        console.log("form is submitted");
        console.log(user);
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
            <input type="text" name="name" id="name" value={name} onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor="email" className={style.ml}>Email:  </label>
            <input type="email" name="email" id="email" value={email} onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor="phone" className={style.ml}>Phone: </label>
            <input type="text" name = "phone" value={phone} onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor="password" className={style.ml}>Password:  </label>
            <input type="password" name="password" id="password" value={password} onChange={handleChange} required></input>
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