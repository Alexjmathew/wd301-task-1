import TaskCard from "./TaskCard";

const tasks = [
  { id: 1, title: "Do the dishes", aname: "Puppy", duedate: "4.6.2025", done: false },
  { id: 2, title: "Make Chicken 65", aname: "Mitu", duedate: "5.6.2025", done: false },
  { id: 3, title: "Make Chicken fry", aname: "Mitu", duedate: "3.6.2025", done: true },
  { id: 4, title: "Make mutton curry", aname: "Puppy", duedate: "2.6.2025", done: true }
];

function App() {
  const pendingTasks = tasks.filter(task => !task.done);
  const doneTasks = tasks.filter(task => task.done);

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Pending</h1>
        {pendingTasks.length > 0 ? (
          pendingTasks.map(task => (
            <TaskCard key={task.id} title={task.title} aname={task.aname} duedate={task.duedate} />
          ))
        ) : (
          <p className="text-gray-500">No pending tasks!</p>
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Done</h1>
        {doneTasks.length > 0 ? (
          doneTasks.map(task => (
            <TaskCard key={task.id} title={task.title} aname={task.aname} duedate={task.duedate} />
          ))
        ) : (
          <p className="text-gray-500">No done tasks!</p>
        )}
      </div>
    </div>
  );
}

export default App;
