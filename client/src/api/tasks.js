import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tasks");

export const createTaskRequest = async (task) => {
  try {
      const response = await axios.post("/tasks", task);
      return response;
  } catch (error) {
      console.error("Error en createTaskRequest:", error.response?.data || error.message);
      throw error; // Lanza el error para que `createTask` lo capture
  }
};


export const updateTaskRequest = async (task) =>
  axios.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);

export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);