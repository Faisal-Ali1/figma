import Banner from "../Components/banner";
import FeaturedCategories from "../Components/featuredCategories";
import FeaturedTask from "../Components/featuredTask";
import Poster from "../Components/poster";

function HomePage() {
    return (
        <>  
        <div className="px-10">
            <Banner/>
            <FeaturedCategories/>
            <FeaturedTask/>
            <Poster/>
            </div>
        </>
    )
}

export default HomePage;