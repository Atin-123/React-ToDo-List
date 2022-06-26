import './App.css';
import InputTask from './components/InputTask/InputTask';

function App() {
  return (
    <div className="container bg-lightest-blue">
      <div className="centerdiv bg-white">
        <div className="mr5 ml5 br3 mt1 bg-light-pink padding-top-bottom">
          <h1 className="tc">ToDo List</h1>
        </div>
        <div>
          <InputTask/>
        </div>
        <div>
          <ol className="f4 ls-styles">
            <li className="ma2 ml4">buy me apple</li>
            <li className="ma2 ml4">buy me apple</li>

          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
