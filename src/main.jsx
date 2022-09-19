import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FocusScreen } from './04-useRef/FocusScreen'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { HooksApp } from './HooksApp'
import './index.css'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-useMemo/Memorize'
import { MemoHook } from './06-useMemo/MemoHook'
import { CallbackHook } from './06-useMemo/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* // <HooksApp />
    // <CounterApp /> useState
    // <CounterWithCustomHook /> useState
    // <SimpleForm /> useEffect
    //<FormWithCustomHook /> useEffect
    // <MultipleCustomHooks /> useFetch
    // <FocusScreen /> useRef
    // <Layout /> useLayoutEffect
    // <Memorize /> useMemo
    // <MemoHook /> useMemo
    // <CallbackHook /> useCallback
    // <Padre /> useCallback
    // <TodoApp /> useReducer */}
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
)
