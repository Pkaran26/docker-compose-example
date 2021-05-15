import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

  const getPosts = async ()=>{
    const result = await axios.get('http://localhost:3001/')
    .catch(err=>{ return err.response })

    if(result && result.data)
      setPosts(result.data)
  }

  useEffect(()=>{
    getPosts()
  }, [])

  return (
    <div className="App">
      <pre>{ JSON.stringify(posts, undefined, 4) }</pre>
    </div>
  );
}

export default App;
