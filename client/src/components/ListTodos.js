import React, {Fragment, useEffect, useState} from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([])

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

            </tbody>
        </table>
    </Fragment>
    )
};

export default ListTodos;