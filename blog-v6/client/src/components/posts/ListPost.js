import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import PropTypes from "prop-types";
import "./post.scss";

const ListPost = ({ posts }) => {
   return (
      <div className="grid-container mx-3">
         {posts.map(post => (
            <Link to={`/post/${post._id}`} key={post._id}>
               <Post post={post} />
            </Link>
         ))}
      </div>
   );
};

ListPost.propTypes = {
   posts: PropTypes.array.isRequired
};

export default ListPost;