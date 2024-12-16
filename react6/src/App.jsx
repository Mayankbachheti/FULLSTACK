import './App.css';
import Child1 from './component/child1';



function App() {

  const stdata={
    name:"Aman",
    rollno:1,
  };

    

  return (

    <div>
      <Child1 stdata={stdata}></Child1>
    </div>
    
  );
}

export default App;
