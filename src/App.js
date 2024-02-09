import Navbar from './components/Nav';
import './App.css';
import Card from './components/Card';
import data from "./components/data";
function App() {
  const cards= data.map((item)=>{
    return(
      <Card
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
     <Navbar/>
   {cards}
    </div>
  );
}

export default App;
