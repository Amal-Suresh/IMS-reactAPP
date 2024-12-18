import { useEffect, useState } from "react";
import { IdeaForm } from "./IdeaForm";
import { IdeaList } from "./IdeaList";
import { getUserIdea, postIdea, updateIdea } from "@/Api/Apis";
import toast from "react-hot-toast";


const CreateIdeas = () => {

  const [ideas, setIdeas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchIdeas = async () => {
    setLoading(true);
    try {
      const response = await getUserIdea();
      if(response.status==200){
        setIdeas(response.data.ideas);
      }
    } catch (error) {
      console.error("Error fetching ideas:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleSubmit = async (newIdea) => {
    try {
      if (editingIndex !== null) {
      
        let result =await updateIdea(newIdea,ideas[editingIndex].id)
        if(result.status==200){
          toast.success("Idea Updated Successfully")
        }else{
          toast.error("Error While Updating Idea")
        }
      } else {
       let response=  await postIdea(newIdea);
       if(response.status==201){
        toast.success("Idea Posted Successfully") 
       }else{
        toast.error("Error While Posting Idea")
       }
        
      }
      setEditingIndex(null);
      fetchIdeas(); 
    } catch (error) {
      console.error("Error submitting idea:", error);
    }
  };


  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-lg sm:text-3xl font-bold mb-6">Manage Your Ideas</h1>
      {loading && <p>Loading...</p>}
      <IdeaForm
        onSubmit={handleSubmit}
        editingIdea={editingIndex !== null ? ideas[editingIndex] : null}
      />
      <IdeaList ideas={ideas} onEdit={handleEdit} />
    </div>
  );
}


export default CreateIdeas