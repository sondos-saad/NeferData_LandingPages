import Group from '../assets/images/Group_28572.webp'
// Fifth  Component directorsData
const FifthComponent = ({tit,para,bot}) =>(        
    <section className="fifth w-full  bg-slate-100 grid md:flex p-[2rem] md:gap-20 justify-center items-center">
        {/* Text Content container */}
        <div className=' md:w-[50%] text-center p-[2rem] mb-5'>
            <h1 className=' text-[40px] text-blue-900 mb-[40px] '> {tit} <span className=' text-blue-700'></span> </h1>
            <p className=' text-[20px] text-blue-800 mb-[30px] '> {para} </p>
            <a className=' text-white bg-blue-700 p-[15px] rounded-[10px] ' href=""> {bot} </a>
        </div>
        <img className=' rounded-[10px] md:w-[40%] ' src={Group} alt="Description" />
    </section>)

export default FifthComponent;
