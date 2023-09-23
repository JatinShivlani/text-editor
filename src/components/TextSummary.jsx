import React from 'react'
function TextSummary(props){
    let realCharacters=props.text.split(/\s+/).filter((word)=>{return word!=='';}).join(' ')
    console.log(realCharacters)
return (
    <div className="summary my-4">
    <h1>Your Text Summary</h1>
        <p> Number of characters : {realCharacters.length}</p>
        <p> Number of words : {props.text===''?0:realCharacters.split(' ').length}</p>
    </div>
)
}
export default TextSummary;