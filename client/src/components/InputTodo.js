import React, {Fragment, useState} from "react";
const InputTodo = () => {
    const [description, setDescription] = useState("");
    const onsubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            // eslint-disable-next-line
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <Fragment>
            <div className ="container">
                <h3 className="text-center mt-5">Lista de Tareas</h3>
                <div className ="container">
                     <form className="container d-flex mt-5" onSubmit={onsubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Tarea+</button>
            </form>
                </div>
           
            </div>
           
        </Fragment>
    );
};
export default InputTodo;