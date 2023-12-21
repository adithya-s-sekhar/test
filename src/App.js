import './App.css';
import { useState } from 'react';
import Bar from './components/Bar/Bar';
import strToNum from './functions/strToNum';

function App() {

  const [arr_raw, setArrRaw] = useState('');
  let arr = new Array;

  arr = arr_raw.split(',');
  strToNum(arr);
  
  let sorted;
  do{
    sorted = true;
    for(let i=0;i<arr.length;i++){
      if(arr[i] > arr[i+1]){
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        sorted = false;
      }
    }
  }
  while(!sorted);

  return (
    <div className="App">
      <div className="input">
            <form>
                <input
                    type='text'
                    placeholder='Comma-seperated values here'
                    onChange={(e) => setArrRaw(e.target.value)}
                />
            </form>
        </div>
        <div className='visual'>
            <div className='visual-box'>
            {arr && arr.map((i) => (<Bar value = { i }/>))}
            </div>
        </div>
    </div>
  );
}

export default App;
