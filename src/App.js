import React from 'react';
import axios from 'axios'

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
      selectedProduct: null
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className='MainContainer'>
          <Dashboard inventory={this.state.inventory}
                    getInventory={this.componentDidMount} />
          <Form getInventory={this.componentDidMount}
                selectedProduct={this.state.selectedProduct} />
        </div>
      </div>
    )
  }
}
