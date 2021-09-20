import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import tasks from './sample/task.json';

//Import de componentes
import Tasks from './components/Tasks'
import TasksForm from './components/TaskForm'
import Posts from './components/Posts'


class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title,description) =>{

    //Creo un nuevo objeto Task
    const newTask = {
      titulo:title,
      done:false,
      id:this.state.tasks.length
    }

    //Concateno el arreglo de tareas del estado con la nueva tarea.
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) =>{
    const newTasks = this.state.tasks.filter(task => parseInt(task.id) !== parseInt(id));
    this.setState({tasks:newTasks});
  }

  checkDone = (id) =>{
    var newTasks =[];
    for(var i in this.state.tasks){
      var task = this.state.tasks[i];
      if (task.id === id){
        task.done = !task.done
      }
      newTasks.push(task);
    }
    //VERSIÓN CON ECMA 6 --> Ver por qué no funciona.
    /* const newTasks = this.state.tasks.map(task => {
      alert(task.id);
      if (parseInt(task.id) === parseInt(id)){
        task.done = !task.done
      }
    }); */
    this.setState({tasks:newTasks});
  }

  render(){
    return(
      <div>
        <Router>

          <Link to="/">Home</Link>
          <br/>
          <Link to="/posts">Posts</Link>

          <Route exact path="/" render={() =>{
            //Los pongo dentro de un div ya que sólo se puede retornar un componente el mismo tiempo.
            return <div>
              <TasksForm addTask={this.addTask}/>
              <Tasks tasks={this.state.tasks} deleteTask = {this.deleteTask} checkDone = {this.checkDone}/>
            </div>
            }}>
          </Route>

          <Route path="/posts" component={Posts}>
          </Route>
          
        </Router>        
      </div>
    )
  }
}

export default App;
