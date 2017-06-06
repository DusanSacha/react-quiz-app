import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Select extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      fireRedirect: false,
      categories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({fireRedirect: true});
  }

  handleChange(event) {
    this.setState({
      selectedValue: event.target.value,
    });    
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then((response) => {
        const categories = response.data.map((item) => {
          return (<option value={item.title} key={item._id}>{item.title}</option>);
        });

        this.setState({
          categories,
        });       
      });
  }

  render(){
    const { fireRedirect } = this.state;
    return(
      <div>
        <h1>Select Lesson:</h1>
        <form onSubmit={this.handleSubmit}>
            <select value={this.state.selectedValue} onChange={this.handleChange}>
                <option value=''>-- select lesson --</option>
                {this.state.categories}
            </select>
            <button type='submit'>Go</button>
        </form>
        { fireRedirect && <Redirect to={'/category/'+this.state.selectedValue} />}
      </div>  
    );
  }
}

export default Select;