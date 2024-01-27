import React, { useState, useEffect } from "react";
import data from '../resources/countryData.json'
import '../App.css'

const Textbox = () => {
  const [inputValue, setInputValue] = useState('');

  const onChange=(e)=>{
    setInputValue(e.target.value);
  }

  const search = (searchName)=>{
    setInputValue(searchName);
  }

  const handleKey=(e)=>{
    if(e.key=="Escape"){
        console.log(e.key)
        document.getElementById("dropdown").style.display="none";
    }else{
        document.getElementById("dropdown").style.display="block";
    }
  }
 

  return (
    <div id="search-button">
      <input id="input" type="text" value={inputValue} onChange={onChange} onKeyDown={handleKey}/>

    
      <div >
        <button id="search">Search</button>
      </div>

      <div id="dropdown">
        {data.filter((item) =>{
            const searchName= inputValue.toLowerCase();
            const countryName=item.name.toLowerCase();

            return(
                searchName && countryName.startsWith(searchName)
            )
        })
        .slice(0,10)
        .map((item)=>(
            <div onClick={()=> search(item.name)} key={item.code}>
                {item.name}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Textbox;
