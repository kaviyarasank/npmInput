import "./Input.css";

function Input(props){
    return(
        <div>
       <div className="wrapper">
      <div>
        <input placeholder={`${props.placeholder}`} style={{height:`${props.height}`,width:`${props.width}`,fontSize:`${props.fontSize}`}} value={props.value}></input>
        <span style={{background:`${props.spanBackground}`,color:`${props.spanColor}`}}> {props.sapnName} </span>
      </div>
    </div>
        </div>
    )
}
export default Input;