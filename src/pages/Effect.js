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
    <>
      <div className="container">

        <div className="card">
          <div className="card-body">            
            <p>I've rendered {count} times!</p>
            <p>Count: {count}</p>
            <p>Calculation: {calculation}</p>
            <button className="btn btn-sm btn-warning" onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Blogs;