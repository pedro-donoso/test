import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    return (
        <Fragment>

            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id{todo.todo_id}`}>
                Editar
            </button>

            {/*
                id = id10
            */}
            <div class="modal" id={`id${todo.todo_id}`}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Editar tarea</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <input type="text" className="form-control" value={description} />
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal">
                                Editar
                            </button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                Cerrar
                            </button>
                        </div>



                    </div>
                </div>

            </div>

        </Fragment>
    )
};

export default EditTodo;