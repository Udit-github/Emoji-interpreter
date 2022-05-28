// Emoji Interpreter: Type in or click the emoji to get the meaning
import React, { useState } from 'react';
import "./App.css";

const EmojiInterpreter=()=>{
    const emojiDictionary={  
         '🙂' : 'Happy-face',
         '😠' : "Angry-face",
         '😊' : "Slightly-smily-face-with-smiling-eyes",
         '😬' : "Grimacing-Face",
         '😋' : "Face-savouring-delicious-food",
         '😵' : "Dizzy-Face",
         '🙁' : 'Slightly-frowning-face',
         '🤡' : "Clown-Face",
         '😹' : "Cat-face-with-tears-of-joy",
    };
    const emojiArray=Object.keys(emojiDictionary);
    const [meaning, setMeaning]=useState("");
    const emojiInputHandler=(metadata)=>{                   //Metadata contains the emoji that user is providing through input box which is then being compared with dicitonary
        var emojiMeaning= emojiDictionary[metadata.target.value]
        if(emojiMeaning === undefined){
            emojiMeaning="Sorry! We don't have this in our database";
        } 
         setMeaning(emojiMeaning);
    };
    const emojiClickHandler=(emojiValue)=>{
        var emojiMeaning=emojiDictionary[emojiValue];
        setMeaning(emojiMeaning);
    };

return(<>
        <h1>Emoji Interpreter!!!</h1>
        <br/>
        <h2>Hi user 😄 ! You can type in or click the list to get meaning of an emoji </h2>
        <input style={{padding:"10px 12px",borderRadius:"20px",border:"1px solid black"}} placeholder='Insert the emoji...' onChange={emojiInputHandler}></input>
        <h2>{meaning}</h2>
        {/* <h3>{emojiArray}</h3> */}
        <div>
            {emojiArray.map((emojiValue)=>{
                return(
                    <span 
                        key={emojiValue}
                        onClick={()=>emojiClickHandler(emojiValue)}                           //To pass anything from the list then this is the way to pass it
                        style={{padding:"0px 15px",fontSize:"x-large",cursor:"pointer"}}
                     >
                        {emojiValue}
                    </span>
                );
            })}
        </div>

</>

)
};

export default EmojiInterpreter;
