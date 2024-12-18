
import { useState } from "react";


export const MainFeed = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
     setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <>
    <div className="container">


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
        <button className="background_icons"><i className="bi bi-paperclip iconClipz"></i>
       {/*<input className="form-control" type="file" id="formFile"/>*/} 
        </button><textarea placeholder="Cuentanos sobre las ultimas noticias de tu mascota!" className="form-control input_NewPost" id="exampleTextarea" rows="3" data-listener-added_d6e8dc35="true"></textarea>

      </div>
      <div className="div newPostButtom_Div">
        <button className="btn btn-warning">Subir<i style={{marginLeft:"5px"}} className="bi bi-arrow-right"></i>

        </button>
      </div>
    </dir>
<hr />

    <div>
      <div className="topPost">
        
      <i style={{fontSize:"2rem"}} className="bi bi-person-circle"></i>

        <div className="namesPost">
          <strong style={{color:"black"}}>Nombre Ejemplo</strong>
          <p style={{color:"gray"}}>Location</p>    
        </div>
        <dir className="dotsClass">
       <button className="background_icons dotsClass"><i className="bi bi-three-dots-vertical iconsSmall"></i></button> </dir>
      </div>
      <div className="div postTextContent">        Este es un ejemplo de texto bla bla bla aqui debe de ir la propieda de post.text
      </div>
      <div className="div postImageContent">

   
    <img
        src="https://via.placeholder.com/300"
        alt="Thumbnail"
        onClick={openModal}
        style={{ cursor: 'pointer', width: '300px' }}
      />

     
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img
            src="https://via.placeholder.com/800"
            alt="Full size"
            className="modal-content"
          />
        </div>
      )}

      </div>
      <div className="div optionsPosts">


        <div className="div">
        <i className="bi bi-heart iconsPostmargin"></i>
        post.likes.leght

        </div>
        <div className="div">
        <i className="bi bi-chat-left-dots iconsPostmargin"></i>
          post.comment.leght
        </div>
        <div className="div">
        <i className="bi bi-arrow-repeat iconsPostmargin"></i>
        post.share.leght


        </div>

      </div>
      <hr />

    </div>
    


    </div>
    
    
    </>
  )
}
