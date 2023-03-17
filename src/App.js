import logo from './logo.svg';
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import ComponentE from './components/ComponentE';


function App() {
  return (
    <div className="App">
      <UserProvider value = "Vishwa">
        <ComponentE />
      </UserProvider>
    </div>
  );
}

export default App;
