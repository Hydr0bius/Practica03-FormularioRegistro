import React, { useState } from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp ({handleSubmit}){
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [promocion, setPromocion] = useState(true);
    const [novedad, setNovedad] = useState(false);
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: '',
        }
    });
    const [errorApellido, setErrorApellido] = useState({
        lastName: {
            error: false,
            message:'',
        },
    })
    function validarNombre (nombre){
        if(nombre.length >= 3){
            return {
                name:{
                    error:false, 
                    menssage: ''},
                }
        }else{
            return {
                name:{
                    error:true,
                    message: 'Deben ser al menos 3 caracteres',
                },
            }
        }
    };
    function validarApellido (nombre){
        if(nombre.length >= 2){
            return {
                lastName:{
                    error:false, 
                    menssage: ''},
                }
        }else{
            return {
                lastName:{
                    error:true,
                    message: 'Deben ser al menos 2 caracteres',
                },
            }
        }
    };

    return(
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit({
                name,
                lastName,
                email,
                promocion,
                novedad,
            });
        }}>
            <TextField
                required 
                id="name" 
                label="Nombre" 
                variant="standard" 
                fullWidth
                margin='normal'
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                error = {errors.name.error}
                helperText = {errors.name.error ? errors.name.message : ''}
                onBlur={(e)=> setErrors(validarNombre(e.target.value))}
                />
            <TextField 
                required 
                id="lastName" 
                label="Apellido" 
                variant="standard" 
                fullWidth
                margin='normal'
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                error = {errorApellido.lastName.error}
                helperText = {errorApellido.lastName.error ? errorApellido.lastName.message : ''}
                onBlur={(e)=> setErrorApellido(validarApellido(e.target.value))}
                />
            <TextField 
                required 
                id="email" 
                label="email" 
                variant="standard" 
                fullWidth
                margin='normal'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            <FormGroup>
                <FormControlLabel control={
                    <Switch
                        defaultChecked
                        checked={promocion}
                        onChange={(e)=>setPromocion(e.target.checked)}
                    />} 
                label="Promociones" />
                <FormControlLabel control={
                    <Switch
                    defaultChecked
                    checked={novedad}
                    onChange={(e)=> setNovedad(e.target.checked)}
                    />} 
                label="Novedades" />
            </FormGroup>
            <Button variant='contained' type='submit'>Registrarse</Button>
        </form>
    )
}
export default  FormSignUp;