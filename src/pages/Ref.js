import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";


function Reference() {

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
    };

    useEffect(() => {
        count.current = count.current + 1;
    });

    // const [inputValue, setInputValue] = useState("");
    // const previousInputValue = useRef("");


    // useEffect(() => {
    //     previousInputValue.current = inputValue;
    // }, [inputValue]);

    return (
        <>

            <div className="container">
                <div className="card">
                    <div className="card-body">
            
                        <input type="text" ref={inputElement} />
                        <button onClick={focusInput}>Focus Input</button>

                        <br />
                        <hr />
                        <br />

                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <p>Render Count: {count.current}</p>

                        {/* <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <p>Current Value: {inputValue}</p>
                        <p>Previous Value: {previousInputValue.current}</p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reference;