import './App.css';
import Card from './component/card';
import pic1 from "./image/robin.jpg"
import pic2 from "./image/barney.jpg"
import pic3 from "./image/ted.jpg"
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
    <div className='aa'>
      <Card name="Robin scherbatsky" roll="1" pic={pic1}/>
      <Card name="Ted Mosby" roll="2" pic={pic2}/>
      <Card name="Barney stinson" roll="3" pic={pic3}/>

      
    </div>
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
