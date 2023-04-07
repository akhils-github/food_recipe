import React,{useState,useContext,useEffect} from "react";
import CardDish from "./CardDish";
import Pagination from "./Pagination";
import {AllMenuContext} from "./AllMenuContext";


function FilteredDishes(props){

    let [menuCategory, setMenuCategory] = useState([]);
    let [singleDish,setSingleDish] = useState([])
    const allMenus = useContext(AllMenuContext)
    let [filterdDishes,setFilterdDishes] = useState([])
    let [activeDish , setActiveDish] = useState("Beef")
    let [currentPage , setCurrentPage] = useState(1)
    let [itemsPerpage ,setItemsPerpage] = useState(4)
    let indexOfLastDish = currentPage * itemsPerpage;
    // 1 * 4 = 4
    // 2 * 4 = 8
    // 3 * 4 = 12
    let indexOfFirstDish = indexOfLastDish - itemsPerpage;
    // 4 - 4 = 0
    // 8 - 4 = 4
    // 12 - 4 = 8
    let showTheseDishesNow = filterdDishes.slice(indexOfFirstDish,indexOfLastDish)

  
    
    //Get all the Category
    async function getAllTheCategories() {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      let response = await fetch(API_URL);
      let categoryData = await response.json();
      setMenuCategory(categoryData.categories);
    }
  
    //Get all the One Dish
    async function getOnlyOneDish() {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
      let response = await fetch(API_URL);
      let SingleDishData = await response.json();
      setSingleDish(SingleDishData.meals)
    }
  
    useEffect(() => {
      getAllTheCategories();
      getOnlyOneDish();
    }, []);
  

    //lets shows only single items
    let maxItem = 4;
    let singleDishItems = singleDish.map((item , index) => {
        if(index < maxItem){
            return (
                <li>
                    <img src={item.strMealThumb} alt=""  className="br-10"/>
                    <h5>{item.strMeal}</h5>
                </li>
            )
        }
        

    })

    //show Dishes on click
    function showFilterdDishesHandler(category){
        setSingleDish([])
        setActiveDish(category)
        let filterdDishesAre = allMenus.filter((item)=>{
            return(
                item.strCategory===category
            )
        }).map((menuItem)=>{
            return(
                <CardDish menuItem ={menuItem}/>
            )
        })
        setFilterdDishes(filterdDishesAre)

    }

    //let show all the categories
    let allCatergories = menuCategory.map((item)=>{
        return(
            <li className={item.strCategory === activeDish ? "active" : ""} 
            onClick={()=>showFilterdDishesHandler(item.strCategory)}>
                {item.strCategory}</li>
        )
    })

     //Rendering
    return(
        <div className="filterd-dishes">
            <div className="container">
                <div className="text-center">
                <h2>Choose your Dishes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing eltetur, officiis error sunt, asperiores dolore optio. Vel, accusantium?</p>

                </div>
                <div className="filterd-dishes">
                    <ul>
                        {allCatergories}

                    </ul>
                </div>
                <div className="filtered-dishes-results">
                    <ul className="flex flex-wrap">
                        {singleDishItems}
                        {singleDishItems !== 0 || filterdDishes.length  !== 0 ? showTheseDishesNow :
                        <div className="alert">
                            <h3>Sorry,No items found</h3>
                            <h4>Please try another dishes</h4>
                        </div>
                         }
                        
                    </ul>

                </div>
                <Pagination 
                    filterdDishes = {filterdDishes}
                    itemsPerpage = {itemsPerpage}
                    currentPage = {currentPage}
                    setCurrentPage = {setCurrentPage}
                
                ></Pagination>


            </div>
        </div>
    )

}
export default FilteredDishes