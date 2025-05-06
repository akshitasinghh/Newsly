import image from '../assets/news.jpg'
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card  bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  {/* <img src={src} style={{height:"200px", width:"360px"}} className="card-img-top" alt="..."/> */}
  <img 
        src={src?src:image} 
        className="card-img-top" 
        alt="..." 
        style={{ height: "200px", width: "100%", objectFit: "cover" }} 
      />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"It is information about something that had happened"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  );
};

export default NewsItem;
