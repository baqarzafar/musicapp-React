import { useContext } from "react"
import { Mycontextdata } from "../store/context"

export default function Songbar(params) {
let {data} = useContext(Mycontextdata)
    return(
<<<<<<< HEAD
        <div style={ { color:"white",    display:"flex"  ,width:"80%" , height:"20%" }}>
            {data.map((data)=>{
                return(
              <div>
                  <div  >
                 <img  style={{ borderRadius:"100%" ,  width:"50%"}} src={data.img}></img>

                </div>
                   
              </div>  
=======
       <div
  style={{
    width: "30%",
    
   
    display:"flex",
  
    
 
    borderStyle: "solid" // You need this to make the border visible
  }}
>
         
         
            {data.map((data)=>{
                return(
           
                
                 <img  style={{ borderRadius:"100%" ,  width:"60%",height:"80%",padding:"2%" , margin:"10%"}} src={data.img}></img>

              
                   
        
>>>>>>> 0eed2b9 (Your commit message)
              
                    )
            })}
        </div>
    )
}