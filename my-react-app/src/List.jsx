
function List(){
    
    const fruits = ['strawberry', 'blueberry', 'rasberry', 'cranberry'];
    const ListItems = fruits.map((fruit,index) => <li key={index}>{fruit}</li>)

    return(
    <div className="fruitList">
        <h3>Fruits List: </h3>
        <ul>{ListItems}</ul>  
        <p>{}</p>  
    </div>
    );
}   

export default List;