import React from 'react'
import{ MdOutlineDone} from 'react-icons/md'

const CardDetails = () => {
  return (
    <div className=" w-screen  p-10  ">
        <h1 className="text-center text-5xl mb-5"> More Details </h1>
        <div className="bg-sky-100 rounded-3xl p-4 mb-5 grid md:grid-cols-3">
            <div>
                <h4 className="text-lg tracking-wider  text-slate-600 mb-2">Standerd</h4>
                <h1 className="text-6xl  tracking-wider text-bold ">Free</h1>
                <span className=" inline-block mb-4">always</span>
                <div className="bg-sky-500 p-2 w-3/5 lg:w-1/2  mb-2 text-center rounded-l-full border-2 border-solid border-sky-500 text-white hover:text-black hover:bg-white  duration-500 ">
                    <button className="text-lg ">Create Account</button>
                </div>
            </div>
            <div className="mt-5">
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-lg text-bold">AI-powered email filter</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-lg text-bold">Snack-sized company insights</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className=" tracking-wide text-gray-700 text-lg text-bold">SaaS product discovery</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDone className="text-sky-500 text-2xl"/>
                        <p className="tracking-wide text-gray-700 text-lg text-bold">Vendor assessment checklist</p>
                    </div>
                      
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Customizable 'My Company' page</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">No adds or paid placement</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className="text-lg tracking-wide text-gray-700 text-lg text-bold ">Hustle-free hosting in global instance</p>
                </div>
            </div>
        </div>
        <div className="bg-sky-200 rounded-3xl p-4 mb-5 grid md:grid-cols-3">
            <div>
                <h4 className="text-lg tracking-wider  text-slate-600 mb-2">Self-hosted</h4>
                <h1 className="text-6xl  tracking-wider text-bold ">Free</h1>
                <span className=" inline-block mb-4">always</span>
                <div className="bg-sky-500 p-2 w-3/5 lg:w-1/2   mb-2 text-center rounded-l-full border-2 border-solid border-sky-500 text-white hover:text-black hover:bg-white  duration-500 ">
                    <button className="text-lg ">Try Now</button>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">All features of Standard plus:</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Full data protection of your environment.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Compatible with on-prem, private & public cloud.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className="tracking-wide text-gray-700 text-lg text-bold">Step-by-step documentation & instructions.</p>
                </div>
                
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Integration with your existing OpenAI account.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Audit log & reports of extracted insights.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className="text-lg tracking-wide text-gray-700 text-lg text-bold ">Access to upgrades & new features at your timeline.</p>
                </div>
            </div>
        </div>
        <div className="bg-sky-100 rounded-3xl p-4 mb-2 grid md:grid-cols-3">
            <div>
                <h4 className="text-lg tracking-wider  text-slate-600 mb-2">Enterprise</h4>
                <h1 className="text-6xl  tracking-wider text-bold ">$ 5.99</h1>
                <span className=" inline-block mb-4">per user per month</span>
                <div className="bg-sky-500 p-2 w-3/5 lg:w-1/2  mb-2 text-center rounded-l-full border-2 border-solid border-sky-500 text-white hover:text-black hover:bg-white  duration-500 ">
                    <button className="text-lg ">Purchase Now</button>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">All features of Standard plus:</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Full data protection & privacy.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Dedicated & isolated instance in our cloud.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className="tracking-wide text-gray-700 text-lg text-bold">All-in solution with no overhead.</p>
                </div>
                
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Access to 24/7 product support.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className=" tracking-wide text-gray-700 text-lg text-bold">Audit log & reports of extracted insights.</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MdOutlineDone className="text-sky-500 text-2xl"/>
                    <p className="text-lg tracking-wide text-gray-700 text-lg text-bold ">Immediate access to latest features.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetails
