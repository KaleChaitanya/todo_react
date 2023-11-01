import React from 'react'
import todo from '../images/todo.svg'

const Todo = () => {

    const [todos, setTodos] = React.useState('');
    const [todoArray, setTodoArray] = React.useState([]);

    const addTodo = () => {
        if (!todos) {

        } else {
            setTodoArray([...todoArray, todos]);
            setTodos('')
        }
    }

    const deleteTodo = (id) => {
        const updatesTodos = todoArray.filter((currEl, index) => {
            return index !== id;
        })
        setTodoArray(updatesTodos)
    }

    const removeAll = () => {
        setTodoArray([])
    }

    return (
        <div className='main--container'>
            <div className='child--container'>
                <figure>
                    <img src={todo} alt='todoLogo' className='todoLogo' />
                    <figcaption>Add Your todo Here</figcaption>
                </figure>
                <div className='add--todo'>
                    <input type='text' value={todos} placeholder='Add todo' onChange={(e) => setTodos(e.target.value)} />
                    <button onClick={addTodo}>+</button>
                </div>
                {
                    todoArray.map((currEl, index) => {
                        return (
                            <div className='todo--list' key={index}>
                                <h3>{currEl}<span onClick={() => deleteTodo(index)}>         (Delete)</span></h3>
                            </div>
                        )
                    })
                }

                <div className='delete--todos'>
                    <button onClick={removeAll}>Remove All</button>
                </div>
            </div>

        </div>
    )
}

export default Todo
