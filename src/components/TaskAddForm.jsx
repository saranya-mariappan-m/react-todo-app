import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const AddForm = () => {

  const [name, setTodoName] = useState('');
  const [description, setDescription] = useState('');
  const taskStatus = 'Not Completed';
  const [filter, setFilter] = useState('All');
  const [isEditing, setEditing] = useState(false);
  const [editNode, setEditNode] = useState();
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {

    e.preventDefault();

    if (isEditing) {
      const updatedTodos = [...todos];
      updatedTodos[editNode].name = name;
      updatedTodos[editNode].description = description;
      setTodos(updatedTodos);
      setEditing(false);
    } else {
      setTodos([...todos, { name, description, taskStatus }]);
    }
    setTodoName('');
    setDescription('');

  };

  // Child Component DOM - update the Status dropdown action
  const updateStatus = (index, newStatus) => {

    const updatedTodos = [...todos];
    updatedTodos[index].taskStatus = newStatus;
    setTodos(updatedTodos);

  };

  const editTodo = (index) => {
    const updatedTodos = [...todos];
    setEditing(true);
    setTodoName(updatedTodos[index].name);
    setDescription(updatedTodos[index].description);
    setEditNode(index);
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Overall Filter on the Child DOM
  const filterTodos = () => {

    if (filter === 'All') {
      return todos;
    } else if (filter === 'Completed') {
      console.log(todos);
      return todos.filter((todo) => todo.taskStatus === 'Completed');
    } else {
      return todos.filter((todo) => todo.taskStatus === 'Not Completed');
    }
  }

  // Child Component - Using Props drilling to perform CRUD operations
  const ViewCard = ({ todos, index }) => {


    useEffect(() => {
      // statements for mounted phase
      console.log("Mounting Phase..... Mounted");

      return () => {
        // statements for unmount phase
        console.log("Unmounting phase.... Unmounted");
      };
    }, []);

    return (<>
      <div className='m-3 col-3  p-2 text-start card'>
        <div className='d-flex flex-row'><label className='card-label'> Name:</label>
          <span className='ps-3'>{todos.name}</span> </div>
        <div className='d-flex flex-row'><label className='card-label'> Description:</label>
          <span className='ps-3'>{todos.description}</span> </div>

        <div className="d-flex flex-row">
          <label className='pe-2 pt-2 card-label'>Status</label>
          <select onChange={(e) => updateStatus(index, e.target.value)} className='ms-3'
            style={todos.taskStatus == 'Not Completed' ? { backgroundColor: "#FF7E83" } : { backgroundColor: "#13AE8A" }}
            value={todos.taskStatus}>
            <option className='dropdown-item' value="Not Completed">Not Completed</option>
            <option className='dropdown-item' value="Completed">Completed</option>
          </select>
        </div>
        <div className='text-end'>
          <button onClick={() => editTodo(index)} className='tourquise btn m-3 ps-5 pe-5' >Edit</button>
          <button onClick={() => deleteTodo(index)} className='btn btn-danger ps-5 pe-5'>Delete</button>
        </div>
      </div>
    </>)
  }

  // Child Props - to perform Edit & Delete
  ViewCard.propTypes = {
    index: PropTypes.number,
    todos: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      taskStatus: PropTypes.string,
    }),
  };

  return ( //Parent Component DOM 
    <div className='ps-6 m-5 text-center'>
      <form className='container'>
        <div className="row">
          <div className="col-lg-4">
            <input
              type="text"
              placeholder="Todo Name"
              id="name"
              value={name}
              onChange={(e) => setTodoName(e.target.value)}
              className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
              required
            />
          </div>
          <div className="col-lg-4">
            <input
              type="text"
              placeholder="Todo Description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
            />
          </div>
          <div className="col-lg-4 pt-3">
            <button type="submit" onClick={addTodo} className="btn btn-primary ps-5 pe-5 tourquise">{isEditing ? 'Update Todo' : 'Add Todo'}</button>
          </div>
        </div>
      </form>
      <h3 className=''>My Todos</h3>
      <div className="container">
        <div className="text-end p-2">
          <label className='pe-2 pt-2'>Status</label>
          <select onChange={(e) => setFilter(e.target.value)} className='dropdown-menu' style={{
            display: "block",
            position: "relative",
            float: "right",
            backgroundColor: "#FF7E83"
          }} >
            <option className='dropdown-item' value="All">All</option>
            <option className='dropdown-item' value="Completed">Completed</option>
            <option className='dropdown-item' value="Not Completed">Not Completed</option>
          </select>
        </div>
      </div>
      <div className="viewCard d-flex flex-wrap align-content-start">

        {filterTodos().map((todo, index) => (
          <ViewCard key={index} todos={todo} index={index} /> //Child DOM Renders here

        ))}

      </div>
    </div>

  );
};
// Parent Component - Props drilling as it has another form that perform Add & Edit.
AddForm.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  taskStatus: PropTypes.string,
};

export default AddForm;
