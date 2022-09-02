import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(inputNote){
        setNotes((prev)=> {
            return [...prev, inputNote];
        });
    }

    function deleteNote(id){
        setNotes((prev)=> {
            return prev.filter((note, index) => index !== id);
        });
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((note, index) => (
            <Note 
                key={index}
                id={index}
                title={note.title} 
                content={note.content} 
                onDelete={deleteNote}
            />
        ))}
        <Footer />
    </div>
}

export default App;