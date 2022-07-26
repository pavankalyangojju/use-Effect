import { useState, useEffect } from 'react';


export const Todo = () => {
  const [data, setData] = useState([])


  const [text, setText] = useState("");


  const [page, setPage] = useState(1)

  // const [counter, setCounter] = useState(0);

  // const [age, setAge] = useState(0);

  useEffect(() => {

    getTodos()



    // console.log("calling useEffect");
    // fetch("http://localhost:3001/todos")
    // .then((d) => d.json())
    // .then((res) => {
    //   // console.log("Res",res);
    //   setData(res)
    // });

    // async function getData(){
    //   const res = await fetch("http://localhost:3001/todos")
    //   .then((d) => d.json());

    //   setData(res);
    //   // .then((res) => {
    //   //   console.log("Res",res);
    //   //   setData(res)
    //   // });
    // }

    // getData();

  },[page]);

  const getTodos = () =>{
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
    .then((d) => d.json())
    .then(setData);

  }

  const handleAddTodo = () => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({
        title: text,
        status: false
      }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(getTodos);
  }


  return <div className="App">

    <input type="text" onChange={(e) => setText(e.target.value)}/> 
    <button onClick={handleAddTodo}>Add todo</button>






    {data.map((e) => (
      <div key={e.id}>{e.title}</div>
    ))}

    <button onClick={()=>{setPage(page -1);}}>Prve</button>
    <button onClick={()=>{setPage(page + 1);}}>Next</button>






  </div>
}