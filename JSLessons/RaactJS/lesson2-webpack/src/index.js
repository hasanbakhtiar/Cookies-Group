import React from 'react';
import ReactDOM from 'react-dom';
import flower from './img/flowers.webp'
import './sass/style.scss';

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <img width="1000" src={flower} alt="" />
                <h1>{this.props.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, iure, veniam voluptatem amet vitae in esse optio unde quam totam praesentium ipsum quibusdam! Qui, perferendis labore? Nesciunt fugit excepturi tenetur!</p>
            </div>
        )
    }
}



class App extends React.Component{
    render(){
        return(
            <>
            <Card />
           
            </>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));