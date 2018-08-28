import * as React from 'react'

export default class SellerPage extends React.PureComponent {

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        console.log(name, value)
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()

        console.log(this.state)
        console.log(this.props)


        if (this.state.title && this.state.description && this.state.price) {
          this.props.addItem({
            title: this.state.name,
            description: this.state.description,
            price: this.state.price,
            condition: this.state.condition,
            category: this.state.category
          })
        } else {
            alert("Please enter a title, price and description of the item")
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
            </label>
            <label>
              Description:
              <input type="text" 
              name="description" 
              onChange={this.handleChange} />
            </label>
            <label>
              Price:
              <input type="number" 
              name="price" 
              onChange={this.handleChange} />
            </label>
            <label>
              State:
              <select name="condition" onChange={this.handleChange}>
                <option value="condition1">condition1</option>
                <option value="condition2">condition2</option>
                <option value="condition3">condition3</option>
                <option value="condition4">condition4</option>
              </select>
            </label>
            <label>
              Category:
              <select name="category" onChange={this.handleChange}>
                <option value="toy">toy</option>
                <option value="furniture">furniture</option>
                <option value="clothes">clothes</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>)
      }
    }
    
