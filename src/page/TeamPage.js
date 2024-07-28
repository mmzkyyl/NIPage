import Navbar from "../component/Navbar";

import Background from "../img/team1.jpg"
import ScrollToTopButton from "../component/ScrollToTopButton";
import AllTeamers from "../store/TeamStore";

const TeamPage = () => {
    return (
        <>
            <Navbar/>

            <div className="relative">
                <img
                    src={Background}
                    alt="Background"
                    className="flex w-full"
                    style={{height: '70vh', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)'}}
                ></img>
                <div className="absolute bottom-0 left-0 p-16 font-blod text-white text-6xl">
                    成员介绍
                </div>
            </div>

            <div className="h-6"></div>

            <div className="p-6">
                <div className="grid grid-cols-3 gap-12 px-44">
                    {AllTeamers.map((item, index) => (
                        <div key={index} className="relative w-full max-w-md">
                            <img src={item.img} alt={item.title} className="w-full h-auto" style={{height: '60vh'}}/>
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                <p className="text-white text-center">{item.intro}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ScrollToTopButton/>
        </>
    );
};

export default TeamPage;