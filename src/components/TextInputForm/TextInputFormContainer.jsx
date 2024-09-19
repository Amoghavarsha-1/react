
import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    const [inputType,setInputType]= useState("password");

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted")
    }

    function handleTextInputchange(event){
        console.log("Text Input Change"); 
        console.log(event.target.value);

    }

    function handleShowHideClick(){
        console.log("show / hide button click");
        if(inputType === "password"){
            setInputType("text")
        }else{
            setInputType("password")
        }
        console.log("Input Type")
    }

    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputchange={handleTextInputchange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer;