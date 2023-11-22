import { Route, Routes } from 'react-router-dom'
import Comment from '../Components/Comments/Comment';
import PostPages from '../pages/PostPages';
const index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PostPages />} />
                <Route path='/:id' element={<Comment />} />
            </Routes>
        </>
    );
};

export default index;