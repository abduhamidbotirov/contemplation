import { Route, Routes } from 'react-router-dom'
import Comment from '../Components/Comment/Comment';
import PostPages from '../pages/PostPages';
import CreatePost from '../Components/CreatePost/CreatePost';
const index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PostPages />} />
                <Route path='/create' element={<CreatePost />} />
                <Route path='/:id' element={<Comment />} />
            </Routes>
        </>
    );
};

export default index;