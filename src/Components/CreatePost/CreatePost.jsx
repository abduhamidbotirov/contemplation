import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null, // Add an image property to formData
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        // Check if the input is a file input (for image)
        const newValue = type === 'file' ? e.target.files[0] : value;

        setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title != '' && formData.description) {
            // Foydalanuvchiga xabarnoma berish
            alert('Title and description cannot be both empty');
            return;
        }
        if (!formData.title) {
            alert('Title and description cannot be both empty');
            return;
        }

        try {
            const postData = new FormData();
            postData.append('title', formData.title);
            postData.append('description', formData.description);
            postData.append('file', formData.image);

            const response = await axios.post('http://localhost:5000/api/posts', postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="create-post-form">
            <form onSubmit={handleFormSubmit} className="form-control post-form">
                <label>
                    Sarlovha nomi
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Sarlavhani kiriting..."
                    />
                </label>
                <br />
                <label>
                    Sarlovaning mazmuni
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Tarifi kiriting..."
                    />
                </label>
                <br />
                {/* Add input for image upload */}
                {/* <label>
                    Rasm (Image)
                    <input
                        type="file"
                        name="image"
                        onChange={handleInputChange}
                        accept="image/*"
                    />
                </label> */}
                <br />
                <button type="submit" className="submit">
                    Create Post
                </button>
            </form>
            <button onClick={handleGoBack} className="create-post back">
                Orqaga
            </button>
        </div>
    );
};

export default CreatePost;
