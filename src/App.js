import React, { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import '../src/App.css'

import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {Navbar,Footer,Sidebar,ThemeSetting} from './components'
import { Ecommerce,Orders,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line,Calendar} from './pages'

import {useStateContext} from './contexts/ContextProvider'

const App = () => {
  
  const { activeMenu,setactiveMenu,themeSettings,setThemeSettings,currentColor,currentMode } = useStateContext()
  return (
    <div className={currentMode === 'Dark'?'dark': ''}>
      <Router>
         <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent position="TopCenter" content="Settings">
              <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white ' style={{borderRadius:'50%', background:currentColor}}
              onClick={()=>setThemeSettings(true)} >
                <FiSettings/>
              </button>

            </TooltipComponent>
          </div>
          {
            activeMenu?(<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
               
             <Sidebar/>
            </div>
            ):(<div className='w-0 dark:bg-secondary-dark-bg'>
             
             <Sidebar/>
            </div>)}
            <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-72':'flex-2'} `}>
             <div className='relative md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar/>
             </div>
           
            <div>
             {themeSettings && <ThemeSetting/>}
              <Routes>
                {/*dashboard*/}
                <Route path="/" element={<Ecommerce/>}/>
                <Route path="/ecommerce" element={<Ecommerce/>}/>
                
                {/*Pages*/}
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/employees" element={<Employees/>}/>
                <Route path="/customers" element={<Customers/>}/>

                 {/*apps*/}
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="/kanban" element={<Kanban/>}/>
                <Route path="/editor" element={<Editor/>}/>
                <Route path="/color-picker" element={<ColorPicker/>}/>

                 {/*charts*/}
                <Route path="/line" element={<Line/>}/>
                <Route path="/area" element={<Area/>}/>
                <Route path="/bar" element={<Bar/>}/>
                <Route path="/pie" element={<Pie/>}/>
                <Route path="/finacial" element={<Financial/>}/>
                <Route path="/color-mapping" element={<ColorMapping/>}/>
                <Route path="/pyramid" element={<Pyramid/>}/>
                <Route path="/stacked" element={<Stacked/>}/>

              </Routes>
            </div>
            </div>

          

           
         </div>
      </Router>
    </div>
   
  )
}

export default App
