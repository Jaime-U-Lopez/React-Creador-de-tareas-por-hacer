
import { useState } from 'react';
import{Select, Input,Button,Grid,Header,Icon } from 'semantic-ui-react';
import{v4 as uuidv4} from 'uuid';
const options = [

    {key :"Deporte", text:"Deporte", value:"Deporte"},
    {key :"Casa",    text:"Casa ",   value:"Casa"},
    {key :"Oficina", text:"Oficina", value:"Oficina"},
    {key :"Otra",    text:"Otra",    value:"Otra"}
]

export default function InputTask(props) {

const [task, setTask]= useState ({
    idTask:"",
    taskName:"",
    categoryTask:"",
});

const [error, setError]= useState(false);

const {createTask}=props;

// me guarda lo del inputo en la variable valor del mismo input
const onChangeTask=(e)=>{

    setTask({
        ...task,
        [e.target.name]: e.target.value,
    })
        //console.log(e.target.value);
        //console.log(task.categoryTask);
};  


//forma de recuperacion de informacion de un selec o un input
// me guarda la informacion de la categoria seleccioanda en la variable value de la categoria
const onChangeCategoryTask =(e, data) =>{
    setTask({
        ...task,
        [data.name]:data.value
    })
   // console.log(data.name)
}

const onSubmitTask =(e)=>{

        // que no recargue la pagina 
        e.preventDefault();
        // validacion 
        if(task.taskName.trim()=== "" ){
            setError(true);
            return;
        }
        //eliminar el mensaje previo
        setError (false)
        //asignar un ID
        task.idTask=uuidv4();
        //crear la tarea 
    createTask(task)
        //limpiar el input 

        setTask({
        idTask:"",
        taskName:"",
        categoryTask:"",

    })
    }
    return (
        <>
            <Grid centered columns={2}>
                <br> 
                </br>
                <Input type="text" action> 
                <Input
                 size='"small' 
                 icon="add" 
                 placeholder="Escriba la tarea .. " 
                 iconPosition='left' 
                 name="taskName"
                 value={task.taskName}
                 onChange={onChangeTask}

                 />

                <Select compact 
                options = {options}
                 className ="select-form-task" 
                 name='categoryTask' 
                 placeholder='Categoria' 
                 value={task.categoryTask}
                 onChange={onChangeCategoryTask}
                 
                 />

                 <Button type = "submit" color="black"  onClick={onSubmitTask}> Añadir tarea</Button>
                 </Input>
            </Grid>

            { error && (
                <Grid centered>
                    <Header  as="h4" color="red"  className='alert-error-form'>
                    <Icon name ="close" />
                    <Header.Content>La Tarea es Obligatoria</Header.Content>
                    <Icon name="close"/>
                  </Header>
                </Grid>
            )}
         </>
     );
            
}   