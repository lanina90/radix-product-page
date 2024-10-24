import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import {Container, Theme} from "@radix-ui/themes";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Theme
     accentColor="mint"
     grayColor="gray"
     scaling="100%"
   >
     <App />
   </Theme>
  </StrictMode>,
)