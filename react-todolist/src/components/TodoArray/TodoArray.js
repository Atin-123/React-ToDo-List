import React, {Component} from 'react';

class TodoArray extends Component {

	 render(){
		return (
			<div>
				<div style={{display:'flex', justifyContent:'flex-start'}}>
					<div style={{display:'flex', justifyContent:'flex-start', margin:'4px'}}>
						<button onClick={() =>{
							this.props.onselect(this.props.index);
						}} className=" bw0  bg-light-blue grow btn-cursor">-</button>
					</div>
					<div>
						<li className="ma2 ml4">{this.props.taskname}</li>
					</div>
				</div>
			</div>
		);
	 }
}


export default TodoArray;