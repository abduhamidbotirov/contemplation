import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal.jsx'; // Adjust the path as needed
import './post.css';

const Posts = ({ posts, isClickable, c_auto }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <>
            <div className={c_auto ? "col-lg-12 col-md-12 col-sm-12 p-2 mx-auto" : "col-lg-12 col-md-12 col-sm-12 p-2"}>
                <div className="card">
                    <div className="pin_post">
                        <i className="bi bi-pin-angle"></i>
                        {/* <i className="bi bi-pin-angle-fill"></i> */}
                    </div>
                    {/* {posts.img !== 'Fayl yuklanmagan' && (
                            <div className="card_img" onClick={openModal}>
                                <img src={'http://localhost:5000' + posts.img} className="card-img" alt="jpeg" />
                            </div>
                        )} */}

                    <div className="card_header">
                        <h3>{posts.title}</h3>
                    </div>
                    <div className="card_body">
                        <h3>{posts.description}</h3>
                    </div>
                    <div className="smills">
                        <div className="about_post">
                            <span>
                                <i className="far fa-face-grin-beam"></i>
                                <div className="num">
                                    12
                                </div>
                            </span>
                            <span>
                                <i className="far fa-face-angry"></i>
                                <div className="num">
                                    12
                                </div>
                            </span>
                            <span>
                                <i className="far fa-heart"></i>
                                <div className="num">
                                    12
                                </div>
                            </span>

                            <span>
                                <i className="far fa-thumbs-up"></i>
                                <div className="num">
                                    12
                                </div>
                            </span>
                            <span>
                                <i className="far fa-thumbs-down"></i>
                                <div className="num">
                                    12
                                </div>
                            </span>
                        </div>
                        {/* <div className="progress_post"> */}
                        {/* <span className='disincrement fath_span'>
                                    <i className="fas fa-angle-down"></i>
                                    <span>127</span>
                                </span> */}
                        {/* <span className='increment fath_span'>
                                        <i className="fas fa-angle-up"></i>
                                        <span>1627</span>

                                    </span> */}
                        {/* </div> */}
                    </div>
                    {
                        isClickable ?
                            (<Link to={posts.id}>
                                <div className="card_comment">
                                    <p className="p-0 m-0">
                                        have you commented?
                                    </p>
                                    <i className="fa-solid fa-check mr-auto"></i>
                                </div>
                            </Link>)
                            : null
                    }

                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} content={<img src={'http://localhost:5000' + posts.img} alt="jpeg" />} />
        </>
    );
};

export default Posts;
