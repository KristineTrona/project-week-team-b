import * as React from 'react'
import Logo_1 from '../lib/images/Logo_1.svg'



export default class SellerPage extends React.PureComponent {
  state= { submitted: false}

  handleChange = (event) => {
      const value = event.target.value
      const name = event.target.name
  
    this.setState(
      {
      [name]: value
      }
    )
  }
    
  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    
    this.props.addItem({
      id: this.props.images.images.length +1,          
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      category: this.state.category
    })
    this.setState(
      {
        submitted: !this.state.submitted
      }
    )
  }

  toggle = () => {
    this.setState({
      submitted: !this.state.submitted
    })
  }

    
  render() {
    if (!this.state.submitted) {
    return (
    
    <div>
      <h2>Add an item</h2>
    
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input 
          type="text" 
          name="title" 
          pattern="[A-Za-z\s]+"
          maxLength="25" 
          minLength="2" 
          placeholder="title"
          onChange={this.handleChange} />
        </label><br />
        <label>
          Description:
          <textarea
          name="description" 
          minLength="2" 
          maxLength="200" 
          placeholder="description"
          onChange={this.handleChange} />
        </label><br />
        <label>
          Image URL:
          <input 
          type="text" 
          name="imageUrl" 
          onChange={this.handleChange} />
        </label><br />
        <label>
          Price:
          <input type="number" 
          name="price"
          placeholder="price"
          minLength="1"
          onChange={this.handleChange} />
        </label><br />
        <label>
          State:
          <select name="condition" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="condition1">condition1</option>
            <option value="condition2">condition2</option>
            <option value="condition3">condition3</option>
            <option value="condition4">condition4</option>
          </select>
        </label><br />
        <label>
          Category:
          <select name="category" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="toy">toy</option>
            <option value="furniture">furniture</option>
            <option value="clothes">clothes</option>
          </select>
        </label><br />
        <input type="submit" value="Submit" /><br />
      </form>
    </div>)
    } else {
      return (
        <div> 
          <h1>You have submitted the following item:</h1>
          <h3>Title: {this.state.title}</h3>
          <h3>Description: {this.state.description}</h3>
          <h3>Price: €{this.state.price}</h3>
          <h3>Condition: {this.state.condition}</h3>
          <h3>Category: {this.state.category}</h3>
          <img src={this.state.imageUrl} />
          <button className="btn-upload" onClick={this.toggle}>Upload another item</button>
          </div>
      )
    }
  }
}
    
