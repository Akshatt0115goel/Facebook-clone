import React , {useState,useEffect} from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';



const Feed = () =>{

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
    );
  },[]);

return (

<div className="feed">

<StoryReel />
<MessageSender />


{posts.map(post=>(
  <Post key = {post.id}
  profilePic = {post.data.profilePic}
       message={post.data.message}
    timestamp={post.data.timestamp}
  username={post.data.username}
  image={post.data.image} />
))}

</div>

// <Post profilePic="https://images.unsplash.com/photo-1630883665215-dc90914c334b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
// image = "https://images.unsplash.com/photo-1653025464240-689d8e10d75b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814"
// username="monk" timestamp="This is a timestamp" message = "Wow This Works !"/>
//
// <Post profilePic="https://images.unsplash.com/photo-1521856729154-7118f7181af9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035"
// image = "https://images.unsplash.com/photo-1652982262734-c050157ec077?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"
// username="monk" timestamp="This is a timestamp" message = "Wow This Works !"/>
//





)


}

export default Feed;
