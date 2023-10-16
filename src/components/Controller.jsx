// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [name, setTodoName] = useState('');
//   const [description, setDescription] = useState('');

//   const addTodo = () => {
//     if (name.trim() === '' || description.trim() === '') return;
//     setTodos([...todos, { name, description }]);
//     setTodoName('');
//     setDescription('');

//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <form>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             placeholder="Todo Name"
//             id="name"
//             value={name}
//             onChange={(e) => setTodoName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Email:</label>
//           <input
//             type="text"
//             placeholder="Todo Description"
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit" onClick={addTodo}>Submit</button>
//         </div>
//       </form>
//     </div>

//   );
// };

// Todo.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   status: PropTypes.string,
// };

// export default Todo;
