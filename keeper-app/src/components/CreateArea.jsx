import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [inputNote, setInputNote] = useState({title:"", content:""});

    function handleChange (e){
        const {name, value} = e.target;

        setInputNote((prev)=>({
            ...prev,
            [name]: value,
        }));
    }

    function submitNote(e){
        props.onAdd(inputNote);
        setInputNote({title:"", content:""});
        e.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
          <form className="create-note">
           {isExpanded && (
            <input 
                name="title" 
                onChange={handleChange} 
                placeholder="Title" 
                value={inputNote.title} 
            />
           )
           }
            <textarea    
                name="content" 
                onClick={expand}
                onChange={handleChange} 
                placeholder="Take a note..." 
                rows={isExpanded ? 3 : 1} 
                value={inputNote.content} 

            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
            
          </form>
        </div>
      );  
}

export default CreateArea;