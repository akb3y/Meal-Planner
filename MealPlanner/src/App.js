import React from 'react';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Month from './components/Middle/Month.jsx'
import Recipes from './components/Middle/Recipes/Recipes.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      menu: [{meals: ['Chicken Pot Pie','Stuffed Cabbage', 'Rice Pilaf']},{meals: ['Turtle Soup','Chicken Gnocchi', 'Pancakes']},{meals: ['Pie', 'Salad', 'Dessert']},{meals:['Banana Bread','Pizza','Tasty']}]
    }
    this.getRecipes = this.getRecipes.bind(this)
    }
    getRecipes() {
      axios.get(`https://api.spoonacular.com/recipes/random?apiKey=4ce274a0809f4e6e9921a525c97cb387&number=20`)
        .then(res => this.setState({recipes: res.data.recipes}))
    }

    componentDidMount (){
      this.getRecipes()
  }
  render(){
  return (
    <div className='app'>
    <Header />
    <Month menu={this.state.menu}/>
    <Footer />
    </div>
  );
  }
}

export default App;