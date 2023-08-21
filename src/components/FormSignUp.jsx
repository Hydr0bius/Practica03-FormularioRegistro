import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked/>} label="Promociones" />
                <FormControlLabel control={<Switch defaultChecked/>} label="Novedades" />
            </FormGroup>
            <Button variant='contained'>Registrarse</Button>
        </form>
    )
}
export default  FormSignUp;