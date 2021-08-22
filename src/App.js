
import React, { useState } from "react";
import TodoList from "./TodoList";
 
const App =() =>{
  const [ inputList, setinputList ] =useState("");


  const [Items,setItems] = useState([]);
  const itemEvent = (event)=> {
    setinputList(event.target.value);
  }; 


  const listOfItems = () => {
 
// with api 


    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(res => res.json())
    // .then(result => {
    //   this.setState({
    //     isLoaded: true,
    //     items: result
    //   });


    // });



// with out api working fine

    setItems((olditems) =>{ 
      return[...olditems , inputList];
    }

    );
    setinputList("");

  };













  const deleteItems = (id) => {
    console.log("deleted");

    setItems((olditems) =>{
      return olditems.filter((array,index)=>
      {
        return index !==id; 
      })
    }
    )
};

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 className="main_heading">Todo List</h1>
        <br/>
        <input className="Add_task" type="text" placeholder="Add task here "
       value ={inputList}
      
        onChange={itemEvent} 
        />
        <button  onClick={listOfItems} >
          +
        </button>
<ol>
  {/* <li>
    {inputList}
  </li> */}
{
Items.map((itemval,index)  =>{
   return <TodoList
   key={index}
   id= {index}
  text = {itemval }
  onSelect ={deleteItems}
   
  
  
  />
}
)
}


</ol>

      </div>
       
    </div>
  );
}

export default App;
