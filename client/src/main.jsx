import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "@/components/ui/sonner"
import { store } from '../store/store.js'
import { Provider } from "react-redux"
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CookiesProvider>
      <App />
      </CookiesProvider>
      <Toaster />
    </Provider>
  </StrictMode>,
)
