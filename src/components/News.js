import React, { Component , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import Header from './Header'
import Bdata from './Bdata'
import Sciencedata from './Sciencedata'
import Genraldata from './Genraldata'
import Sportsdata from './Sportsdata'
import Healthdata from './Healthdata'
import Entertainmentdata from './Entertainmentdata'
import Homedata from './Homedata'



export default class News extends Component {
    static defaultProps ={
      country : "in",
      pageSize :9,
      category : "genral"

    }
    static propTypes ={
      country :PropTypes.string,
      pageSize :PropTypes.number,
      categor :PropTypes.string,
      
    }
        
    constructor(){
        super();
       
        this.state={
            articles: [],
            loading: false,
            Page:1
        }
    }
     async componentDidMount(){
       console.log("cdm");
        //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f1b7a59ed6d498ba8c7089733591d5c&page=1&pageSize=${this.props.pageSize}`;
        //let data = await fetch(url);
        if(this.props.category==="sports"){
          let parsedData =Sportsdata  //await data.json()
          console.log(parsedData);
          this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults}) 
        }
        else if(this.props.category==="science")
          {
            let parsedData =Sciencedata  //await data.json()
            console.log(parsedData);
            this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults}) 
          }
          else if(this.props.category==="health")
          {
            let parsedData = Healthdata  //await data.json()
            console.log(parsedData);
           this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults}) 
          }
          else if(this.props.category==="entertainment")
          {
            let parsedData = Entertainmentdata  //await data.json()
            console.log(parsedData);
           this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults}) 
          }
          else if(this.props.category==="general")
          {
            let parsedData = Genraldata  //await data.json()
            console.log(parsedData);
           this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults}) 
          }
          else if(this.props.category==="business")
          {
            let parsedData = Bdata  //await data.json()
            console.log(parsedData);
           this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults}) 
          }
        
        //console.log(parsedData);
        //this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults}) 
    }
   /* handlePrevClick =async ()=>{
     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f1b7a59ed6d498ba8c7089733591d5c&page=${this.state.Page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
      //let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({ Page: this.state.Page-1,
        
          articles : parsedData.articles,
          loading:false
        })* /
      
      
    } 

    
    handleNextClick =async ()=>{
      
      
       // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f1b7a59ed6d498ba8c7089733591d5c&page=${this.state.Page+1}&pageSize=${this.props.pageSize}`;
       // this.setState({loading:true})
       // let data = await fetch(url);
      //let parsedData = await data.json()
       // console.log(parsedData);
        //this.setState({ Page: this.state.Page+1,
        
          //articles : parsedData.articles,
          //loading:false
         // }) 
      

      
      
      
    }*/
  render() {
    return (
      <div className ="container my-3">
        <h1 className='text-center'>NewsMonkey- Top Headlines </h1>
      {this.state.loading && <Spinner/>}
        

       <div className="row">
       
       
       {!this.state.loading && this.state.articles.map((element)=>{ return <div className="col-lg-4 col-md-6"><NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageURL={!element.urlToImage?"https://i1.prth.gr/images/963x541/_webp/files/2022-04-19/%CE%A3%CF%84%CE%B9%CE%B3%CE%BC%CE%B9%CE%BF%CF%84%CF%85%CF%80%CE%BF_2022-04-19__12_16_20_%CF%80%CE%BC.png":element.urlToImage}  newsUrl={element.url}/> </div>})}
           
        
           
       </div>
         <div className ="container d-flex justify-content-between">
         <button disabled ={this.state.Page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
         <button disabled ={this.state.Page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>


        
        

      </div>
    )
  }
}
