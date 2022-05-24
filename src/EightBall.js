import React, {useState} from "react";
import "./eightball.css";

const EightBall = ({answers}) => {

    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a Question");

    const changeMsgAndColor = () => {
        const randNum = Math.floor(Math.random() * answers.length + 1);
        setColor(answers[randNum].color);
        setMsg(answers[randNum].msg);
    }

    const reset = () => {
        setColor("black");
        setMsg("Think of a Question")
    }

    return (
        <>
            <div id="EightBall" className={color}  onClick={changeMsgAndColor}>
                <h2>{msg}</h2>
            </div>
            <button className="rest-btn" onClick={reset}>Reset</button>
        </>
        
    )
}


export default EightBall;