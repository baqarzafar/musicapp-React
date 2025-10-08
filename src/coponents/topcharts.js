import React, { useContext } from "react";
import { Mycontextdata } from "../store/context";

export default function TopCharts() {
  const { data, songs, setselectedsongs } = useContext(Mycontextdata);

  const handleImageClick = (name) => {
    let selectsong = data.findIndex((value) => value.name === name);
    setselectedsongs([data[selectsong]]);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(40, 40, 43)",
        marginTop: "10%",
<<<<<<< HEAD
        flexDirection: "grow", // Corrected property value
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "80%",
        padding: "1em",
=======
     
        display: "flex",
       
        justifyContent: "space-around",
        width: "100%",
     
>>>>>>> 0eed2b9 (Your commit message)
        boxSizing: "border-box",
      }}
    >
      {songs.map((value, index) =>{


return(
  <div
key={index}
style={{
<<<<<<< HEAD
  width: "30%", // Full width on small screens, 50% on medium screens, and 33.33% on large screens
=======
  width: "40%", // Full width on small screens, 50% on medium screens, and 33.33% on large screens
>>>>>>> 0eed2b9 (Your commit message)
  marginBottom: "1em",
  boxSizing: "border-box",
}}
>
<img
  onClick={() => {
    handleImageClick(value.name);
  }}
  style={{
    width: "70%", // Full width on small screens, 50% on medium screens, and 100% on large screens
    cursor: "pointer",
  }}
  src={value.img}
  alt={`Chart Image ${index + 1}`}
/>
<p style={{ color: "white", fontSize: "50%"}}>
  {value.name}
</p>
</div>
)



      })}
    </div>
  );
}
