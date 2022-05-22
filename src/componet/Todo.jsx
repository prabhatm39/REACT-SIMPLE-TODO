import React from "react"
import {v4 as uuid} from "uuid";
import { Todolist } from "./Todolist.jsx";


function Todo() {
    const [query, setQuery] = React.useState("");
    const [list, setList] = React.useState([]);
    const handleAdd = () => {
        const payload={
            title: query,
            status: false,
            id: uuid(),
        }
        setList( [ ...list, payload]);
    }
   const handelDelete = (id) => {
    let updatedList = list.filter( item => item.id !== id)
    setList(updatedList);
   }
return(
    <>
      <div>
            {list.map((item) => (
               <Todolist handelDelete={handelDelete} key={item.id} {...item} />
            ))}
        </div>
    <div>
        <input type="text"
        style={{width: "400px", height:"60px" }}
         value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Write Something"/>
        <button onClick={handleAdd}
        style={{height: "60px", width: "60px", borderRadius: "10px", background: "teal", marginTop: "30px"}}>+</button>
        </div>
      

    </>
)
}

export {Todo};
