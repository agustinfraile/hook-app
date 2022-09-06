import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export default function SimpleForm() {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'mail@cuenta.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value,
        })
    }

    // useEffect gral
    useEffect( () => {
        // console.log('use effect cargado')
    }, []);

    // useEffect para el form
    useEffect( () => {
        // console.log('form cargado')
    }, [formState]);


    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text" 
                className='form-control' 
                placeholder='Username' 
                name='username' 
                value={username}
                onChange={onInputChange} 
            />

            {
                (username === 'strider2') && <Message />
            }
            
            <input 
                type="email" 
                className='form-control mt-2' 
                placeholder='mail@cuenta.com' 
                name='email' 
                value={email}
                onChange={onInputChange}
            />


        </>
    )
}
