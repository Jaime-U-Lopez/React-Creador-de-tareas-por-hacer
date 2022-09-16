import { Grid, Label, Segment ,Header, Button, Icon} from "semantic-ui-react"

export default function Task(props) {
    const{ task,deleteTask}=props
       
        const {idTask,taskName,categoryTask}=task
    return( 

        <Grid.Column width={8} className ="task-container">
          <Segment>
           {  categoryTask && (

            <Label color="teal"  ribbon="left">
                { categoryTask}
            </Label>
           )}

            <Header as="h2"  className="header-task">
                {taskName}
            </Header>
            <Header as="h5" > {idTask}</Header>

            {/* //con centered centra */}
                <Grid centered columns={2}>
                       
                        <Grid.Column>
                            <Button  color="blue" textAliag="center" onClick={()=>console.log("HOLA")}>
                                <Icon  name="remove circle"/>
                                Modificar 
                            </Button>
                        </Grid.Column>
                       
                       
                        <Grid.Column>
                            <Button  color="red" textAliag="center" onClick={()=>deleteTask(idTask)}>
                                <Icon  name="remove circle"/>
                                Eliminar
                            </Button>
                        </Grid.Column>

                </Grid>


            
           
           
                </Segment>

        </Grid.Column>

    )
    
}