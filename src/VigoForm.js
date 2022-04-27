import './VigoForm.css';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';


let entityObject = {id:null,navn: null,adresse:null,postnr:null,poststed:null,telefon:null,epost:null,fodselsdato:null,markedsforing:null}; 

const VigoForm = () => {
    
    const [textInput, setTextInput] = useState('');

    const handleTextInputChange = event => {        
        setTextInput(event.target.value);
        entityObject[event.target.id] = event.target.value;
    };
    
    return (    
         
    <div className="VigoForm">
        <FormControl>
            <TextField id="navn" label="Navn" onChange={handleTextInputChange} />
            <TextField id="adresse" label="Adresse" onChange={handleTextInputChange} />
            <TextField id="postnr" label="Postnummer" onChange={handleTextInputChange} />
            <TextField id="poststed" label="Poststed" onChange={handleTextInputChange} />
            <TextField id="telefon" label="Telefon" onChange={handleTextInputChange} />
            <TextField id="epost" label="Epost" onChange={handleTextInputChange} />
            <TextField id="fodselsdato" label="Fødselsdato" onChange={handleTextInputChange} />
            <Checkbox id="markedsforing" label="Tillat markedsføring" value="nei" onChange={handleTextInputChange} />
            <Button onClick={() => {
                doSendEntity();
            }}>
                    Send
            </Button>
        </FormControl>
    </div>
  );
}

function doSendEntity(){
    console.log(entityObject.navn);
    if(entityObject.navn != null && entityObject.navn.trim().length > 0){
  
        let json = JSON.stringify(entityObject); 
        const url = "http://localhost:8080/add";
        let xhr = new XMLHttpRequest();
 
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let response = this.responseText;
                let resp = JSON.parse(response)
            
                if(resp.status == 1){
                    alert("Person er laget med id " + resp.id);
                }else{
                    alert("person ble ikke lagret");
                }
            }
        };
    
        xhr.send(json);   

    }else{
        alert("Du kan ikke legge til en person uten å legge inn et navn.");
    }
    

}

export default VigoForm;