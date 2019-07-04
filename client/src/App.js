import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from '../src/components/ShoppingList'
import ItemModal from './components/itemModal';
import {Container} from 'reactstrap';

// Redux
import {Provider} from 'react-redux';
import store from './components/store';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;