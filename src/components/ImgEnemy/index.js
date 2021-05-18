

const ImgEnemy = ({photos}) => {

  const handleChangePhoto = (e) => {
    document.querySelector('img.card-img-top.img-thumbnail').src = e.target.src;
  }

  return (
    <div className="row justify-content-center">
    <div className="col-md-4 col-sm">
      {photos.map((image) => {
        if ( image.position === 'front'){
          return (<img src={image.image} className="card-img-top img-thumbnail" key={`thumb-${image.position}`} alt={image.position}></img>)
        }      
      })}
      
    </div>
    <div className="col-md-1 col-sm-2" >
      {photos.map((image) => {
        return (
          <div className="" key={`img-${image.position}`}>
          <img src={image.image} className="img-fluid img-small" alt={image.position} onMouseDown={(e) => handleChangePhoto(e)}></img>
        </div>
        )
      })}
    </div>
  </div>
  );

}


export default ImgEnemy;