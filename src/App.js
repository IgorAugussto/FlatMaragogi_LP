import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LpHeader from './components/LpHeader';
import LpBody from './components/LpBody';
import LpFooter from './components/LpFooter';

function App() {
  return (
    <div className="App">
      <LpHeader />
      <LpBody />
      <LpFooter />
    </div>
  );
}

export default App;
