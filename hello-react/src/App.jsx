import TaskCard from "./TaskCard";

function App(){
  return(
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title="Do the dishes" aname="Puppy" duedate= "4.6.2025" />
        <TaskCard title="Make Chicken 65" aname="Mitu" duedate= "5.6.2025" />
      </div>
      <div>
        <h1>Completed</h1>
        <TaskCard title="Make Chicken Curry" aname="Mitu" duedate= "3.6.2025" />
        <TaskCard title="Make Chicken Biryani" aname="Puppy" duedate= "2.6.2025" />
      </div>
    </div>
  )
}

export default App;