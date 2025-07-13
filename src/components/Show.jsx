import { useContext } from "react";
import { todocontext } from "../Context/Context";
import { toast } from 'react-toastify';

const Show = () => {
    const [tasks, settasks] = useContext(todocontext);

    const DeleteHandler = (i) => {
        let isValid = false;
        if (!tasks[i].completed) {
            isValid = confirm("Do you really Want to delete this Task ?");
        }

        if (isValid || tasks[i].completed) {
            toast.success('Task deleted successfully');
            settasks(tasks.filter((task, index) => index !== i));
        }
    };

    const CompleteTaskToggle = (i) => {
        const copyTasks = [...tasks];
        copyTasks[i].completed = !tasks[i].completed;
        settasks(copyTasks);
    };

    let tasksrender = (
        <h1 className="text-center text-orange-500 font-extrabold text-2xl">
            No pending Tasks...
        </h1>
    );
    if (tasks.length > 0) {
        tasksrender = tasks.map((task, index) => {
            return (
                <li
                    key={index}
                    className="mb-5 flex justify-between items-center border rounded-xl p-5"
                >
                    <div className="flex items-center">
                        <div
                            onClick={() => CompleteTaskToggle(index)}
                            className={`${task.completed ? "bg-green-500" : "border"
                                } mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                        ></div>
                        <h1
                            className={`${task.completed && "line-through"
                                } text-2xl font-extrabold text-yellow-100`}
                        >
                            {task.title}
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i
                            onClick={() => DeleteHandler(index)}
                            className="ri-delete-bin-3-line">
                            Delete
                        </i>
                    </div>
                </li>
            );
        });
    }
    return <ul className="list-none w-[35%] ">{tasksrender}</ul>;
};

export default Show;