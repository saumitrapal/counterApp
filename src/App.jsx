import {useState} from "react";
//import {Todo} from ""

function App(){
  const [todos, setCount] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  },{
    title: "Study DSA",
    description: "Study DSA from 7-9",
    completed: true
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: "new todo",
      description: "dose of new todo"
    }])
  }

    return (
    <div>
      <button onClick={addTodo}> Add a ramdom todo</button>

      {/* <Todo title={todos[0].title} description={todos[0].description}/>
      <Todo title={todos[1].title} description={todos[1].description}/> */}
    
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
    )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
