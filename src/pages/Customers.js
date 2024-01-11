import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids'
import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components'

const customers = () => {
  return (
    <div className='m-2  p-2  bg-white rounded-3xl '>
      <Header category="Page" title="Customers"/>
      <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} editSettings={{ allowEditing:true, allowDeleting:true}}>
        <ColumnsDirective>
        {customersGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>

        ))}
        </ColumnsDirective>
        <Inject services={[Sort,Filter,Page,Edit,Toolbar,Selection]}/>
      </GridComponent>
    </div>
  )
}

export default customers