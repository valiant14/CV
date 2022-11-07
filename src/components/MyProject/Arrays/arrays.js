import React,{useState, useEffect} from "react";
import {Col,Row,Card,Button} from 'react-bootstrap'
import './array.scss'
const accessibleClick = (onClick) => e => {
    if (e.key === 'Enter') { 
      onClick(e); 
    }
  };

const Arrays = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);


  const addTodo = text => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };
  
  const handleInputChange = e => {
    setInputValue(e.currentTarget.value);
  }

  const handleComplete = e => {
    const index = e.currentTarget.getAttribute("data-index");
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const handleRemove = e => {
    e.stopPropagation();
    const index = e.currentTarget.getAttribute("data-index");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;
    addTodo(inputValue);
    setInputValue('');
  };

    return (
        <>
        <Card >
            <Card.Header as="h5" className="btnTitle">Array Manipulation</Card.Header>
            <Card.Body className="bg-profile">
                <div className="arrayContainer">
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"a
                        value={inputValue}
                        onChange={handleInputChange}
                        />
                    </form>
                    <ul>
                        {todos.map(({ text, isComplete }, i) => (
                        <li 
                            aria-role="button"
                            className={isComplete ? 'complete' : null}
                            data-index={i}
                            onClick={handleComplete}
                            onKeyPress={accessibleClick(handleComplete)}
                            tabIndex="0"
                        >
                            <div>{text}</div>
                            <button
                            aria-label={`remove todo ${i}`}
                            className="remove"
                            data-index={i}
                            onClick={handleRemove}
                            />
                        </li>
                        ))}
                    </ul>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default Arrays