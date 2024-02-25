import './Rating.css'

function Rating(props) { 
 
  const rating = props.rating;

  return (   
    <> 
    <div className="Ratings">		
    { rating >= 1 ? <span><i className="fa-solid fa-star color_etoile-1"></i></span>:<span><i className="fa-solid fa-star color_etoile-2"></i></span>}
		{ rating >= 2 ? <span><i className="fa-solid fa-star color_etoile-1"></i></span>:<span><i className="fa-solid fa-star color_etoile-2"></i></span>}
		{ rating >= 3 ? <span><i className="fa-solid fa-star color_etoile-1"></i></span>:<span><i className="fa-solid fa-star color_etoile-2"></i></span>}
		{ rating >= 4 ? <span><i className="fa-solid fa-star color_etoile-1"></i></span>:<span><i className="fa-solid fa-star color_etoile-2"></i></span>}
		{ rating >= 5 ? <span><i className="fa-solid fa-star color_etoile-1"></i></span>:<span><i className="fa-solid fa-star color_etoile-2"></i></span>}
    { rating >= 6 ? <span></span>:<span></span>}	    
    </div>    
    </>     
      );
    }   
    export default Rating
