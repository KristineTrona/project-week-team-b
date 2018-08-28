import * as React from 'react'

export default class SellerPage extends React.PureComponent {

    // handleChange = (event) => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    //   }
    
    //   handleSubmit = (event) => {
    //     event.preventDefault()
    //     event.target.reset()
    
    //     if (this.state. && this.state.description) {
    //       this.props.addItem({
    //         name: this.state.name,
    //         description: this.state.description,
    //         ingredients: []
    //       })
    //     }
    //   }
    
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
              <select name="state" onChange={this.handleChange}>
                <option value="state1">state1</option>
                <option value="state2">state2</option>
                <option value="state3">state3</option>
                <option value="state4">state4</option>
              </select>
            </label>
            <label>
              Category:
              <select name="category" onChange={this.handleChange}>
                <option value="toy">toy</option>
                <option value="state2">furniture</option>
                <option value="state3">clothes</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>)
      }
    }
    