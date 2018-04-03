/**
 * @Author: Ali Ismail
 * @Date:   2018-04-03T14:14:34+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-03T18:10:32+02:00
 */
import React, { Component } from 'react';
class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  static defaultProps = {
    categories: ['Health and Fitness','Coding Skills','Knowledge Consumption','Entertainment']
  }
  handleSubmit(e){
    e.preventDefault();
    if (this.refs.title.value === ''){
    alert('Title is missing');
    } else {
    this.setState({newProject:
      {
        id:Date.now(),
        title:this.refs.title.value,
        category: this.refs.category.value,
        color: '#'+Math.floor(Math.random()*16777215).toString(16)
      }
      //setState takes a second parameter, a callback function! sending data up wink.
    },function () {
      console.log(this.state);
      this.props.addProject(this.state.newProject);
    });
  }
  }
  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return(
      <div className="AddProject">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label> Category</label><br />
            <select ref="category">
            {categoryOptions}
          </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddProject;
