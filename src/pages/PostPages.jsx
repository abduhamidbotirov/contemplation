import Posts from '../Components/Posts/Posts';

const PostPages = () => {
    return (
        <>
            <div className="container">
            <div className="row">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>   
     </div>
        </>
    );
};

export default PostPages;