import axiosInstance from "./Config/axiosInstance";

export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/api/signup', data);
    return response;
  } catch (error) {
    console.error('Error register :', error);
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await axiosInstance.post('/api/signin', data);
    return response;
  } catch (error) {
    console.error('Error login:', error);
    throw error;
  }
};

export const postIdea = async (data) => {
  try {
    const response = await axiosInstance.post('/api/ideas', data);
    return response;
  } catch (error) {
    console.error('Error posting idea:', error);
    throw error;
  }
};


export const getIdea = async () => {
  try {
    const response = await axiosInstance.get('/api/ideas');
    return response;
  } catch (error) {
    console.error('Error getting idea:', error);
    throw error;
  }
};

export const getUserIdea = async () => {
  try {
    const response = await axiosInstance.get(`/api/user-ideas/`)
    return response;
  } catch (error) {
    console.error('Error getting idea for userdashboard:', error);
    throw error;
  }
};


export const updateIdea = async (idea, id) => {
  try {
    const response = await axiosInstance.put(`api/idea/${id}`, idea);
    return response;
  } catch (error) {
    console.error('Error update idea users:', error);
    throw error;
  }
};

export const updateIdeaStaus = async (id, status, rejectReason) => {
  try {
    let data = {
      status,
      rejectReason
    }
    const response = await axiosInstance.put(`api/updateIdea/${id}`, data);
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getApprovedIdeas = async () => {
  try {

    const response = await axiosInstance.get('/api/approved-ideas');
    return response;
  } catch (error) {
    console.error('Error fetching Approved Ideas:', error);
    throw error;
  }
};


export const voteOrComment = async (id, vote = null, commandText = null) => {
  try {
    
    const requestBody = {};
    if (vote !== null) {
      requestBody.vote = vote;
    }
    if (commandText) {
      requestBody.commandText = commandText;
    }
    const response = await axiosInstance.put(`/api/idea-voting/${id}`, requestBody);
    return response;
  } catch (error) {
    console.error('Error Voting or Commenting:', error);
    throw error;
  }
};


export const getUserData = async () => {
  try {
    const response = await axiosInstance.get('/api/user-data');
    return response;
  } catch (error) {
    console.error('Error getting user data:', error);
    throw error;
  }
};