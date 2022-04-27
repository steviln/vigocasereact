import React from 'react';

class ResultList extends React.Component {
    
    constructor(props) { // Init props and state
        super(props);
        this.state = { focused: ""};
    }
    
    
    handleListClick(dataID){

        let url = "http://localhost:8080/add/person/" + dataID;
        let xhr = new XMLHttpRequest();
        let selfref = this;
 
        xhr.open('GET', url, true);
    
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let response = this.responseText;
                let resp = JSON.parse(response);
                if(resp.length > 0){
                    let element = resp[0];        
                    let newHtml = "id:" + element.id + " Navn: " + element.navn + ", adresse: " + element.adresse + ", postnr og poststed: " + element.postnr + " " + element.poststed + ", Telefon: " + element.telefon + ", Epost: " + element.epost + " Fødselsdato: " + element.fodselsdato + " ";
                    selfref.setState({focused:newHtml});
                }else{
                    selfref.setState({focused:""});
                }
         
            }
        };
    
        xhr.send(); 
    }
    
    
    render(){
        
        return (
            <div>
                <div>
                <h4>Valgt person</h4>
                    {this.state.focused}
                </div>
                <h4>Personliste</h4>
                <ul>
                    {this.props.thelist.map(data => (
                        <li key={data.id} onClick={ () => this.handleListClick(data.id)}>{data.navn}</li>
                    ))}
                </ul>
                
            </div>
        );
    }
}

export default ResultList;
