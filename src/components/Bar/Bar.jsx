import './Bar.css';

const Bar = (props) => {
    const value = props.value;
    return ( 
        <div className='bar'>
            <div className='bar-text'>
                {value}
            </div>
        </div>
     );
}
 
export default Bar;