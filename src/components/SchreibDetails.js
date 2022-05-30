import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function SchreibDetails(props) {
    const [schreibList, setSchreibList] = useState([]);
    let params = useParams()
    useEffect(() => {
     
      const url = `https://react-yazi-yorum.herokuapp.com/posts/${params.id}`
     
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
    
  return (
    <>
     <h2 class="ui header">{schreibList.title}</h2>
     <p>{schreibList.created_at}</p>
     <p>{schreibList.content}</p>
    </>
  )
}

export default SchreibDetails