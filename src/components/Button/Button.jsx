import getButtonStyling from "./getButtonStyling";

function Button({text , onClickHandler,styleType = "primary",type="button"}){
// props ==> act as a parameter
    console.log(text);
    return (
        // here camel case is necessary
        <button         
        onClick = {onClickHandler}
        type={type}
        // style = {{"backgroundColor" : "blue" , 'color' : 'white'}} //these extra curly brackets indicates JSX curly
       className={`px-[17px] py-2  ${getButtonStyling(styleType)} text-white `} // 1 tailwind unit ==> 4px,therfore 4 taiwind unit ==> 16px ==> px-4 ==> if i need my choices then write like..==. px-[19px]
       >   
           {text}
        </button>
    );
}



export default Button; 