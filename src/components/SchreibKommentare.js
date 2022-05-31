import React from 'react'
import KommentareList from './KommentareList'
import KommentareForm from './KommentareForm'

function SchreibKommentare(props) {

  return (
    <div>
        <KommentareList kommentare={props.kommentare}/>
        <KommentareForm handleCommentSubmit={props.handleCommentSubmit} />
    </div>
  )
}

export default SchreibKommentare