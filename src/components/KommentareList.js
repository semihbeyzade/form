import React from 'react'

function KommentareList(props) {
  return (
    <div>
         <h2>Kommentare</h2>
     {
         props.kommentare.map((kommentar) => {
             return (
                <div className="ui relaxed list" key={kommentar.id}>
                <div className="item">
                  <div className="content">
                    <a className="header" href='#acbd'>{kommentar.display_name}</a>
                    <div className="description">{kommentar.body}</div>
                  </div>
                </div>
               </div>
             )
         })}
    </div>
  )
}

export default KommentareList