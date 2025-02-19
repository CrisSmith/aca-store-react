function ProductsDetail(props){
    return(
        <div className="col-sm-4 col-lg-4 col-md-4">
         <div className="thumbnail">
            <img src={props.product.imgUrl} alt=""/>
                <div className="caption">
                     <h4 className="pull-right">{props.product.price}</h4>
                        <h4><a href="#">{props.product.name}</a></h4>
                        <p>{props.product.description} at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                        
                 </div>
                 <div className="ratings">
                    <p className="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                    </p>
                    <button type="submit" onClick={(e)=>{
                        e.preventDefault();
                        props.addToCart(props.product);
                        }
                        } >Add to Cart</button>
                 </div>
             </div>              
        </div>
      )
}
        
   