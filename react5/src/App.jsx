import './App.css';
import Cards from './component/card';
import Movie from './movie';



function App() {

    

  return (
    <>
    <div className='head'>
    <h1>Movies</h1>
    </div>
    <div className='cards_'>
      {Movie.map(mm=>(<Cards key={mm.id} id={mm.id} image={mm.image} title={mm.title} lang={mm.language} cost={mm.cost}/>))}
      
    </div>
    </>
    
  );
}


export default App;
