import { useState, useEffect, useRef } from "react";


function Reference() {

    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);

    // const inputElement = useRef();

    // const focusInput = () => {
    //   inputElement.current.focus();
    // };

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");


    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>

            {/* <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button> */}

            {/* <br />
            <hr />
            <br /> */}

            {/* <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1> */}


            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>

      </>
    );
}

export default Reference;