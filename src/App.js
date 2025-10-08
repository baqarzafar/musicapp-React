import React from "react";
import MyContextProvider from "./store/context";
import Navbar from "./coponents/navbar";
import Poster from "./coponents/poster";
import Songbar from "./coponents/songsbar";
import Songplay from "./coponents/songsplay";
import Category from "./coponents/categories";
import TopCharts from "./coponents/topcharts";
import Searchbar from "./coponents/input";
import Navabarbutton from "./coponents/javabarbutton";

function App() {
  return (
    <MyContextProvider>
<<<<<<< HEAD
      <div style={{ display: 'flex', flexDirection: 'column' , width:"100%"}} >
        <div style={{ display: 'flex', alignItems: 'center', margin: '1%' }}>
          <div style={{ color: '#603fef', marginLeft: '5%' }}>Music</div>
          <div style={{ color: '#603fef', marginLeft: '2%' }}>Podcast</div>
          <div style={{ color: '#603fef', marginLeft: '5%' }}>Live</div>
=======
      
        <div style={{ display: 'flex', alignItems: 'center', margin: '1%' }}>
        
          <div style={{ color: '#603fef', marginLeft: '5%' }}>Music</div>
          <div style={{ color: '#603fef', marginLeft: '2%' }}>Podcast</div>
          <div style={{ color: '#603fef', marginLeft: '5%' }}>Live</div> 


>>>>>>> 0eed2b9 (Your commit message)
          <div style={{ marginLeft: 'auto', marginRight: '5%' }}>
            <Searchbar />
          </div>
        </div>

<<<<<<< HEAD
        <div style={{ display: 'flex' , flexDirection:"grow"  }}>
          <Navbar />
          <div>
            <div style={{marginLeft:"5%"}}>
            <Poster />
            </div>
            <div style={{ display: 'flex'  , margin:"5%"}}>
              <div>
                <div>
                  <Songbar />
                </div>
                
                <TopCharts />
     
              </div>

                <Songplay />
=======
          <Poster />
          {/* <Navbar /> */}
          <div>
            
          
          <div style={{marginTop:"10%" , width:"50%" , display :"flex" , justifyContent:"center"}}>
              <Songbar />
          </div>
            <div style={{ display: 'flex'  , margin:"5%" ,flexFlow:"wrap" , justifyContent:"space-around"}}>
                
              <div>
                
                  <TopCharts />
          
                 </div>

             
               
                <Songplay />
       

>>>>>>> 0eed2b9 (Your commit message)
              
              
            </div>
       
<<<<<<< HEAD
          </div>
        </div>
      
      </div>
=======
         
     
       
       
        </div>
      
      
>>>>>>> 0eed2b9 (Your commit message)
      
    </MyContextProvider>
  );
}

export default App;
