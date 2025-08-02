function Navbar(){
    return(
        <>
        <div className="flex justify-between items-center py-3  px-10">
            <img 
                src="/Images/logo-light-1.png" alt="logo"
                className="logo h-[50px] w-[208px] object-contain" />
            
            <ul className="bg-[#072439] text-white text-sm flex items-center justify-center gap-10 rounded-[52px] pl-5 pr-2 h-13 ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Bids</li>
                <li className="cursor-pointer">Contact us</li>
                <li className="cursor-pointer"><div className="flex gap-1 items-center justify-center bg-[#6BD126] rounded-[34px] py-1 px-2">Log in  <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-2xl"><img src="/Images/Arrow 1.png" alt=""
                className="h-2 w-2 object-contain" /></div></div></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;