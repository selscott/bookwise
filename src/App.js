import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookshelf from './components/Bookshelf';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BookWise</h1>
      </header>
      <main>
        <Bookshelf />
      </main>
    </div>
  );
}

export default App;
