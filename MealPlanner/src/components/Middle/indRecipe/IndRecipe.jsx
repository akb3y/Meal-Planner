import React from 'react'

class IndRecipe extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      view: 'description'
    }
  }

  render(){
    return(
      <div>
        <img src={this.props.indRecipe.image} alt='yum'/>
        <p>{this.props.indRecipe.title}</p>
      </div>
    )
  }
}

export default IndRecipe;