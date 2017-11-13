import React, { Component } from 'react';


class App2 extends Component {

    render(){
        var names=['anu','anu2'];
        var namesList=names.map((name,i)=>
            <li key={i}>{name}</li> 
        )  
        return(<ul className='xyz'>{namesList}</ul>);
    }
}

export default App2;