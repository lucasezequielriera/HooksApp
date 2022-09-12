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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp />
    <CounterApp /> useState
    <CounterWithCustomHook /> useState
    <SimpleForm /> useEffect
    <FormWithCustomHook /> useEffect */}
    {/* <MultipleCustomHooks /> useFetch */}
    <FocusScreen />
  </React.StrictMode>
)
