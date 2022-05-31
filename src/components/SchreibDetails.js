import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import SchreibKommentare from './SchreibKommentare';



function SchreibDetails(props) {
 
    const [schreibList, setSchreibList] = useState([]);
    const [kommentare, setKommentare] = useState([]);
   

    let params = useParams()
    
    const handleCommentSubmit = (event, comment) => {
        event.preventDefault();
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${params.id}/comments`, comment)
        .then(response => {
            setKommentare([...kommentare, response.data])
        }).catch(error => {
            console.log(error);
        })
    }

  
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
      
      const getRepo = async () => {
          try{
              const response = await axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${params.id}/comments`)
              setKommentare(response.data);
              console.log(response.data);

          }catch(error) {
              console.log(error);
          }
      };

      getRepo();

    }, []);

    


    
  return (
    <>
     <h2 class="ui header">{schreibList.title}</h2>
     <p>{schreibList.created_at}</p>
     <p>{schreibList.content}</p>
     <SchreibKommentare kommentare={kommentare} handleCommentSubmit={handleCommentSubmit} />
     
     
    </>
  )
}

export default SchreibDetails