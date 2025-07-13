import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { todocontext } from "../Context/Context";
import { toast } from 'react-toastify';

const Create = () => {
    const [tasks, settasks] = useContext(todocontext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: ""
        },
        mode: 'onChange'
    });

    const TaskSubmitHandler = (data) => {
        // Check for duplicate tasks
        if (tasks.some(task => task.title.toLowerCase() === data.title.toLowerCase())) {
            toast.error('This task already exists');
            return;
        }

        toast.success('Task added successfully');

        settasks([...tasks, { title: data.title.trim(), completed: false }]);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(TaskSubmitHandler)}
            className="w-[35%] flex justify-between px-5 my-[2%]"
        >
            <input
                {...register('title', {
                    required: 'Task title cannot be empty',
                    maxLength: {
                        value: 100,
                        message: 'Task title cannot be longer than 100 characters'
                    }
                })}
                placeholder="write your next task..."
                className="px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700 "
                type="text"
            />
            {errors.title && (
                <p className="text-red-500 text-sm mt-1 font-medium tracking-wider border border-red-500 rounded-xl p-2">{errors.title.message}</p>
            )}
            <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600">
                <i className="ri-add-fill">+</i>
            </button>
        </form>
    );
};

export default Create;