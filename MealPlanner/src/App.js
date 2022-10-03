import React from 'react';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Month from './components/Middle/Month.jsx'
import Recipes from './components/Middle/Recipes/Recipes.jsx'
import IndRecipe from './components/Middle/indRecipe/IndRecipe.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home',
      recipes: [],
      week: {index: 0},
      menu:
      [
        {meals: ['Beef Wellington','Stuffed Cabbage', 'Rice Pilaf','Chicken Pot Pie','Bacon, Egg, and Cheese Eggo Waffle Sandwich','Shakshuka','Margarita Pizza']},
        {meals: ['Flank Steak with Frito Chilaquiles','Quinoa Risotto With Mushroom', 'Masala Bhindi','Chicken In White Wine','Butter Chicken','Seafood paella']},
        {meals: ['Poutine', 'Chicken Parm', "Fish 'n' chips", ]},
        {meals:['Fajitas','Lasagna']}
      ],
      indRecipe: {}
    }
    this.getRecipes = this.getRecipes.bind(this)
    this.getIndRecipe = this.getIndRecipe.bind(this)
    this.onClickRecipes = this.onClickRecipes.bind(this)
    this.onClickHome = this.onClickHome.bind(this)
    this.onClickAddMeal = this.onClickAddMeal.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
    }
    getRecipes() {
      axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_key}&number=18`)
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
          alert('this week is full')
        return;
      }
      currentMeals.push(title);

      this.setState({menu: currentMenu, page: 'home' })
    }

    getIndRecipe(id){
      axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_key}`)
      .then(res =>
        this.setState({
          indRecipe: res.data,
          page: 'ind'})
        )
    }
    componentDidMount (){
      this.getRecipes()
  }
  render(){
    let body = this.state.page === 'home' ? <Month menu={this.state.menu} addMeal={this.onClickAddMeal} getIndRecipe={this.getIndRecipe}/> : this.state.page === 'recipes' ?  <Recipes recipes={this.state.recipes} add={this.onClickAdd} getIndRecipe={this.getIndRecipe}/> :this.state.page === 'ind' ? <IndRecipe indRecipe={this.state.indRecipe}/> : null
  return (
    <div className='app'>
    <Header Home={this.onClickHome} Recipes ={this.onClickRecipes}/>
    {body}
    <br />
    <Footer />
    </div>
  );
  }
}

export default App;