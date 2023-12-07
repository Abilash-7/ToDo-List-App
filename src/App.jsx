import React, { useState } from 'react'
import './App.css'

const App = () => {

  const date = new Date();

  const days = ["Sunday","Mpnday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let AmPm = date.getHours() >= 12 ? 'PM' : 'AM';
  const time = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
  return   hours + ":"+minutes;
  }

  const [list,setList] = useState([]);
  const [task,setTask] = useState('');
  const [complete,setComplete] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if(task.trim() !== '' ){
      setList([...list,task]);
      setTask('');
      alert('task added successfully')
    }
    else{
      alert("Please Enter your task.")
    }
  }
  const HandleEdit = (index) => {
    setTask(list[index]);
    let edit = [...list];
    edit.splice(index,1);
    setList(edit);
  }
  
  const HandleComplete = (index) => {
    let com = [...list];
    setComplete([...complete,com[index]]);
    com.splice(index,1);
    setList(com);
    alert("completed")
  }
  
  const HandleDelete = (index) => {
    let del = [...list];
    del.splice(index,1)
    setList(del);
    alert("deleted")
  }
  return (
    <>
          <header>
        <nav className="navbar navbar-light m-3 rounded-3 px-2">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <div>
                <i class="fa-solid fa-clipboard-list fs-2 ms-2"></i>
                </div>
                <div className="">
                    <h4 className='title'>To Do list</h4>
                </div>
                <div>
                    <button
                    className="navbar-toggler me-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    >
                    <i class="fa-solid fa-bars fs-4"></i>
                    </button>
                </div>
                
                <div
                    className="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header border-bottom m-3 p-4">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            ToDo List
                        </h5>
                        <button
                            className=" text-white btn" style={{color:"#12b8ae"}}
                            data-bs-dismiss="offcanvas"
                        >
                          <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
                      <p style={{color:"#12b8ae"}}>WELCOME !!!</p>
                        <p className='text-center p-3'>Elevate Your Productivity: Seamlessly Manage Tasks, Conquer Goals. Your Ultimate Todo List App – Where Ambitions Thrive!</p>
                    </div>
                </div>
            </div>
        </nav>
        
    </header>
{/* <!-- today date and time --> */}
        <div className="row d-flex ms-2 w-100 p-5 ">
            <div className="col-6 m-auto text-center pe-5">
            <h1>{day}</h1>
            <h6 style={{color:"#12b8ae"}}>{month}-{date.getDate()}, {date.getFullYear()}</h6>
            </div>
            <div className="col-6 p-3 text-center d-flex text-white">
              <h1 className='display-1'>{time(date)}</h1>
              <h3 style={{color:"#12b8ae"}} className='my-auto'>{AmPm}</h3>
            </div>
        </div>
        
{/* <!-- input  --> */}
        <div className="input mt-3 mt-md-0">
            <form className="d-flex justify-content-center p-4" onSubmit={addTask}>
                <input type="text" className="form-control w-75 rounded-3" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button className="btn px-3 rounded-3 ms-3">Add</button>
            </form>
        </div>

        {/* <!-- tasks  --> */}
        <div className="tasks rounded-3 mx-3 mt-4 py-3">
            <p className=" text-center p-5 m-auto">Add tasks, whatever you want to do.</p>
            
            {list.map((l,index) => (
              <div key={index} className="task rounded-3 ps-3 pe-2  m-2 d-flex justify-content-between align-items-center">
                  <p className="pt-3"><i class="fa-solid fa-circle me-3"></i>{l}</p>
                  <div className="">
                      <button className="btn btn-sm bg-dark m-md-3" onClick={()=> HandleEdit(index)}><i class="fa-solid fa-pen-to-square"></i></button>
                      <button className="btn btn-sm bg-dark m-md-3" onClick={()=> HandleComplete(index)}><i class="fa-solid fa-check"></i></button>
                      <button className= " btn-sm btn bg-dark m-md-3" onClick={()=> HandleDelete(index)}><i class="fa-solid fa-trash"></i></button>
                  </div>
              </div>
            ))}
            
        </div>
        {/* <!-- completed  --> */}
        <div className="completed  rounded-3 py-3 mx-3 my-4">
            <p className=" text-center">Completed Tasks : {complete.length}</p>
            {
              complete.map(c => (
                <div className="task bg-light rounded-3 text-dark ps-3 pe-2  m-2 d-flex justify-content-between align-items-center">
                    <p className="pt-3"><i class="fa-solid fa-circle me-3 " style={{color:"#12b8ae"}}></i>{c}</p>
                </div>
              ))
            }
        </div>
       
    </>
    )
}

export default App
