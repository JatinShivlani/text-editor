import React, { useState } from "react";
import _ from "lodash"
import TextSummary from './TextSummary'
function TextForm(props) {
    const [text, setText] = useState("");
    const changed = (e) => {
        let value = e.target.value;
        setText(value);
    };
    const updateUC = () => {
        setText((prev) => {
            return prev.toUpperCase();
        });
    };
    const updateLC = () => {
        setText((prev) => {
            return prev.toLowerCase();
        });
    };
    const extraSpaces = () => {
        setText((prev) => {
            return (prev.split(' ').filter((word) => { return word !== ''; }).join(' '));
        });
    };
    const clearTxt = () => {
        setText('');
    };
    const copy = () => {
        navigator.clipboard.writeText(text)
    };
    const snakeCase = () => {
        setText((prev)=>{
          return  (_.snakeCase(prev));
        })
    };
    const startCase = () => {
        setText((prev)=>{
          return  (_.startCase(prev));
        })
    };

    return (
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea style={{ resize: 'none', backgroundColor: props.mode === 'light' ? 'white' : '#141414', color: props.mode === 'light' ? 'black' : 'white' }}
                    className="form-control"
                    value={text}

                    id="my-box"
                    rows="8"
                    onChange={changed}
                />
            </div>
            <button onClick={updateUC} className="btn btn-primary mx-2">
                Covert to UpperCase
            </button>
            <button onClick={updateLC} className="btn btn-primary mx-2">
                Covert to LowerCase
            </button>
            <button onClick={extraSpaces} className="btn btn-primary mx-2">
                Clear extra spaces
            </button>
            <button onClick={snakeCase} className="btn btn-primary mx-2">
                Snake case
            </button>
            <button onClick={startCase} className="btn btn-primary mx-2">
                Start case
            </button>
            <button onClick={copy} className="btn btn-primary mx-2">
                Copy text
            </button>

            <button onClick={clearTxt} className="btn btn-primary mx-2">
                Clear text
            </button>
            <TextSummary text={text} />
        </div>
    );
}
export default TextForm;
