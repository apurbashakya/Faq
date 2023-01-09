import React, { useState } from "react";
import './SearchBar.css';
function SearchBar({placeholder, data}){
    const[filteredData, setFilteredData] = useState([]);
    const handleFilter =(event)=>{
        const searchWord = event.target.value;
        const newFilter = data.filter((val)=>{
            return val.text.includes(searchWord);
        });
        if(searchWord!="")
        {
            setFilteredData(newFilter);
            
        }
        else 
            {
                setFilteredData();
            }
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                { 
                filteredData.length !=0 &&(
                <div className="dataResult">
                    {
                        filteredData.map((key, value) =>{
                            return (
                                <a className="dataItem" href={key.link}>
                                    <p>{key.text}</p>
                                </a> 
                            )
                        })
                    }
                </div>
        )}
            </div>
        </div>
    )
}
export default SearchBar;