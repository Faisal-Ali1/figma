function Banner(){
    return(
        <>
        <div className=" mt-30 ">
                <div className="border-b-4 border-[#6BD126] px-7 rounded-2xl">
                    {/* heading */}
                    <div className="flex justify-between  relative max-sm:flex-col-reverse">

                        {/* heading */}
                        <div className="w-150  max-sm:w-68 max-sm:mt-10 ">
                            <h1 className="font-semibold font text-6xl leading-20 max-sm:text-3xl max-sm:leading-10">Find Your Perfect <span className="text-[#6BD126]">Freelance</span> Quick and Easy </h1>
                            {/* heading-textInline-img */}
                            <img src="Images/wordpress_freelancing_101 1.png" alt="heading-img" className="absolute h-15 left-35 top-45 bottom-15 max-sm:relative max-sm:h-10 max-sm:top-[-35px]  max-sm:left-[130px]" />
                        </div>

                        <img src="Images/healthcare-img 1.png" className="h-80" alt="" />
                    </div>

                    {/* Search-box container */}
                    <div className="border mt-[-50px] w-120 h-14 flex items-center justify-center  bg-[#D9D9D966] rounded-[49px]">
                        {/* Select box */}
                        <select className="border-r pr-2">
                            <option value="All Categories">All Categories</option>
                            <option value="All Categories">All Categories</option>
                            <option value="All Categories">All Categories</option>
                            <option value="All Categories">All Categories</option>
                        </select>

                        {/* search-box */}
                        <div className="flex items-center">
                            <input
                                type="search"
                                placeholder="Search For Any Services"
                                className="px-2 w-70 h-10"
                            />
                            <div className="bg-[#6BD126] rounded-full p-1 flex items-center justify-center"><img src="Images/ic_round-search.png" alt="" className="h-6"/></div>
                        </div>
                    </div>

                {/* rating */}
                <div className="mt-20 mb-10 flex items-center">
                <div className="flex">
                    <div><img src="Images/gp-1 1.png" alt="" /></div>
                    <div className="relative left-[-20px]"><img src="Images/gp-2 1.png" alt="" /></div>
                    <div className="relative left-[-35px]"><img src="Images/gp-3 1.png" alt="" /></div>
                </div>
                <div className="mr-10">
                    <h5 className="text-2xl font-semibold">39M+</h5>
                    <p>Happy Customer</p>
                </div>

                <div >
                    <p><span className="font-semibold">4.9</span> rating</p>
                    <div className="flex">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    
                    <img src="Images/Vector.svg" alt="" />
                    </div>

                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Banner;