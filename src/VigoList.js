import {useState} from 'react';
import * as ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ResultList from './ResultList';
import React from 'react';

let searchWord = "";


class VigoList extends React.Component{

    handleTextInputChange(e){        
        searchWord = e.target.value;
    }
    
    constructor(props) { // Init props and state
        super(props);
        this.state = { itemList: []};
    }
    
    
doSearchEntity(){

    let url = "http://localhost:8080/add";
    if(searchWord.length >= 4){
        url = "http://localhost:8080/add/postcode/" + searchWord;
    }
    let xhr = new XMLHttpRequest();
    let selfElement = this;
 
    xhr.open('GET', url, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = this.responseText;
            let resp = JSON.parse(response);
            selfElement.setState({ itemList: resp});         
        }
    };
    
    xhr.send();   

}
    
    
    render(){
        return (    
         
        <div className="VigoList">
            <FormControl>
                <TextField id="searchWord" label="Søkeord" onChange={this.handleTextInputChange} />
                Hvis du legger inn et postnummer i søkefeltet vil den søke på postnummer, <br />
                Hvis feltet er tom vil alle personer som er lagt inn listes opp.
                <Button onClick={() => {
                    this.doSearchEntity();
                }}>
                        Send
                </Button>
            </FormControl>
            <ResultList thelist={this.state.itemList} teststring={this.state.teststring} />
        </div>
    );
    }
}
              
                


export default VigoList;
