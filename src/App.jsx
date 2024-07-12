// import { useState } from 'react'
import Sidebar from "./Components/Sidebar"
import Rightbar from "./Components/Rightbar.jsx"
 import  Feed from './Components/Feed.jsx'
 import Navbar  from "./Components/Navbar.jsx"
 import Add  from "./Components/Add.jsx"
 import { Box,createTheme,Stack, ThemeProvider } from "@mui/material"

import { useState } from "react"

// import './App.css'

function App() {
 const [mode,setMode]=useState("light")

  const darktheme=createTheme({
    palette:{
      mode:mode
    }
    
  })

  return (
    <ThemeProvider theme={darktheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
     <Navbar />
     <Stack style={{ marginTop:'60px'}} direction='row' spacing={2} justifyContent={"space-between"}>
    <Sidebar setMode={setMode} mode={mode}/>
    <Feed /> 
    <Rightbar/>
    </Stack> 
    <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App
