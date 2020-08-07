import React, { useEffect } from "react";
import ViewPost from "../../components/posts/ViewPost";
import { deletePost, getPostByID } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ViewPostPage = ({
   auth,
   post,
   match,
   history,
   getPostByID,
   deletePost
}) => {
   useEffect(() => {
      getPostByID(match.params.id);
   }, [match, getPostByID]);

   const handleEdit = () => {
      history.push(`/blog/post/update/${post._id}`);
   };

   const handleReply = () => {
      history.push(`/blog/post/${post._id}/create_comment`);
   };

   const handleDelete = () => {
      deletePost(post._id, history);
   };

   if (Object.keys(post).length === 0) return <div />;
   return (
      <ViewPost
         post={post}
         auth={auth}
         onDelete={handleDelete}
         onEdit={handleEdit}
         onReply={handleReply}
      />
   );
};

const mapStateToProps = state => ({
   auth: state.auth,
   post: state.post.post
});

ViewPostPage.propTypes = {
   auth: PropTypes.object.isRequired,
   post: PropTypes.object.isRequired,
   getPostByID: PropTypes.func.isRequired,
   deletePost: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostByID, deletePost }
)(ViewPostPage);
