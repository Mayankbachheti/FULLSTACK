import './App.css';

import Child from './component/child';
import State from './component/state';
import Color from './component/colour';


function App() {

    const user={
      name:"Ajay",
      id:27,
      hobbies:["dancing","singing"],
      ismem:true,

    };

  return (
    <div>
    
    <div className='aa2'>
    <Child user={user}></Child>
    </div>

    <div className='aa3'>
      <State></State>
    </div>
    <div className='aa3'>
      <Color></Color>
    </div>
    </div>
  );
}

export default App;
