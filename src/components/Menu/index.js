import Input from '../Input';
import Button from '../Button';
import { useState } from 'react'; 

const Menu = (props) => {

  const { onClick } = props;
  const [ search, setSearch ] = useState('');

  const handleChangeSearch = (e) =>{
    setSearch(e.target.value);
  }

  const handleClearSearch = () => {
    setSearch('');
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Enemy Api</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Enemies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
            </ul>
            <form className="d-flex">
              <Input 
                className="form-control me-2" 
                type="search" 
                name='search'
                onChange={handleChangeSearch}
                value={search}/>
              <Button 
                className="btn btn-outline-success"
                onClick={() => onClick(search)}
                onMouseOut={ handleClearSearch}>Search</Button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;