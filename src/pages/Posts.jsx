import {useEffect, useState} from "react";
import GlobalService from "../services/GlobalService";
import {Link} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([])

    console.log(posts)

    useEffect(() => {
        GlobalService.getAllPosts().then((res) => {
            setPosts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {posts.map((el) => {
                return(
                    <div key={el.id}>
                        <Link to={`/post/${el.id}`}>{el.title}</Link>
                        <div>{el.body}</div>
                        {/*<button>View</button>*/}
                        <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts