import { useState, useEffect } from "react";
import IdeaCard from "./IdeaCard";
import { getApprovedIdeas, getIdea, updateIdeaStaus } from "@/Api/Apis";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const IdeaList = () => {

  const role = useSelector((state) => state.auth.role);

  const [ideas, setIdeas] = useState([]);
  const fetchIdeas = async () => {
    try {
      const response = await getIdea()
      if (response.status == 200) {
        setIdeas(response.data.ideas);
      } else {
        toast.error("Error While Fetching Idea")
      }
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  };


  const fetchIdeasApproved = async () => {
    try {
      const response = await getApprovedIdeas()
      if (response.status == 200) {
        setIdeas(response.data.data)
      } else {
        toast.error("Error While Fetching Idea")
      }
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  };

  useEffect(() => {
    if (role === "Admin") {
      fetchIdeasApproved()
    } else {
      fetchIdeas();
    }
  }, []);


  const handleStatusChange = async (id, status, rejectReason) => {
    try {
      const result = await updateIdeaStaus(id, status, rejectReason)
      if (result.status == 200) {
        toast.success("Status Updated Successfully")
      } else {
        toast.error("Status Updated Successfully")
      }
      if (role === "Admin") {
        fetchIdeasApproved()
      } else {
        fetchIdeas();
      }

    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {ideas.map((idea) => (
        <IdeaCard key={role === "Admin"?idea._id : idea.id} idea={idea} onStatusChange={handleStatusChange} />
      ))}
    </div>
  );
};

export default IdeaList;
