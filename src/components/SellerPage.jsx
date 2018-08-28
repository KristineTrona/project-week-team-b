import * as React from 'react'


export default class SellerPage extends React.PureComponent {

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

    if (this.state.title && this.state.description) {
        this.props.addItem({
          id: this.props.images.length +1,          
          title: this.state.title,
          imageUrl: this.props.imageURL,
          description: this.state.description,
          price: this.state.price,
          condition: this.state.condition,
          category: this.state.category
      })
    }
  }
    
  render() {
    return (<div>
      <h2>Add an item</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input 
          type="text" 
          name="title" 
          onChange={this.handleChange} />
        </label><br />
        <label>
          Description:
          <textarea
          name="description" 
          onChange={this.handleChange} />
        </label><br />
        <label>
          Price:
          <input type="number" 
          name="price"
          onChange={this.handleChange} />
        </label><br />
        <label>
          State:
          <select name="condition" onChange={this.handleChange}>
            <option value="condition1">condition1</option>
            <option value="condition2">condition2</option>
            <option value="condition3">condition3</option>
            <option value="condition4">condition4</option>
          </select>
        </label><br />
        <label>
          Category:
          <select name="category" onChange={this.handleChange}>
            <option value="toy">toy</option>
            <option value="furniture">furniture</option>
            <option value="clothes">clothes</option>
          </select>
        </label><br />
        <input type="submit" value="Submit" /><br />
      </form>
    </div>)
  }
}
    
