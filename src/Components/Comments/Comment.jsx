import CommentPost from "../CommentOfPost/CommentPost";
import CommentOfPost from "../Comment/Comment";
import "./index.css"
const Comment = () => {
    return (
        <>
            <section id="comment">
                <div className="container">
                    <div className="comments">
                        <div className="row">
                            <CommentPost />
                            <div className="col-12">
                                <p className="text-center static-paragrph">
                                    Nima demoqchisiz bu post xaqida?
                                    Sizni hechkim fosh qila olmaydi.
                                </p>
                            </div>
                            <div className="col-12">
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                                <CommentOfPost />
                            </div>
                        </div>
                        <div className="submiter">
                        <form className="row_form">
                            <input type="text" placeholder="Enter your idea" />
                            <button>
                                submit
                            </button>
                        </form>
                     </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Comment;