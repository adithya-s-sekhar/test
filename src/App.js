import './App.css';
import { useEffect, useState } from 'react';
import Bar from './components/Bar/Bar';
import strToNum from './functions/strToNum';
import bubbleSort from './functions/bubbleSort';

function App() {

  const [arr_raw, setArrRaw] = useState('');
  const [arr_sorted,setArrSorted] = useState('');
  let arr = new Array;

  arr = arr_raw.split(',');
  strToNum(arr);

  useEffect(() => {
    // setArrSorted(bubbleSort(arr));
  },[arr]);

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
