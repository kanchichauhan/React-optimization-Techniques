import './App.css';
import RouteFile from './components/CodeSplitting/RouteFile';
import OptimizeCalls from './components/OptimizeCalls';
import VirtualizationAndWindowing from './components/VirtualizationAndWindowing';

function App() {
  return (
    <div className="App">
      {/* <VirtualizationAndWindowing /> */}
      {/* <OptimizeCalls /> */}
      {/* Code splitting */}
      <RouteFile />
    </div>
  );
}

export default App;
