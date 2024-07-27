import Navbar from "../component/Navbar";

import Background from "../img/team1.jpg"
import ScrollToTopButton from "../component/ScrollToTopButton";

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

            <div className="px-12">
                <div className="text-2xl p-4">
                    团队成员
                </div>
                <div className="text-2xl p-4">
                    团队成员
                </div>
                <div className="text-2xl p-4">
                    团队成员
                </div>
                <div className="text-2xl p-4">
                    团队成员
                </div>
                <div className="text-2xl p-4">
                    团队成员
                </div>
                <div className="text-2xl p-4">
                    团队成员
                </div>
                <div className="text-2xl p-4">
                    团队成员
                </div>
                <div className="text-2xl p-4">
                    团队成员
                </div>
            </div>

            <ScrollToTopButton/>
        </>
    );
};

export default TeamPage;