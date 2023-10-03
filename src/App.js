
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

import ProductList from './ProductList'
import AddProducts from './AddProducts';

function App() {
  return (
    
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
        <ProductList></ProductList>
        <AddProducts></AddProducts>
    </div>
  );

}

export default App;

