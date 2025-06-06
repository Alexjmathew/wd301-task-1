import './TaskCard.css'

const TaskCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Completed on: {props.duedate}</p>
      <p>Assignee: {props.aname}</p>
    </div>
  )
}

export default TaskCard;