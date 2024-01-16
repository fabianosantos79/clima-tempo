
import React from "react";
import styled from "styled-components";

const FormEstilizado = styled.form`
    width: 100%;
    margin: auto;
    padding: 5px 10px;
    input{
        height: 40px;
        width: 380px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        border: none;
        padding: 5px 30px;
        font-size: 20px;
        outline: none;
        color: #555555;
    }
    button{
        background-color: #2679BB;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        height: 50px;
        padding: 5px 15px;
        color: #ffffff;
        font-size: 20px;
        border: none;
        cursor: pointer;
    }
`

const Form = () => {

    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=&appid=be2c1f1cdfe52b9d7fa86891ff80da55&units=metric&lang=pt_br`
    
    
    
    const formulario = document.getElementById("formCidade")
    formulario?.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputValue = document.querySelector('#inputCidade');
        
    })
    
    
    
  return (
    <FormEstilizado id='formCidade'>
        <input type="text" id="inputCidade" placeholder="Nome da cidade" />
        <button type="submit">Consultar</button>
    </FormEstilizado>
  )
}

export default Form