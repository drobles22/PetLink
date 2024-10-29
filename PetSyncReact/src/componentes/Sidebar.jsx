//import React from 'react'

export const Sidebar = () => {

  return (
    <>
    <main>
    <aside>
        <div>
        <h1><i className="bi bi-chat-left-dots iconsPostmargin"></i> PetSync</h1>
        </div>
            <div>
                <form action="">
                <input type="search" name="" id="" placeholder="Busqueda"/>
                </form>
            </div>

            
            <h2>Eventos</h2>
            <div>
            <ul>
                <li>  <a href="">Inicio</a></li>
                <li>  <a href="">Perfil</a></li>
                <li>  <a href="">Amigos</a></li>
                <li>  <a href="">Amigos</a></li>
                <li>  <a href="">Eventos</a></li>
            </ul>            
            </div>
            <div>
            <h1 className="tagUsuario"> <i className="bi bi-chat-left-dots iconsPostmargin"> Usuario </i> </h1>
            </div>
        </aside>
    </main>
    </>
  )
}

