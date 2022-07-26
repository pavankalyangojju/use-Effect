// import { useState, useEffect } from 'react';
// import { useState } from 'react';
import './App.css';

import { Todo } from "./components/Todo"
// import { Counter } from "./components/counter"
// import { Todo } from './components/Todo';
function App() {

  return(
    <div className='App'>

      <Todo/>

    </div>
  )

  // const [show, setShow] = useState(true)
  // return(
  //   <div className="App">
  //     {show ? (
  //       <>
  //       <Counter/>{" "}<button onClick={() => setShow(false)}>hide</button>
  //       </>
  //     ):(
  //       <>
  //       <button onClick={() => setShow(true)}>show</button>
  //       </>
  //     )
  //   }
  //   </div>
  // )
  





}

export default App;
