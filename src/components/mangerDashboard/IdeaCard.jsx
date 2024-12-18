import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";

const IdeaCard = ({ idea, onStatusChange }) => {

  const [status, setStatus] = useState(idea.status);
  const [rejectReason, setRejectReason] = useState(idea.rejectReason || "");
  const [showComments, setShowComments] = useState(false);


  const role = useSelector((state) => state.auth.role);


  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleUpdateStatus = () => {
    let id = (role === "Admin") ? idea._id : idea.id
    onStatusChange(id, status, rejectReason);
  };

  const getStatusOptions = () => {
    if (role === "Admin" && (status === "Approved" || status === "InProgress" || status === "Completed")) {
      return (
        <>
          <SelectItem value="InProgress">InProgress</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
          <SelectItem value="Approved">Approved</SelectItem>
        </>
      );
    }
    return (
      <>
        <SelectItem value="Pending">Pending</SelectItem>
        <SelectItem value="Approved">Approved</SelectItem>
        <SelectItem value="Rejected">Rejected</SelectItem>
      </>
    );
  };

  return (
    <Card className="shadow-lg border">
      <CardHeader>
        <h3 className="text-lg font-semibold">{idea.title}</h3>
        <p className="text-sm text-gray-500">{idea.priority} Priority</p>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700">{idea.description}</p>
        <p className="text-sm text-gray-600 mt-2">Votes: {idea.votes}</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">


        <Select value={status} onValueChange={handleStatusChange}
          disabled={idea.status === "Rejected"}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Change Status" />
          </SelectTrigger>
          <SelectContent>
            {getStatusOptions()}
          </SelectContent>
        </Select>

        {(status === "Rejected" && idea.status !== "Rejected") && (
          <div className="w-full">
            <Textarea
              placeholder="Enter rejection reason"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
            <Button
              variant="primary"
              className="mt-4 w-full border"
              onClick={() => handleUpdateStatus()}
              disabled={!rejectReason.trim()}
            >
              Update Status
            </Button>
          </div>
        )}

        {status !== "Rejected" && status !== idea.status && (
          <Button
            variant="primary"
            className="mt-4 w-full border"
            onClick={() => handleUpdateStatus(idea.id)}
          >
            Update Status
          </Button>
        )}

        {/* {idea.commands && idea.commands.length > 0 && (
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? "Hide Comments" : "Show Comments"}
          </Button>
        )} */}

        {/* {showComments && idea.commands && idea.commands.length > 0 && (
          <div className="mt-4 p-4 border border-gray-200 rounded">
            <h4 className="text-lg font-semibold">Comments</h4>
            <ul className="space-y-2 mt-2">
              {idea.commands.map((comment, index) => (
                <li key={index} className="text-gray-700">
                  <strong>{comment.user}</strong>: {comment.text}
                  <p className="text-xs text-gray-500">{new Date(comment.timestamp).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </CardFooter>
    </Card >
  );
};

export default IdeaCard;
