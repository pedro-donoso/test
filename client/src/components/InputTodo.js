import React, {Fragment} from "react";

const InputTodo = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form>
                <input type="text" />
                <button>Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;