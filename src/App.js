
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/SIdebar'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
