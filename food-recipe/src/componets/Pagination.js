import React,{useState} from 'react'

function Pagination(props) {
  let [activePage, setActivePage] = useState(1) 
    console.log("pagination page",props.filterdDishes)
   let numberOfPages =[];

    for (let i = 1; i <= Math.ceil(props.filterdDishes.length / props.itemsPerpage); i++){
        numberOfPages.push(i)
    }
    function showNextDishesHandler(event){
      let currentPage = event.target.id
      props.setCurrentPage(currentPage)
      //console.log(currentPage)
      setActivePage(currentPage)

    }

    let pages = numberOfPages.map((pageNumber)=>{
      return(
        <li id= {pageNumber} className={pageNumber === activePage ? "active" : ""} onClick={showNextDishesHandler}>{pageNumber}</li>
      )
    })

  return (
    <section>
      <ul className='pagination flex'>
        {pages}
      </ul>
    </section>
  )
}

export default Pagination