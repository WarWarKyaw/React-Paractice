import logo from './logo.svg';
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';


function App() {
  return (
    <div className="App">
      <UserProvider value = "Vishwa">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
