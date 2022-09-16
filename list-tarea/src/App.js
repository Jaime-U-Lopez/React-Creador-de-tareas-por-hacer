//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';
function App() {


  //pasar la tarea a LocalStorage, para que se guarden en la memoraria del explorador

  let initialTask=JSON.parse(localStorage.getItem("tasks"));

   if (!initialTask){
    initialTask =[];
  
  }

  console.log(initialTask)
  const[tasks,setTasks]=useState(initialTask)
  
 useEffect(() =>{

    if(initialTask){
      localStorage.setItem( "tasks", JSON.stringify(tasks));

    }else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  },[initialTask,tasks]
     
    )
   
    //actualizar nuestro estado para que no se nos borre
  const createTask=(task)=>{
    
    setTasks([...tasks, task]);  
      
    /* console.log(task)
    console.log(tasks) */
  }

  const deleteTask=(id)=>{
    //este es un filter para buscar la tarea y las que sean diferentes que me las guade
    const currenTask= tasks.filter((task)=> task.idTask !==id )
    console.log(currenTask);
    //  actualizar el estado del array que se esta corriendo

    setTasks(currenTask)
  }
  return (
    <Container>
      <br></br>
      <Header/>  
      <br></br>
      <InputTask createTask={createTask}/> 
     
     <TaskContent mesaje ="gola"  tasks={tasks} deleteTask={deleteTask} />
  
    </Container>
  )


 
    
}

export default App;
