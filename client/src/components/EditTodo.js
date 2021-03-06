import React, { Fragment, useState } from "react";
const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    //edit description function
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
          // eslint-disable-next-line     
          const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
          window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
 Editar
</button>

            {/*
            id = id10 
            */}
            
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
          // eslint-disable-next-line
                id={`id${todo.todo_id}`}
               onClick={()=>setDescription(todo.description)}
        >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar tarea</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>setDescription(todo.description)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
<div class="modal-body"><input type='text' className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Editar</button>
      </div>
    </div>
  </div>
</div>
        </Fragment>
    )
};
export default EditTodo;