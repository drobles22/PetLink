import React from 'react'
import { MainFeed } from '../MainPage/MainFeed'
import "../../estilos/profile.css"

export const Profile = () => {
  return (
    <>
    
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="/public/testAssest/Post/post4.jpg"
              alt=""
            />
            <img
              className="profileUserImg"
              src="/public/testAssest/Person/person2.jpg"
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Valeria F. OlimpoShelter</h4>
              <h6>@usernameOlimpoS</h6>
              <h6>Costa Rica</h6>  
              <div className='followersContainer'>
                <div className="div followersInfo">
                    <strong><span>15</span></strong>
                    <span>publicaciones</span>
                </div>
                <div className="div followersInfo">
                    <strong><span>100</span></strong>
                    <span>seguidores</span>
                </div>
                <div className="div followersInfo">
                    <strong><span>95</span></strong>
                    <span>seguidos</span>
                </div>
              </div>
              <span><strong>Acerca de: </strong></span>
              <span className="profileInfoDesc">Hello my friends!</span>
              <br />
              <span><strong>Informacion </strong></span>
              <div></div>

          </div>
        </div>
        <div className="profileRightBottom">
          <MainFeed />
        </div>
      </div>
    </div>
  </>
  )
}
