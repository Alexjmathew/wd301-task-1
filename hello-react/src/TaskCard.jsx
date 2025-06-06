import './TaskCard.css'

const TaskCard = (props) => {
  return (
    <div className="TaskItem">
      <h2 className="font-semibold">{props.title}</h2>
      <p>Due/Completed on: {props.duedate}</p>
      <p>Assignee: {props.aname}</p>
    </div>
  )
}

export default TaskCard;
