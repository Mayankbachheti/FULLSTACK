import { createContext } from "react";
import Child5 from "./component/Child5";
const stdContext=createContext();

function App2() {

    const stdata={
      name:"Aman",
      rollno:1,
    };
  
      
  
    return (
  
      <div>
        <stdContext.Provider value={stdata}>
        <Child5></Child5>
        </stdContext.Provider>
        
      </div>
      
    );
  }
  
  export default App2;
  export {stdContext}
  