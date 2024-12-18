import { useEffect, useState } from "react";
import VoteCard from "./VotingCard";
import { getApprovedIdeas, voteOrComment } from "@/Api/Apis";
import toast from "react-hot-toast";

const VoteList = () => {
  const [userId,setUserId]=useState("")
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState([]);


  const fetchIdeas = async () => {
    setLoading(true);
    try {
      const response = await getApprovedIdeas();
      if (response.status == 200) {
        setIdeas(response.data.data);
        setUserId(response.data.userId)
      }
    } catch (error) {
      console.error("Error fetching ideas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);


  const handleVote = async (id, vote, commandText) => {
    try {
      const result = await voteOrComment(id, vote, commandText)
      if (result.status == 200) {
        toast.success("Vote Marked")
        fetchIdeas()
      } else {
        toast.error("Error While Voting")
      }
    } catch (error) {
      console.log("Error while voting", error);
    }
  };

  const handleComment = async (id, vote, commandText) => {
    try {
      const result = await voteOrComment(id, vote, commandText)
      if (result.status == 200) {
        toast.success("Commented Successfully")
        fetchIdeas()
      } else {
        toast.error("Error While Commeting")
      }
    } catch (error) {
      console.log("Error While Commenting", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Idea Voting List</h1>
      {loading && <p>Loading...</p>}
      {ideas.map((idea) => (
        <VoteCard
          key={idea.title}
          idea={idea}
          userId={userId}
          handleVote={handleVote}
          handleComment={handleComment}
        />
      ))}
    </div>
  );
};

export default VoteList;
