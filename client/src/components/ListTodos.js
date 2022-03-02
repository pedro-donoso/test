import React, {Fragment, useEffect, useState} from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //delete todo function

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            console.log(deleteTodo);
        } catch (err) {
            console.log(err.message);
        }
    }

    const getTodos = async ()=>{
    try {
        const response = await fetch("http://localhost:5000/todos")
        const jsonData = await response.json()

        setTodos(jsonData);
    } catch (err) {
        console.log(err.message);
    }
    }
    useEffect(()=>{
        getTodos();
    }, []);

    console.log(todos);

    return (
        <Fragment>
        {" "}
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>Editar</td>
                         <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Borrar</button></td>
                        </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
    )
};

export default ListTodos;