import Navbar from "../component/Navbar";

import Background from "../img/main1.jpg"
import ScrollToTopButton from "../component/ScrollToTopButton";

const MainPage = () => {
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
                    项目简介
                </div>
            </div>

            <div className="px-12">
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
                <div className="text-2xl p-4">
                    项目简介
                </div>
            </div>

            <ScrollToTopButton/>
        </>
    );
};

export default MainPage;