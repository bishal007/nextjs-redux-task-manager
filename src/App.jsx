import React from 'react'
import { Provider } from 'react-redux'
import { Container, Typography, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { store } from './components/redux/store'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

const theme = createTheme()

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1" gutterBottom>
            Task Manager
          </Typography>
          <AddTask />
          <TaskList />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App