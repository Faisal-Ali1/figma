import featuredImg from "../utils/featuredImg";

function FeaturedCategories(){
    return(
        <>
        <div className="text-center mt-30">
            <h2 className="text-3xl font-semibold mb-2">Featured Categories</h2>
            <p className="text-sm">Get some inspiration 86k+ skills</p>

            <div className=" flex justify-around mt-20">
                {
                    featuredImg?.map((item) => (
                        <div className=" p-3 rounded-4xl bg-[#ECECEC] text-center">
                            <img src={`Images/${item?.img}`} alt="" className=" h-70 w-82 bg-white rounded-4xl"/>
                            <h2 className="font-semibold text-xl mt-2 mb-1">{item?.heading}</h2>
                            <p>{item?.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default FeaturedCategories;