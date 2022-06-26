import React from 'react';
import './InputTask.css';

const InputTask = () => {
	return (
		<div className="outerdiv">
			<div className="set-input-pos">
				<input className="input-style" type="text" placeholder="add task name"/>
			</div>
			<div>
				<button className="mt4 bw0 ml4 bg-light-blue grow animate-button btn-cursor">+</button>
			</div>
		</div>
	);
}


export default InputTask;