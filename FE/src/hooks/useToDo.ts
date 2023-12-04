import { useState, useEffect } from "react";
import { API } from "../libs/api";
import { ITaskList, ITask } from "../interfaces/taskList";
import mongoose from "mongoose";

export function useToDo() {
  const [task, setTask] = useState<ITask[]>([]);
  const [formToDo, setToDo] = useState<ITaskList>({
    description: "",
    status: false,
    category: "",
  });

  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([]);

  function updateCheckboxStates(tasks: ITask[]) {
    setCheckboxStates(tasks.map((task) => task.status || false));
  }



  function handleChange(fieldName: string, fieldValue: string) {
    if (fieldName === 'category') {
      // If the field is 'category', fieldValue is actually the ID
      setToDo((prevFormToDo) => ({
        ...prevFormToDo,
        [fieldName]: fieldValue,
      }));
    } else {
      // For other fields, treat fieldValue as the usual value
      setToDo((prevFormToDo) => ({
        ...prevFormToDo,
        [fieldName]: fieldValue,
      }));
    }
  }
  const [updateTodo, setUpdateTodo] = useState<ITaskList>({
    description: "",
    status: false,
    category: "",
  });


  function handleUpdateTodo(fieldName: string, fieldValue: string) {
    setUpdateTodo((prevUpdateTodo) => ({
      ...prevUpdateTodo,
      [fieldName]: fieldValue,
    }));
  }

  async function handleToDo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await API.post('/task', formToDo);
      console.log("A task was added!", response);
      // Optionally reset the form after submission
      setToDo({
        description: "",
        status: false,
        category: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      getTask()
    }
  }

  async function getTask() {
    try {
      const response = await API.get('/task');
      console.log(response.data.data);
      setTask(response.data.data);
      updateCheckboxStates(response.data.data);

    } catch (error) {
      console.error(error);
    }
  }

  async function updateStatus(id: any, index: any) {
    try {
      console.log('Updating status for task with ID:', id);
      const objectId = new mongoose.Types.ObjectId(id);
      console.log('Update payload:', { status: !updateTodo.status });
      const response = await API.patch(`/task/${objectId}`, { status: !checkboxStates[index] });
      console.log('Server response:', response.data);
      // setTask(response.data.data);
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      getTask();
    }
  }
  

  return {
    handleChange,
    handleToDo,
    formToDo,
    getTask,
    task,
    handleUpdateTodo,
    updateStatus,
    updateTodo,
    setUpdateTodo,
    checkboxStates,
    setCheckboxStates,
  };
}
