import { Link } from "react-router-dom";
import "./post.css"
const Posts = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                <Link to={"/id"}>
                <div className="card">
                    <div className="card_header">
                        <h3>Teshaboyev Ketmon</h3>
                    </div>
                    <div className="card_body">
                        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto in aspernatur atque accusamus vel? Eaque sint minima exercitationem odit inventore!</h3>
                    </div>
                </div>
                </Link>
            </div>
        </>
    );
};

export default Posts;