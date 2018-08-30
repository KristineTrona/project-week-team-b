import * as React from 'react'
import Logo_1 from '../lib/images/Logo_1.svg'



export default class SellerPage extends React.PureComponent {
  state = { submitted: false}

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
      priceGroup: "empty for now",
      condition: this.state.condition,
      category: this.state.category,
      age: "empty for now",
      gender: "empty for now"
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
          Condition:
          <select name="condition" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="brand new">Brand new</option>
            <option value="as good as new">As good as new</option>
            <option value="acceptable">Acceptable</option>
            <option value="used">Used</option>
          </select>
        </label><br />
        <label>
          Category:
          <select name="category" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="toys">Toys</option>
            <option value="furniture">Furniture</option>
            <option value="clothes">Clothes</option>
          </select>
        </label><br />
        <label>
          Age range:
          <select name="category" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="0-2">0 - 2 years</option>
            <option value="2-4">2 - 4 years</option>
            <option value="4-6">4 - 6 years</option>
            <option value="6+">6 years and over</option>
          </select>
        </label><br />
        <label>
          Gender:
          <select name="category" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="girl">Girl</option>
            <option value="boy">Boy</option>
            <option value="uni">Unisex</option>
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
    
