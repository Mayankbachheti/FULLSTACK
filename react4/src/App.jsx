import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainlayout from './component/MainLayout';
import './App.css';
import Login from './component/Login';
import Registration from './component/Resgistration';
import Dashboard from './component/Dashboard';
import { useState } from 'react';

//rfc


function App() {

  const [store, setStore] = useState("");

  return (
    <>
     {JSON.stringify(store)}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout></Mainlayout>}>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration regData={setStore}></Registration>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
