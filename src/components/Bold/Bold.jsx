import './Bold.css';

const Bold = (props) => {
    const text = props.text;
    return ( 
        <div className="bold">
            {text}
        </div>
     );
}
 
export default Bold;