import "../../estilos/stylesheetMainFeed.css"
import "../../estilos/navbar.css"

export const FeedDivisors = () => {
  return (
    <>
    
     {/*<div>
      <button className="btn btn-outline-warning btn-lg selectorsMain">Para ti</button>
      <button className="btn btn-outline-warning btn-lg selectorsMain">Siguiendo</button>
    </div>*/}
    <div className="btn-group selectorsMainRadiusBtn" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked={true} data-listener-added_d6e8dc35="true" />
  <label className="btn btn-outline-primary" htmlFor="btnradio1">Siguiendo</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" checked={true} />
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Para ti</label>

</div>
    
    <dir>
      <div className="div newPostInput_Div">
        <i className="bi bi-paperclip iconClipz"></i>
       {/*<input className="form-control" type="file" id="formFile"/>*/} 
        <textarea placeholder="Cuentanos sobre las ultimas noticias de tu mascota!" className="form-control input_NewPost" id="exampleTextarea" rows="3" data-listener-added_d6e8dc35="true"></textarea>

      </div>
      <div className="div newPostButtom_Div">
        <button className="btn btn-warning">Subir<i style={{marginLeft:"5px"}} className="bi bi-arrow-right"></i>

        </button>
      </div>
    </dir>
    <hr />

    
    {/*<Share></Share>*/}
    
    </>
  )
}
