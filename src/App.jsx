import { useState,useEffect,useRef } from "react";
import Navbar from "./components/nav";
import "./App.css"
import { v4 as uuidv4 } from 'uuid';
import About from "./components/About";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function App(){
  const [todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])
  const [finished, setFinished]=useState(true)
  const isFirstRender = useRef(true);

// logging data from localstorage
  useEffect(() => {
    let string = localStorage.getItem("todos");
    if (string) {
      let todos = JSON.parse(string);
      setTodos(todos);
    }
  }, []);

  // saving data to localstorgae after every todos state mount
    useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // finished checkbox toggle
  const toggleFinished=(e)=>{
    setFinished(!finished)
  }

  // checkbox handle function
  const handleCheckbox=(e)=>{
    let id=e.target.name
    let index=todos.findIndex(item=>{
      return item.id===id
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted
    setTodos(newTodos)
  }
  // task add 
  const handleAdd=()=>{
    if(todo.trim()!==""){
      setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
    }
  }
  // task delete 
  const handleDelete=(e,id)=>{
   
     let userConfermation = confirm("You are trying to delete this task")
     
      if(userConfermation){
        let newTodos=todos.filter(item=>{
        return item.id!==id
        })
        setTodos(newTodos)
        alert("You have deleted the task")
      }
     else{
      alert("Task deletion canceled ")
     }
  }
  // task edit
  const handleEdit=(e,id)=>{
    let text=todos.filter(item=>item.id===id)
    setTodo(text[0].todo)
    let newTodos=todos.filter(item=>{
        return item.id!==id
        })
        setTodos(newTodos)
  }
  
  return(
    <>
      <Navbar></Navbar>
      <div className="App m-4">
        <h2>ADD ꪊtask in TODO list</h2>

          {/* task input */}
          <input 
            type="text"
            className="input" 
            onChange={(e)=>setTodo(e.target.value)}
            value={todo} 
          />

          <button  
            onClick={handleAdd} 
            type="button" 
            className="save fs-5 btn btn-primary mt-2 mb-4" 
            >
              SAVE
            </button>

          <div>
             <input 
              type="checkbox" 
              checked={finished}
              onChange={toggleFinished}/>Show Finished Tasks
          </div>
      </div>

      {/* task div */}
      <div className="yourTask mb-5 overflow-auto"> 
        <h2 className="taskTital"><u>Your Tasks</u></h2>
        <div className="todos">

          {/* rendring todos */}
          {todos.length===0 && <div className="empty-todo">There is no TASK yet</div>}
          {todos.map(item=>{
           return (finished || !item.isCompleted)&&<div key={item.id} className="todo mt-3">
            <div className="d-flex gap-3">
              <input 
                name={item.id} 
                type="checkbox" 
                checked={item.isCompleted} 
                onChange={handleCheckbox}
              />
              <div className={`text ${item.isCompleted ? "text-decoration-line-through" : ""}`} ><p>{item.todo}</p></div>
            </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                <button 
                  className="btn btn-danger me-md-2 " 
                  onClick={(e)=>{handleDelete(e,item.id)}}>
                   <MdDeleteSweep />
                </button>
                
                <button 
                  className="btn btn-warning" 
                  onClick={(e)=>handleEdit(e,item.id)}>
                    <FaEdit />
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
      
      <div className="about">
        <About></About>
      </div>
    </>
  )
}

export default App