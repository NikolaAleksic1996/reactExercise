import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import GlobalService from "../services/GlobalService";
const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
    GlobalService.getPost(id).then((res) => {
        setPost(res.data)
    })
    }, [id])

    return (
        <div>
            {post?.title}
        </div>
    )
}
export default Post
