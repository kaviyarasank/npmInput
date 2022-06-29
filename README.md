# Usage

import Input from './component/Input';
import './App.css';

function App() {
  return (

    <div className="App">
       <Input 
       spanBackground="red" 
       sapnName="UserName" 
       spanColor="white" 
       width="400px" 
       placeholder="enter Name" 
       fontSize="20px"
       />
    </div>
  );
}

export default App;
