import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button, Box } from '@mui/material'
import { addTask } from './redux/tasksSlice'

const AddTask = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(addTask({ id: Date.now(), title, completed: false }))
      setTitle('')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="New Task"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained">Add</Button>
    </Box>
  )
}

export default AddTask