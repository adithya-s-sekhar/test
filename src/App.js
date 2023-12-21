import './App.css';
import { useEffect, useState } from 'react';
import Bar from './components/Bar/Bar';
import strToNum from './functions/strToNum';
import bubbleSort from './functions/bubbleSort';

function App() {

  const [arr_raw, setArrRaw] = useState('');
  const [arr_sorted,setArrSorted] = useState('');
  let arr = new Array;

  useEffect(() => {
    arr = arr_raw.split(',');
    strToNum(arr);
    setArrSorted(bubbleSort(arr));
  },[arr_raw]);

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
            {arr_sorted && arr_sorted.map((i) => (<Bar value = { i }/>))}
            </div>
        </div>
    </div>
  );
}

export default App;
