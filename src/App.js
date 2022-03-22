import './App.css';
import {NiftyTracker, PresentDate} from './data.svc'
import {Grid} from './Grid'



function Heading() {
  return <h1>National Stock Exchange</h1>
}

function NiftIndex() {
  return <h2>Nifty Index : {NiftyTracker[NiftyTracker.length - 1]} on {PresentDate.toLocaleDateString()}</h2>
}

function App() {
  return (
    <div className="StockMar">
      <Heading/>
      <NiftIndex/>
      <Grid/>
    </div>
  );
}

export default App;
