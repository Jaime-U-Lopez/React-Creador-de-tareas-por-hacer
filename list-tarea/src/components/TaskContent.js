import { Grid, Header, Icon } from "semantic-ui-react";
import Task from "./Task";
export default function TaskContent(props){

    const{tasks, deleteTask}=props;
    if (tasks.length ===0){
        return null
    }
        return(    
            <Grid className="tasks-content">
                <Header as="h2"  icon  textAlign="center">
                    <Icon name="settings" />
                Administra sus Tareas
                </Header>
                <Grid.Row>
                    {tasks.length>0 ? tasks.map((task,index)=> (
                    <Task  task ={task} key={index}  deleteTask={deleteTask} />
                    
                    ) )
                    :null}
                </Grid.Row>
            </Grid>
        );          
}
