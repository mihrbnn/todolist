
import "./App.css";
import { useState } from "react";
import ListItems from "./components/ListItems";

function App() {
  const [list, setList] = useState([])
  function eventSubmit(e) {
    e.preventDefault()
    if (e.target[0].value) {
      setList([...list, { value: e.target[0].value, isDone: false }])  
      e.target[0].value=""
    }   
  }

  function taskCompleted(item){
    const newList = list.map(value => {
      if (item === value) {
      value.isDone=!value.isDone
      console.log(value)
      }
    return value
    })
    setList(newList)

  }

  function deleteItem(value) {
    const newList = list.filter(
      i=>i.value !== value.value
    );
    setList(newList)
  }

  return (
    <div className="container col-sm-6 mt-5">
      <form onSubmit={(e)=>eventSubmit(e)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="bir görev giriniz"
          />
         
        </div>
        <button type="submit" className="btn btn-primary mb-3 ">
          Ekle
        </button>
      </form>
      <div>
          <ul className="list-group">
            {
            list.map((item, index) => <ListItems key={index} item={item} deleteItem={() => deleteItem(item)} updateItem={()=>taskCompleted(item)}/>)
            }
          </ul> 
      </div>
    </div>
  );
}

export default App;
