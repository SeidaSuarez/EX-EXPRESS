import { useForm } from "react-hook-form";
import { useTasks } from "../context/taskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                setValue('title', task.title);
                setValue('description', task.description);
                setValue('date', dayjs.utc(task.date).format('YYYY/MM/DD'))
            }
        }
        loadTask();
    }, [getTask, params.id, setValue]);

    const onSubmit = handleSubmit((data) => { 
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format(): dayjs.utc(data.date).format(),
        }

        if (params.id) {
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid);
        }
        navigate('/tasks');
    });

    return (
      
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Título</label>

                    <input type="text" placeholder="Título"
                        {...register('title')}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        autoFocus
                    />

                    <label htmlFor="description">Descripción</label>
                    <textarea name="" id="" rows="3" placeholder="Descripción"
                        {...register('description')}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>

                    <label htmlFor="date" className="text-white">Fecha</label>
                    <input type="date" {...register('date')}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />

                    <button className="w-full bg-cyan-700 text-white px-4 py-2 rounded-md my-2">Guardar</button>
                </form>
            </div>
        </div>
    );
}

export default TaskFormPage;