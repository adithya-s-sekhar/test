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

  useEffect(() =>{
    setArrSorted(bubbleSort(arr))
  },[arr])

  return (
    <div className="App">
      <div className="input">
            <form>
                <input
                    type='text'
                    placeholder='Comma-seperated values here'
                    onChange={(e) => setArrRaw(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
        <div className='visual'>
          <p>Unsorted Array</p>
          <div className='visual-box'>
            {arr && arr.map((i) => (<Bar value = { i }/>))}
          </div>
          <p>Sorted Array</p>
          <div className='visual-box'>
            {arr_sorted && arr_sorted.map((i) => (<Bar value = { i }/>))}
          </div>
        </div>
    </div>
  );
}

export default App;
