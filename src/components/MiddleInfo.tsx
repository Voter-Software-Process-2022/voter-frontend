import React from 'react'

const MiddleInfo = () => {
  return (
    <div
      id='vote-section'
      className=' lg:h-[80vh] xl:h-[90vh] 2xl:h[90vh] text-black sm:flex sm:flex-row md:flex justify-around bg-[#3850ba]  p-[4rem] '
    >
      <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[2rem] my-[5rem]'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            Want to keep in touch with the news?
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
          Go to this Thairath website now
        </p>
        <a
          href='https://www.thairath.co.th/tags/%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87'
          className='inline-flex items-center text-blue-600 hover:underline'
        >
          See the website
          <svg
            className='ml-2 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
            <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
          </svg>
        </a>
      </div>
      <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[2rem] my-[5rem]'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Chaiwut has submitted a resignation letter.
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          On November 25, 65, reporters reported that Mr. Chaiwut
          Thanakmanusorn, Minister of DES, and a list of MPs Palang Pracharath
          Party has decided to submit a resignation letter from a member of the
          House of Representatives By making a letter to the chairman of the
          House signed on 24 November 2022.
        </p>
        <a
          href='https://www.thairath.co.th/news/politic/2562600'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Read more
          <svg
            aria-hidden='true'
            className='ml-2 -mr-1 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </a>
      </div>
      <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[2rem] my-[5rem]'>
        <a href='#'>
          <img
            className='rounded-t-lg m-auto'
            src='https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5ya7VyvmUHNf3KWqTK8eSz6EMCsfrY11DEJi9ihEknFlNBfe3Hz.webp'
            alt=''
          />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {
                'Keep an eye on "Big Tu", the number 1 prime minister\'s candidacy'
              }
            </h5>
          </a>
          {/* <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p> */}
          <a
            href='https://www.thairath.co.th/news/politic/2562631'
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
            <svg
              aria-hidden='true'
              className='ml-2 -mr-1 w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MiddleInfo
