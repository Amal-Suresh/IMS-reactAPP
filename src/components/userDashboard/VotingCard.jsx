import { useState } from "react";
import { useSelector } from "react-redux";
import { FaThumbsUp, FaCheck, FaComment, FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa';

const VoteCard = ({ idea, handleComment, handleVote, userId }) => {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [error, setError] = useState("");


  const role = useSelector((state) => state.auth.role);
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${day}-${month}-${year} ${formattedHours}:${minutes}:${seconds} ${period}`;
  }


  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleCommentSubmission = async () => {
    if (!comment.trim()) {
      setError("Comment cannot be empty");
      return;
    }
    setError("");
    await handleComment(idea._id, null, comment);
    setComment("");
  };

  return (
    <div className="border-2 rounded-md p-4 sm:p-6 shadow-md mb-4">
      <h2 className="text-lg font-bold mb-2">{idea.title}</h2>
      <p className="text-gray-700">{idea.description}</p>
      <p className="mt-2 text-sm">
        <span className="">Status:</span> {idea.status}
      </p>
      <p className="text-sm mt-2">
        <span className="">Priority:</span> {idea.priority}
      </p>
      <p className="text-sm mt-2">
        <span className="">Votes:</span> {idea.votes}
      </p>
      <div className="flex flex-col sm:flex-row  gap-2 mt-2">
        {(role === "User") && (
          <div className="flex flex-col sm:flex-row  gap-2">
            <button
              disabled={idea.voters.some(voter => voter.user._id === userId)}
              onClick={() => handleVote(idea._id, 1, null)}
              className={`px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 ${(idea.voters.some(voter => voter.user._id === userId)) ? "cursor-not-allowed" : ""}`}
            >
              {idea.voters.some(voter => voter.user._id === userId) ? (
                <>
                  <FaCheck className="h-5 w-5" />
                  Voted
                </>
              ) : (
                <>
                  <FaThumbsUp className="h-5 w-5" />
                  Vote
                </>
              )}
            </button>
            <input
              disabled={idea.commands.some(cmd => cmd.user._id === userId)}
              type="text"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border px-2 py-1 rounded text-black"
            />
            <button
              disabled={idea.commands.some(cmd => cmd.user._id === userId)}
              onClick={handleCommentSubmission}
              className={`px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2 ${(idea.commands.some(cmd => cmd.user._id === userId)) ? "cursor-not-allowed" : ""}`}
            >
              {idea.commands.some(cmd => cmd.user._id === userId) ? (
                <>
                  <FaCheck className="h-5 w-5" />
                  Commented
                </>
              ) : (
                <>
                  <FaComment className="h-5 w-5" />
                  Comment
                </>
              )}
            </button>
          </div>
        )}
        <button
          onClick={toggleComments}
          className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-2"
        >
          {showComments ? (
            <FaEyeSlash className="h-5 w-5" />
          ) : (
            <FaEye className="h-5 w-5" />
          )}
          <span>{showComments ? "Hide Comments" : "Show Comments"}</span>
        </button>
      </div>
      {error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
      {showComments && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Comments:</h3>
          {idea.commands.length > 0 ? (
            idea.commands.map((cmd, index) => (
              <div key={index} className="text-sm text-gray-600 border-t pt-1">
                <p className="flex items-center  pt-2 gap-2">
                  <FaUserCircle className="h-5 w-5 text-gray-500" /> {/* Circle user icon */}
                  <span className="text-sm ">{cmd.user.name}: {cmd.text}</span> 
                </p>
                <p className="text-[11px]  text-gray-700 my-2">{formatDate(cmd?.timestamp)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default VoteCard;
