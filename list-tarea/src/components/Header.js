
import { Header as Head,Icon } from "semantic-ui-react";
export default function Header () {

    return (
        <div className="header"> 
        

            <Head as ="h1"  Icon textAlign="center" color="blue"> 
            <Icon inverted color="green"   name=" list alternate outline" circular/>     
            </Head>
            <Head as ="h1"   Icon textAlign="center" color="blue" >Lista de actividades </Head> 
                            
        </div>        
                
    ) 

}

