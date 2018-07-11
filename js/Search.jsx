import React,{Component} from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

// must have a render method returing markup
class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      searchTerm:'this is a debug statement'
    }
    //provides the correct context for the state and the change
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event){
    this.setState({searchTerm:event.target.value});
  }

  render(){
    return  <div className="search">
      <header>
        <h1>Video Search Service</h1>
        <input type='text' value ={this.state.searchTerm} placeholder='Search' onChange={this.handleSearchChange}/>
      </header> 
      <div>
        {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)} 
      </div>
    </div>
  }
}  
export default Search;