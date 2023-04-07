const AddToCart = ({addToCartItem})=>{

    let addToCartResults = addToCartItem.map((item)=>{
        return(
                <div>
                <img src={item.img} alt="" />
                <h6>{item.title}</h6>
            </div>            
        )

    })
    return(
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
            <h5>Your cart</h5>
                {addToCartResults}
                
            </div>
        </div>
    )
}
export default AddToCart