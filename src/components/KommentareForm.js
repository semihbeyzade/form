import { useState } from "react";
import React from "react";

const COMMENT_START = {
    display_name:"",
    body:"",
};


function KommentareForm(props) {

    const [comment, setComment] = useState(COMMENT_START)

    const handleOnChange = event => {
        setComment({...comment, [event.target.name]: event.target.value })
    }


  return (
    <div>
      <h3>Kommentar schreiben</h3>
      <form className="ui form" onSubmit={(event) => {
          props.handleCommentSubmit(event, comment)
          setComment(COMMENT_START)
          }}>
        <div className="ui mini icon input">
          <input
            type="text"
            name="display_name"
            onChange={handleOnChange}
            value={comment.display_name}
            placeholder="Kommentar schreiben..."
          />
        </div>
        <textarea
          placeholder="Kommentare"
          name="body"
          onChange={handleOnChange}
          value={comment.body}
          rows="3"
        ></textarea>
        <button class="ui blue button" type="submit">
          Schicke Kommentar
        </button>
      </form>
    </div>
  );
}

export default KommentareForm;
