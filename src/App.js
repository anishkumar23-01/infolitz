
import './App.css';
import Sidebar from './componets/sidebar/Sidebar';
import User from './componets/User/User';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar/>
        <div className='cardview'>
        <User/>

        </div>

        

      </div>
      
    </div>
    
  );
}

export default App;
