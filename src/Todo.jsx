import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const Todo = () => {
    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header />
            <Create />
            <Show />
        </div>
    )
}

export default Todo