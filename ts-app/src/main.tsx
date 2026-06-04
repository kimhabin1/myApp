import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MyApp from '../components/MyApp.tsx'
// import MyAppTs from '../components/MyAppTs.tsx'
import TodoList from '../components/todo/TodoList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MyApp />
    <MyAppTs /> */}
    <TodoList></TodoList>
  </StrictMode>,
)
