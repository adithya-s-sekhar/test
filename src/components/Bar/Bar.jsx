import './Bar.css';

const Bar = (props) => {
    const value = props.value;
    return ( 
        <div className='bar'>
            {value}
        </div>
     );
}
 
export default Bar;