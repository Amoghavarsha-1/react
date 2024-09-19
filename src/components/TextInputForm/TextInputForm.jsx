import TextInput from "../Textinput/Textinput";
import Button from "../Button/Button"

function TextInputForm(inputType,handleFormSubmit,handleTextInputchange,handleShowHideClick){

   
    return (
        <form onSubmit={handleFormSubmit}>
           <div>
                <TextInput
                    type={inputType}
                    label = "Enter a word or Phrase"
                    placeholder="Enter a word or Phrase here"
                    onChangeHandler={handleTextInputchange}
                />
            </div>
           
            <div>
                <Button 
                    styleType="warning"
                    text = "Show / Hide"
                    onClickHandler={handleShowHideClick}
                />
            </div> 

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )

}

export default TextInputForm;