import { useState, useEffect } from "react";
import { getTasks } from "../services/httpAPI";

export default function useGetTasks() {
  const [listTasks, setListTask] = useState([]);

  const fetchTasks = async () => {
    const response = await getTasks();
    setListTask(response);
  };

  useEffect(function () {
    fetchTasks();
  }, []);

  return { listTasks, setListTask };
}
