import Navbar from "../component/Navbar";
import RollingPic from "../component/RollingPic";

import ScrollToTopButton from "../component/ScrollToTopButton";
import AllTeamers from "../store/TeamStore";
import AllBackground from "../img/background.png";
import {useState} from "react";

const TeamPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <Navbar/>

            <div className="relative">
                <RollingPic/>

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
                <div className="grid grid-cols-4 gap-x-24 gap-y-16">
                    {/* 前4张图片，每行4列 */}
                    {AllTeamers.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="relative w-60 h-80 border-2 border-gray-300 p-1 flex flex-col items-center"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="w-32 h-32 mb-2">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full rounded-full object-cover object-top"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                <p
                                    className={`text-gray-600 transition duration-500 ease-in-out ${
                                        hoveredIndex === index ? 'text-sm' : 'text-lg'
                                    }`}
                                >
                                    {hoveredIndex === index ? item.intro : item.introShort}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* 后3张图片，每行3列，居中显示 */}
                    <div className="col-span-4 flex justify-center">
                        <div className="grid grid-cols-3 gap-x-24 gap-y-16">
                            {AllTeamers.slice(4, 7).map((item, index) => (
                                <div
                                    key={index + 4}
                                    className="relative w-60 h-80 border-2 border-gray-300 p-1 flex flex-col items-center"
                                    onMouseEnter={() => setHoveredIndex(index + 4)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="w-32 h-32 mb-2">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full rounded-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                        <p
                                            className={`text-gray-600 transition duration-500 ease-in-out ${
                                                hoveredIndex === index + 4 ? 'text-sm' : 'text-lg'
                                            }`}
                                        >
                                            {hoveredIndex === index + 4 ? item.intro : item.introShort}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="h-6"></div>
            <ScrollToTopButton/>
        </>
    );
};

export default TeamPage;