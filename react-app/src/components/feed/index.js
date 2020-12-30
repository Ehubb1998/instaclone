import React, {useState, useEffect} from "react";
import Post from "./post";
import "./feed.css"


const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [users, setUsers] = useState({});
    useEffect(() => {
        (async () => {
            let res = await fetch("/api/posts/");
            res = await res.json();
            setPosts(res.Posts);
            setUsers(res.users)
            setLoaded(true);
        })()
    }, []);
    return (
        loaded &&
        <div className="posts-holder">
            {posts.length ? posts.map(post => <Post post={post} user={users[post.userId]} users={users}/>) : <h2>No Posts to see. Follow more People!</h2>}
        </div>
    );
}

export default Feed;