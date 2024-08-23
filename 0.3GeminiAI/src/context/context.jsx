import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState([]);
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [saveRecent, setSaveRecent] = useState([])

    // ADD TYPING EFFECT ON displaying answer from Gemini
    const delayTyping = (index, nextWord) =>{
        setTimeout(function(){
            setResultData(prev => prev+nextWord);
        }, 75*index)
    }

    const onSent = async (prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);

        // To display Recent entered Prompts
        let response;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
        }else{
            setPrevPrompt(prev=>[...prev,input]);
            // setRecentPrompt(prev=>[...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
            // setSaveRecent(prev => [...prev, response]);
        }


        // setRecentPrompt(input) // this line
        // setPrevPrompt(prev=>[...prev, input])

        let responseArray = response.split("**");
        let newResponse = "";
        for(let i = 0; i < responseArray.length; i++){
            if(i === 0 || i % 2 !== 1){
                newResponse += responseArray[i];
            }else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ")
        for (let i = 0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayTyping(i, nextWord + " ");
        }

        setLoading(false);
        setInput("");
        // setSaveRecent([])
    }
    
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setShowResult,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        saveRecent,
        setSaveRecent
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;