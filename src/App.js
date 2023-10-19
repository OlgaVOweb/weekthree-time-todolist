import './App.css';
import Time from './Time';
import image from './list.png';
import imageH from './h.png';
import { Todolist } from './Todolist';



function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Time />
      </div>
      <div className='container'>
        <img src={image} width='150px' alt='list'/>
      </div>
      <div className='container'>
        <h1>TO DO LIST</h1>
      </div>
      <div>
        <Todolist />
      </div>
      <div className='container'>
        <img src={imageH} width='100px' alt='list'/>
      </div>
    </div>
  );
}

export default App;
