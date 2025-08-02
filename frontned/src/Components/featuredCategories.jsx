import featuredImg from "../utils/featuredImg";

function FeaturedCategories(){
    return(
        <>
        <div>
            <h2>Featured Categories</h2>
            <p>Get some inspiration 86k+ skills</p>

            <div className="border h-20">
                {
                    featuredImg?.map((item) => (
                        <div>
                            <img src={`Images/${item}`} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default FeaturedCategories;