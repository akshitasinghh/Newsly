import{useState}  from "react";
import{useEffect}  from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {
    
    const [articles,setArticles]=useState([]);
    
useEffect(()=>{
        let url= `https://newsapi.org/v2/everything?q=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
    
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles && articles.map((news,index)=>{
        return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard;
