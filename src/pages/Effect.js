import { useState, useEffect } from 'react';


const Blogs = () => {

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, [])

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here


  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, []);

  return (
    <div>
      <h1>I've rendered {count} times!</h1>
      
      <br/>
      <hr/>

      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>

    </div>
  );
};

export default Blogs;