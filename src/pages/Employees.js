import React from 'react'
import { employeesData,employeesGrid } from '../data/dummy'
import {GridComponent,ColumnsDirective,ColumnDirective ,Toolbar,Page,Search,Inject} from '@syncfusion/ej2-react-grids'


import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-2  p-2  bg-white rounded-3xl '>
      <Header category="Page" title="Employees"/>
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width="auto">
        <ColumnsDirective>
        {employeesGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>

        ))}
        </ColumnsDirective>
        <Inject services={[Search,Page,Toolbar ]}/>
      </GridComponent>
    </div>
  )
}

export default Employees