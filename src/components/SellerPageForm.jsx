import * as React from 'react'
import images from '../lib/dummyData'


export default class SellerPageForm extends React.PureComponent {
  state = { submitted: false}

  handleChange = (event) => {
      const value = event.target.value
      const name = event.target.name
  
    this.setState(
      {[name]: value})
  }
    
  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()

    const newItem = {
      id: this.props.images.images.length +1,          
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
      price: this.state.price,
      priceGroup: this.priceGroupGenerator(),
      condition: this.state.condition,
      category: this.state.category,
      age: this.state.age,
      gender: this.state.gender
    }
    
    this.props.addItem(newItem)
    images.push(newItem)

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

  priceGroupGenerator = () => {
    console.log(this.state.price)
    const price = this.state.price
      
    if (price === 0) {
          return '0'
      } else if (price >= 1 && price <= 10) {
          return '1-10' 
      } else if (price >= 11 && price <= 20) {
          return '11-20' 
      } else if (price >= 21 && price <= 30) {
          return '21-30' 
      } else if (price >= 31 && price <= 40) {
          return '31-40' 
      } else if (price >= 41 && price <= 50) {
          return '41-50' 
      } else if (price >= 50) {
          return '50+' 
      } else {
          return ''
      }
    }
    
    
  render() {
    console.log(images)
    if (!this.state.submitted) {
    return (
    <div className = "seller-page-container">    
      <form onSubmit={this.handleSubmit}>
      <div className = "seller-page-left">
      <label>
          <p>Category</p>
          <select className = "category-selector" name="category" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="toys">Toys</option>
            <option value="furniture">Furniture</option>
            <option value="clothes">Clothes</option>
          </select>
        </label><br />
        <label>
          <p>Upload Image</p>
          <input className = "select-image"
          type="text" 
          name="imageUrl" 
          onChange={this.handleChange} />
        </label><br />
        <label>
          <p>Title</p>
          <input className = "select-title"
          type="text" 
          name="title" 
          pattern="[A-Za-z\s]+"
          maxLength="25" 
          minLength="2" 
          placeholder="title"
          onChange={this.handleChange} />
        </label><br />
        <label>
          <p>Price</p>
          <input type="number" className= "select-price"
          name="price"
          placeholder="price"
          minLength="1"
          onChange={this.handleChange} />
        </label><br />
        </div>
        <div className = "seller-page-right">
        <label>
          <p>Description</p>
          <textarea className= "select-description"
          name="description" 
          minLength="2" 
          maxLength="200" 
          placeholder="description"
          onChange={this.handleChange} />
        </label><br />
        <label>
          <p>Condition</p>
          <select className = "select-condition" name="condition" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="brand new">Brand new</option>
            <option value="as good as new">As good as new</option>
            <option value="acceptable">Acceptable</option>
            <option value="used">Used</option>
          </select>
        </label><br />
        <label>
          <p>Age range</p>
          <select className = "select-age" name="age" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="0-2">0 - 2 years</option>
            <option value="2-4">2 - 4 years</option>
            <option value="4-6">4 - 6 years</option>
            <option value="6+">6 years and over</option>
          </select>
        </label><br />
        <label>
          <p>Gender</p>
          <select className = "select-gender" name="gender" onChange={this.handleChange}>
          <option value="">Please choose</option>
            <option value="girl">Girl</option>
            <option value="boy">Boy</option>
            <option value="uni">Unisex</option>
          </select>
        </label><br />
        <input className = "submit-button" type="submit" value="Submit" /><br />
      </div>
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
          <h3>Age range: {this.state.age}</h3>
          <h3>Gender: {this.state.gender}</h3>
          <img src={this.state.imageUrl} alt="product" />
          <button className="btn-upload" onClick={this.toggle}>Upload another item</button>
          </div>
      )
    }
  }
}
    
