import "../../estilos/share.css"
export const Share = () => {
  return (
    <>
    
    <div className="container containerShare"></div>
    <div className="wrap">
        <div className="contTop">
        <textarea placeholder="Cuentanos sobre las ultimas noticias de tu mascota!" 
        className="form-control input_NewPost" id="exampleTextarea" rows="3" 
        data-listener-added_d6e8dc35="true"></textarea>
            </div>
            <hr />
            <div className="contBottom">
                <div className="div NewPostOptions">
                    <div className="newPostOp">
                        <i className="bi bi-card-image"></i>

                        <span className="OptionText">Image</span>
                    </div>
                </div>
                <button className="btn btn-warning shareButton">Subir<i style={{marginLeft:"5px"}} className="bi bi-arrow-right"></i></button>

            </div>
        

    </div>
    
    
    
    
    </>
  )
}
