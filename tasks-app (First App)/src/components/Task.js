import React, {Component} from "react";
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component{

    //Metodos
    StyleCompleted() {
        return{
            background: this.props.task.done ? 'green' : 'red',
            color: '#ffffff',
            textDecoration : this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        //Variables
        const {task} = this.props;
        return(
            <div>
              <p className="taskName" style={this.StyleCompleted()}>{task.id} - {task.titulo} - {String(task.done)}</p>
              <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
              <button style={btnDelete} onClick = {this.props.deleteTask.bind(this,task.id)}>
                  Eliminar tarea
              </button>
            </div> 
        )
    }
}

//PropTypes:

Task.propTypes = {
    task: PropTypes.object.isRequired
}

//CSS
const btnDelete = {
    fontSize:'12px',
    background: 'grey',
    color: '#ffffff',
    borderRadius: '5%',
    cursor: 'pointer',
    border: 'none',
    height: '25px'
};

export default Task;