import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function FormSignUp (){
    return(
        <form action="">
            <TextField
                required 
                id="name" 
                label="Nombre" 
                variant="standard" 
                fullWidth
                margin='normal' />
            <TextField 
                required 
                id="lastName" 
                label="Apellido" 
                variant="standard" 
                fullWidth
                margin='normal' />
            <TextField 
                required 
                id="email" 
                label="email" 
                variant="standard" 
                fullWidth
                margin='normal' />
            <label>Promociones</label>
            <input type="checkbox" />
            <label>Novedades</label>
            <input type="checkbox" />
            <Button variant='contained'>Registrarse</Button>
        </form>
    )
}
export default  FormSignUp;