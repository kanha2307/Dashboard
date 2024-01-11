import React,{createContext,useContext,useState} from 'react'


const StateContext = createContext()

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}
export const ContextProvider = ({children})=>{
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)
    const handleClick = (clicked)=>{
        setisClicked({...initialState,[clicked]:true})
    }
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode, setcurrentMode] = useState('Light')
    const setMode =(e)=>{
       setcurrentMode(e.target.value)
       localStorage.setItem('themeMode',e.target.value)
       setThemeSettings(false)
    }
    
    const setColor =(color)=>{
       setcurrentColor(color)
       localStorage.setItem('colorMode',color)
       setThemeSettings(false)
    }
    const [themeSettings, setThemeSettings] = useState(false)
    
    return (
        <StateContext.Provider value={{activeMenu,setactiveMenu,isClicked,setisClicked,handleClick,screenSize,setscreenSize,currentColor,currentMode,
        themeSettings,setThemeSettings,setColor,setMode}}>
          {children}
        </StateContext.Provider>
    )
}
export const useStateContext = ()=> useContext(StateContext)