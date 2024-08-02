import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { removeTask, toggleTask } from './redux/tasksSlice'


const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id} secondaryAction={
          <IconButton edge="end" onClick={() => dispatch(removeTask(task.id))}>
            <DeleteIcon />
          </IconButton>
        }>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <ListItemText primary={task.title} />
        </ListItem>
      ))}
    </List>
  )
}

export default TaskList