import Navbar from "../component/Navbar";

import Background from "../img/team1.jpg"
import ScrollToTopButton from "../component/ScrollToTopButton";
import AllTeamers from "../store/TeamStore";
import AllBackground from "../img/background.png";

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

            <div
                className="fixed inset-0 z-0 w-full h-full"
                style={{
                    backgroundImage: `url(${AllBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1,
                }}
            ></div>

            <div className="p-6 flex justify-center items-center">
                <div className="grid grid-cols-3 gap-x-24 gap-y-16">
                    {AllTeamers.map((item, index) => (
                        <div key={index} className="relative w-60 h-60">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full rounded-full object-cover object-top"
                            />
                            <div
                                className="rounded-full absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                            >
                                <p className="text-white text-center text-xs">{item.intro}</p>
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