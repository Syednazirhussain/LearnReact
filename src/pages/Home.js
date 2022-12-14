import { useState } from 'react';
import Todos from "./Todos";

const Home = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"])
    const [color, setColor] = useState("red");
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "yellow" }
        })
    };

    const increment = () => {
        setCount( (c) => c + 1 )
    };

    const greeting = (name) => {
        console.log('Hi, '+name);
    }

    const shoot = (text, e) => {
        console.log(text);
        console.log(e.type);
    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <br/>
            <button type="button" onClick={ () => { setTodos([...todos, `todo ${todos.length+1}`]) }}>Add Todos</button>
            <br/>
            <hr/>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <hr />
            <Todos todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <br/>
                <button onClick={() => greeting("Nazir")}>Say Hi</button>
                <br/>
                <button onClick={(event) => shoot("Goal!", event)}>Take the shoot</button>
                <br/>
                <button onClick={updateColor}>Update Color</button>
            </div>
        </>
    );
};

export default Home;