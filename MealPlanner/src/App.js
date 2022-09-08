import React, { useState } from 'react';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Month from './components/Middle/Month.jsx'
import Recipes from './components/Middle/Recipes/Recipes.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home',
      recipes: [],
      week: {index: 0},
      menu: [{meals: ['Chicken Pot Pie','Stuffed Cabbage', 'Rice Pilaf']},{meals: ['Turtle Soup','Chicken Gnocchi', 'Pancakes']},{meals: ['Pie', 'Salad', 'Dessert']},{meals:['Banana Bread','Pizza','Tasty']}]
    }
    this.getRecipes = this.getRecipes.bind(this)
    this.onClickRecipes = this.onClickRecipes.bind(this)
    this.onClickHome = this.onClickHome.bind(this)
    this.onClickAddMeal = this.onClickAddMeal.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
    }
    getRecipes() {
      axios.get(`https://api.spoonacular.com/recipes/random?apiKey=4ce274a0809f4e6e9921a525c97cb387&number=18`)
        .then(res => this.setState({recipes: res.data.recipes}))
    }

    onClickRecipes(){
      this.setState({page: 'recipes'})
    }
    onClickHome(){
      this.setState({page: 'home'})
    }
    onClickAddMeal(index){
      this.setState({week: index, page:'recipes'})
    }
    onClickAdd(title){
      const currentMenu = this.state.menu.slice();
      const currentMeals = currentMenu[this.state.week.index].meals;

      if (currentMeals.length === 7) {
        // throw an error
        // popup that says something like "This Week is full. Remove a recipe to replace it with a new one."
        return;
      }
      currentMeals.push(title);

      this.setState({menu: currentMenu, page: 'home' })
    }
    componentDidMount (){
      this.getRecipes()
  }
  render(){
    let body = this.state.page === 'home' ? <Month menu={this.state.menu} addMeal={this.onClickAddMeal}/> : this.state.page === 'recipes' ? <><h3>Recipes</h3><Recipes recipes={this.state.recipes} add={this.onClickAdd}/></> : null
  return (
    <div className='app'>
    <Header Home={this.onClickHome} Recipes ={this.onClickRecipes}/>
    {body}
    <Footer />
    </div>
  );
  }
}

export default App;