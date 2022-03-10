import React, { Component } from "react";
import Item from "./Item";

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "All",
    };

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  handleCategoryChange(event) {
    // event.target.value will be the value selected by the user
    console.log(event.target.value+1);
    this.setState({
      selectedCategory: event.target.value,
    });
  }

  // we want to filter the items to only display the ones based on the selected category
  render() {
    const  itemsToDisplay = this.props.items.filter((item) => {
      if (this.state.selectedCategory === "All") return true;
  
      return item.category === this.state.selectedCategory;
    });
  
  console.log(this.itemsToDisplay);
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    );
  }
}
