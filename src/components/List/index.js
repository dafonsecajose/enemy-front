import ItemList from '../ItemList';

const List = ({list}) => {
  const handleList = (item, index) =>{
    return (
      <ItemList
        key={`enemy-${index}`}
        link={item.link}
        name={item.name}
        />
    );
  }
  return (
    <ul className="list-group">
      {list.map(handleList)}
    </ul>
  );
}

export default List;