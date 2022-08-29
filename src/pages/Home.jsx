import React from 'react'

const Home = () => {
  return (
    <main className='py-8 px-3'>
        <section className='bg-white py-4 px-4 my-5 rounded-md shadow-md'>
          <h2 className='text-2xl font-bold text-left  border-solid border-b-2 pb-1'>Button</h2>

          <button className='m-3 py-3 px-6 bg-violet-600 font-medium capitalize text-white rounded-full shadow-sm cursor-pointer hover:shadow-md hover:bg-violet-500 transition active:bg-violet-400 active:shadow-none'>button</button>
        
        </section>
    </main>
  )
}

export default Home