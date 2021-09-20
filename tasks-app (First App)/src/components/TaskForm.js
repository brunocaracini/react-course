import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class TaskForm extends Component{

    //Estados
    state = {
        title:'',
        description:''
    }

    //Metodos
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title,this.state.description);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Ingrese una nueva tarea" onChange={this.onChange} value={this.state.title}/>
                <br/>
                <textarea name="description" cols="30" rows="10" onChange={this.onChange} placeholder="Ingrese una descripción de la tarea" style={{marginTop:'20px'}} value={this.state.description}></textarea>
                <br/>
                <button type="submit" style={{marginTop:'20px'}}>Añadir tarea</button>
            </form>
        )
    }
        
}

 