import { Link, useRouteMatch } from "react-router-dom";


const ItemList = ({ name, link }) => {
  const { url } = useRouteMatch();
  link = link.split('/enemies/');
  link = link[1];
  return (
  <Link
    to={`${url}enemy/${link}`}
    className="list-group-item list-group-item-action" aria-current="true">
    {name}
  </Link>
  );
}

export default ItemList;