import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from './MainLayout';
import axios from 'axios';
import TilesContainer from './TilesContainer';
import Tile from './Tile';

class Select extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then((response) => {
        const categories = response.data.map((item) => {
          return (<Link to={'/category/'+item.title}><Tile>{item.title}</Tile></Link>);
        });

        this.setState({
          categories,
        });       
      });
  }

  render(){
    return(
      <MainLayout>
        <TilesContainer>
          {this.state.categories}
        </TilesContainer>
      </MainLayout>
    );
  }
}

export default Select;