import { Link } from "react-router-dom"


function Explore() {


  return (
    <div className="bg-white hidden lg:block w-full mx-10">

      <div className="card bg-blue-800 shadow-xl">

        <div className="card-body items-center text-center px-2 py-2">

              <h2 className="card-title text-white align-middle py-2">Browse Listings</h2>
           
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        <div className='card shadow-mid compact side bg-base-100'>
          <div className=' flex-row items-center spac-x-4 card-body'>
            <div>
              <div className='avatar'>
                <div className='rounded-full shadow w-14 h-14'>
                  <img src='https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80' alt='Profile' />
                </div>
              </div>


            </div>
            <div>
              <h2 className='card-title'>House Title</h2>
              <Link className='text-base-content text-opacity-40' to={`/`}>Visit House</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}

export default Explore
