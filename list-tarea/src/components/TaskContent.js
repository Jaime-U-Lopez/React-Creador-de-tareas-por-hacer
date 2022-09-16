import { Grid, Header, GridRow ,Icon } from "semantic-ui-react";

export default function TaskContent(props){

    const{tasks}=props;
    if (tasks.length ===0){
        return null
    }
        return(    
            <Grid className="tasks-content">
                <Header as="h2"  icon  textAlign="center">
                    <Icon name="settings" />
                Administra sus Tareas
                </Header>
                <GridRow>
                    {tasks.length>0 ? tasks.map((task,index)=> (<p>ppp</p> ) )
                    :null}
                </GridRow>
            </Grid>
        );          
}
