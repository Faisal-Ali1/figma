import { featuredTask } from "../utils/featuredImg";

function FeaturedTask(){
    return(
        <>
        <div className="mt-30">
            <h1 className="text-3xl font-semibold mb-10 text-center">Featured Task</h1>
            <div className="mt-20">
                {
                    featuredTask?.map(((item , index) => (
                        <div className={` flex justify-center mb-15 ${ index%2 !== 0 ? 'flex-row-reverse' :  ""}`}>
                            <img src={`Images/${item?.img}`} alt="" className="h-130 "/>
                            <div className={`flex flex-col justify-center ${index%2 !== 0 ?  "items-start": "items-end"} gap-7  w-150`}>
                                <h3 className="text-5xl leading-14 font-semibold w-100">{item.heading}</h3>
                                <div>
                                    <p className="w-100">{item.para}</p>
                                <button className="bg-[#6BD126] text-white w-30 rounded-2xl py-1 mt-5">Join now</button>
                                </div>
                            </div>
                        </div>
                    )))
                }

            </div>
        </div>
        </>
    )
}

export default FeaturedTask;