import AccordionList from "./AccordionList";
import AccordionData from "./AccordionData";
import './AccordionComponent.css';
import { useState } from "react";
function Accordion(){
const [toggle, setToggle] = useState("");
let handleToggle=(id)=>{
    if(toggle===id){
        setToggle(null);
        return false
    }
   setToggle(id)
}
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <AccordionList accordionData={AccordionData} handleToggle={handleToggle} toggle={toggle} />
                </div>
            </div>
        </div>
           
        
    )
}
export default Accordion;