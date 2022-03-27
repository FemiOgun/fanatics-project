/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import React from "react";

// import logo from '../public/images/fanteractlogo.png'


function MyApp({ Component, pageProps }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);
  return (
    <div className="text-white">

    <header class="fixed top-0 w-full clearNav z-50">
    <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-between p-3 md:p-1">
        <a
          href="/"
          class="flex text-3xl text-white font-medium mb-4 md:mb-0"
        > 
        <div className='myImage'></div><span className='ml-3 mt-3'>FANTERACT</span>
        </a>
        
      </div>
      <div
        className={
          "md:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
          <Link href="/create-nft">
          <a class="mr-5 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Mint/Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
          <a class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
          <a class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Dashboard
            </a>
          </Link>
          <div className="relative">
            <button
              type="button"
              className="
                 group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                "
              onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
            >
              <span className="tr04">Coming Soon</span>
              <svg
                className={
                  flyer === true
                    ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                    : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              onMouseLeave={() => setFlyer(false)}
              className={
                flyer
                  ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              }
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                  <a
                    href="/videorooms"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                  >
                    <div className="ml-4">
                      <p className="text-base font-medium text-white">
                        Video Rooms with Livepeer
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Interact with your favourite content creators!
                      </p>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                  >
                    <div className="ml-4">
                      <p className="text-base font-medium text-white">
                        Leaderboards
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Check your ranking in Master Collector Programme (Win Prizes)
                      </p>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                  >
                    <div className="ml-4">
                      <p className="text-base font-medium text-white">
                        Creator DAO Membership
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <a
          href="/"
          rel="noopener noreferrer"
          target="_blank"
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"

        >
          Sign Up
        </a>
        <a
          data-v-54e46119=""
          rel="noopener noreferrer"
          target="_blank"
          className="pl-7 invisible rounded-lg md:visible"
        >
         Login
        </a>
      </div>
    </div>
  </header>
  

  <section class="text-gray-600 body-font">
  <div class="max-w-5xl pt-52 pb-24 mx-auto">
    <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
      Join Fanatics now...
    </h1>
    <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-400 text-center">
    Premium Sports/Football NFT & Collectible marketplace & social platform dedicated 
      <br />
      to fans' creative nature and cultivating emerging and exciting ways they engage 
      <br />
      with eachother, favourite players, favourite teams, influencers and sports brands.      
   </h2>
    <div className="ml-6 text-center">
      <a
        className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
        href="/"
      >
        <div className="flex text-lg">
          <span className="justify-center">NFT Marketplace</span>
        </div>
      </a>
      <a
        className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
        href="/videorooms"
      >
        <div className="flex text-lg">
          <span className="justify-center">Join Video Rooms with Livepeer</span>
        </div>
      </a>
    </div>
  </div>
  <div className="container flex flex-col items-center justify-center mx-auto text-gray-400">

  </div>
  


 
</section>

  <div className='mt-20 text-black'>
    <Component {...pageProps} />

    </div>
  
  

  </div>
  )
  
  
}

export default MyApp

