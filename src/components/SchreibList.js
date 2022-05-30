import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function SchreibList(props) {
    const [schreibList, setSchreibList] = useState([]);

    useEffect(() => {
      const url = "https://react-yazi-yorum.herokuapp.com/posts"
     
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setSchreibList(json) 
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, []);
  return  <div className="ui relaxed divided list">{schreibList.map(schreib => {
        return (
          <div className="item" key={schreib.id}>
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <Link to={`/posts/${schreib.id}`} className="header">{schreib.title}</Link>
            <div className="description">{schreib.created_at}</div>
          </div>
        </div>
        )
      })}
      </div>
    }

export default SchreibList