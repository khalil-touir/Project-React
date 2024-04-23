const List = ({list,onRemoveItem}) => (
   
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item}
        onRemoveItem={onRemoveItem}
         />
      ))}
    </ul>
);
const Item = ({item,onRemoveItem}) => {
  const handleRemoveItem = () => {
    onRemoveItem (item);
  };
return( 
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type='button' onClick={()=> {
          //do somthing else 
          // note : avoid using comlpex Logic in jsx
           onRemoveItem(item);
        }}>
          Dimiss
        </button>
      </span>
    </li>
  
); 
};
  export default List;  