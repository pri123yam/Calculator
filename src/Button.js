import React from 'react';
import './App.css'
class Buton extends React.Component{
    render()
    {
        return(
            <button className="Butt" onClick={this.props.click}>{this.props.data}</button>
        )
    }
}

export default Buton;