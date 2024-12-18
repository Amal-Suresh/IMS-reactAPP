// components/IdeaForm.jsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function IdeaForm({ onSubmit, editingIdea }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    if (editingIdea) {
      setTitle(editingIdea.title);
      setDescription(editingIdea.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingIdea]);

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    else if (title.length < 3) newErrors.title = "Title must be at least 3 characters.";
    
    if (!description.trim()) {
      newErrors.description = "Description is required.";
    } else if (description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
  
    return newErrors;
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await onSubmit({ title, description });
    setTitle("");
    setDescription("");
    setErrors({});
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg sm:text-xl font-bold mb-4">
        {editingIdea ? "Edit Idea" : "Add New Idea"}
      </h2>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter idea title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter idea description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>
        <Button type="submit" onClick={(e)=>handleSubmit(e)}>
          {editingIdea ? "Save Changes" : "Add Idea"}
        </Button>
      </div>
    </div>
  );
}
