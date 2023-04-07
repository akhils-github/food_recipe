import React,{useState,useContext} from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import{AllMenuContext} from './AllMenuContext'
import AddToCart from "./AddToCart"

function SpecialDishes(props){
    let [showPopup , setShowPopup] = useState(false)
    let [currentDish , setCurrentDish] = useState('')
    let [addToCartItem,setAddToCartItem] =useState([])

    const allMenus = useContext(AllMenuContext)

    //let show popup
     function showPopupHandler(dishName){
        setShowPopup(true)
        setCurrentDish(dishName)
     }
    // let close popup
     function closePopupHandler(){
        setShowPopup(false)
     }

    // Add to Cart Handler
     function addToCartHandler(addToCartImg,addToCartTitle){
        setAddToCartItem(
            [
            ...addToCartItem,
            {
            "img" : addToCartImg,
            "title" : addToCartTitle
        }])
     }

    let maxSpecialDishes = 8;
    let specialMenu = allMenus.map((menuItem,index)=>{
        if(index < maxSpecialDishes){
        return(
           <CardDish
           showPopup = {showPopupHandler}
            menuItem = {menuItem}
            />
        );
    }
    })

    return(
        <section className="special-dishes">
           {showPopup && <Popup 
           closePopup = {closePopupHandler} 
           currentDish = {currentDish}
           addToCartHandler = {addToCartHandler}
            ></Popup>}

            <div className="container">
                <AddToCart addToCartItem = {addToCartItem}/>
                <div className="special-dishes-content text-center">
                    <h2>Our Special Dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nam porro iste perspiciatis, aperiam velit exercitationem aliquid, non dolorum illo minima maiores nisi nesciunt blanditiis ratione, est excepturi. Aliquid, asperiores?</p>

                </div>
                <div className="special-dishes-list">
                    <ul className="flex flex-wrap gap-30">
                        {specialMenu}
                    </ul>

                </div>
            </div>

        </section>
        
    
    )
}
export default SpecialDishes