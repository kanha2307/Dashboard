import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoDotFill} from 'react-icons/go'
import { Stacked,Pie,Button,SparkLine } from '../components'
import { earningData,SparklineAreaData,ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className=' flex justify-between items-center'>
            <div className=''>
              <p className='font-bold text-gray-700'>Earnings</p>
              <p className=' text-2xl'>$73897.56</p>
            </div>

          </div>
          <div className='mt-6'>
            <Button color="white"
            bgColor={currentColor}
            text="Download"
            borderRadius= "10px"
            size="md">

            </Button>

          </div>

        </div>
        <div className='flex m-3 flex-wrap  justify-center gap-1 items-center '>
          {
            earningData.map((item)=>(
              <div key={item.title} className='bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-36 p-4 pt-9 rounded-lg'>
                <button type='button' style={{color:item.iconColor,backgroundColor:item.iconBg}}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}

                  </span>
                  <span className={`text-sm ml-2 text-${ item.pcColor } `} >{item.percentage}</span>
                </p>
                <p className='texr-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
              </div>
            ))
          }
          

        </div>

      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 '>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue updates
            </p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoDotFill/></span>
                <span>Expenses</span>
              </p>
              <p className='flex items-center gap-2 text-green-500 hover:drop-shadow-xl'>
                <span><GoDotFill/></span>
                <span>Budget</span>
              </p>

            </div>

          </div>

          <div className=' flex flex-wrap justify-center items-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p className='mt-8'>
                  <span className='text-3xl font-semibold'>$93,569</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer text-white bg-green-400 text-xs rounded-full ml-3'>23%</span>
                </p>
                <p className='mt-1 text-gray-500'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$56,435</span>
                  
                </p>
                <p className='mt-1 text-gray-500'>Expense</p>
              </div>
              <div className='mt-5 '>
                <SparkLine 
                currentColor="blue"
                id="line-sparkline"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color="blue"
                />

              </div>
              <div className='mt-10'>
                <Button color='white'
                bgColor={currentColor}
                text="Download Report"
                borderRadius="10px">

                </Button>
              </div>

            </div>
          
          <div className='mt-10 '>
            <Stacked width="320px" height="360px"/>
          </div></div>

        </div>
        
      </div>

    </div>
  )
}

export default Ecommerce