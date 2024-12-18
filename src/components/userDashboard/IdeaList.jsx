// components/IdeaList.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Pagination from "../Pagination";
import { useState } from "react";

export function IdeaList({ ideas, onEdit }) {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 90; 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg sm:text-2xl font-bold mb-4">Idea List</h2>
      {ideas.length === 0 && (
        <p className="text-gray-500">No ideas added yet. Add some!</p>
      )}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className='text-md'>{idea.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs">{idea.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => onEdit(index)}
              >
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}
