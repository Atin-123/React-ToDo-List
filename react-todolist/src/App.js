import React, {Component} from 'react';
import './App.css';
import InputTask from './components/InputTask/InputTask';
import TodoArray from './components/TodoArray/TodoArray';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputList:"",
      tasks:[]
    }
  }

  inputChange = (event) => {
    this.setState({inputList: event.target.value});
  }

  onClickAdd = (event) => {
    if (this.state.tasks.length <= 7){
      this.setState({tasks:[...this.state.tasks,this.state.inputList]});
    }
    this.setState({inputList:""})
  }

  onClickDelete = (id) => {
      this.setState({
        tasks: this.state.tasks.filter((task,i) => {
          return i!==id;
        })
      })
   }


  render(){
    return (
      <div className="container bg-lightest-blue">
        <div className="centerdiv bg-white">
          <div className="mr5 ml5 br3 mt1 bg-light-pink padding-top-bottom">
            <h1 className="tc">ToDo List</h1>
          </div>
          <div>
            <InputTask inputval={this.state.inputList} inputchange={this.inputChange} onclickadd={this.onClickAdd}/>
          </div>
          <div>
            <ol className="f4 ls-styles">
              {/*<li className="ma2 ml4">{this.state.inputList}</li>*/}
              {/*<li className="ma2 ml4">buy me apple</li>*/}
              {this.state.tasks.map((task,i) => {
                // return <li key={i} className="ma2 ml4">{task}</li>;
                return <TodoArray  onselect={this.onClickDelete} tasklength = {this.state.inputList} key={i} index={i} taskname={task}/>
              })}

            </ol>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
