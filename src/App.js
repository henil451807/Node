import logo from './logo.svg';
import './App.css';
import { FetchAPI } from './Component/FetchAPI';
import { RadioButton } from './Component/ RadioButton';
import HoverTabs from './Component/Tabs';

function App() {
  return (
    <>
    <div className='App'>
      <FetchAPI />
      <RadioButton />
      <HoverTabs />
      </div> 
    
    </>
  );
}

export default App;
