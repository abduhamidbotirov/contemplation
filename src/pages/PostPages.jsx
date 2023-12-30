import React, { useState, useEffect } from 'react';
import "./index.css"
import axios from 'axios';
import Posts from '../Components/Posts/Posts';
import { useNavigate } from 'react-router-dom';
const PostPages = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleGoBack = () => {
        navigate('/create'); // Use navigate instead of history.goBack()
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        posts.length ? posts.map(data => {
                            return <Posts key={data.id} posts={data} isClickable={true} />
                        }) : ""
                    }
                </div>
            </div>
            <button onClick={handleGoBack} className='create-post'>Create New Post</button>

        </>
    );
};

export default PostPages;
