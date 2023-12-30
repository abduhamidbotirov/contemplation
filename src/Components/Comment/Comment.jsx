import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./comment.css"
import Posts from '../Posts/Posts';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');
const Comment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        posts: {},
        comments: []
    });
    const [newCommentContent, setNewCommentContent] = useState('');
    useEffect(() => {
        socket.emit('postComment', id);
        // Listen for the 'newComment' event
        socket.on('postComment', (newComment) => {
            // Update the post data after receiving a new comment
            setPostData((prevData) => ({
                ...prevData,
                posts: newComment.post,
                comments: [...newComment.post.comments]
            }));
        });
    }, [id]);
    useEffect(() => {
        const fetchPostById = async () => {
            try {
                // const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
                // setPostData(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPostById();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        // Check if Enter key is pressed
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

            if (!newCommentContent) {
                alert("Sharx yozing...");
                return;
            }

            try {
                socket.emit('postCommentData', {
                    content: newCommentContent,
                    post_id: id,
                });
                socket.on('postCommentData', (newComment) => {
                    // Update the post data after receiving a new comment
                    console.log('newComment :', newComment);
                    console.log('newComment.post.comments :', newComment.post.comments);
                    setPostData((prevData) => ({
                        ...prevData,
                        posts: newComment.post,
                        comments: [...newComment.post.comments]
                    }));
                });      
                // Update the post data after successfully adding a new comment
                // socket.on('postCommentData', (newComment) => {
                //     // Update the post data after receiving a new comment
                //     setPostData((prevData) => {
                //         const updatedData = {
                //           ...prevData,
                //           comments: [...prevData.comments,newComment.createPost],
                //         };
                //         return updatedData;

                //       });
                // });

                // Clear the input field
                setNewCommentContent('');
            } catch (error) {
                console.error('Error adding comment:', error);
            }
        }
    };

    const handleGoBack = () => {
        navigate(-1); // Use navigate instead of history.goBack()
    };

    return (
        <>
            <button onClick={handleGoBack} className='create-post back'>Orqaga</button>

            <section id="comment">
                <div className="container">
                    <div className="row ">
                        {
                            <Posts posts={Object.keys(postData.posts).length > 0 ? postData.posts : {}} isClickable={false} c_auto={true} />
                        }
                    </div>
                    <div className="comment-wrapper">
                        {postData && postData.comments && (
                            <ul>
                                {postData.comments.map(comment => (
                                    <li key={comment.id}>
                                        {/* <p>ID: {comment.id}</p> */}
                                        <p> {comment.content}</p>
                                        {/* <p>Created At: {comment.createdAt}</p>
                                    <p>Updated At: {comment.updatedAt}</p> */}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="post-comment row">
                            <div className="comment-text col-11 p-0">
                                <input
                                    type="text"
                                    value={newCommentContent}
                                    className="w-100"
                                    onChange={(e) => setNewCommentContent(e.target.value)}
                                    onKeyDown={handleCommentSubmit} // Trigger the function on Enter key press
                                    placeholder="Bu post haqida nima deb o'ylaysiz?"
                                />
                            </div>
                            <div className="comment-submit col-1 p-0">
                                <div className="submit-icon" onClick={handleCommentSubmit}>
                                    <i className="fa-regular fa-paper-plane"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Comment;
