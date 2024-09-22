import Navbar from "../component/Navbar";

import Background from "../img/main1.jpg"
import Logo3 from "../img/logo/projectAction.png"
import Logo4 from "../img/logo/projectInnovate.png"
import ScrollToTopButton from "../component/ScrollToTopButton";
import {ProAction, ProInnovate, ProIntroduction} from "../store/IntroductionStore";
import AllBackground from "../img/background.png";

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

            <div className="relative px-16">
                <div
                    className="relative before:absolute after:absolute before:inset-y-0 after:inset-y-0 before:left-0 after:right-0 before:w-0.5 after:w-0.5 before:bg-gray-200 after:bg-gray-200"
                >
                    <div className="px-24">
                        {/*<div style={{textIndent: '2em'}} className="text-xl font-mono">*/}
                        {/*    {`${ProIntroduction[0].text}`}*/}
                        {/*</div>*/}

                        {ProIntroduction.map((item) => (
                            <>
                                <div className="flex items-center p-4">
                                    <div className="h-6 w-6 mr-4">
                                        <img src={item.logo} alt={item.title} className="h-full w-auto"/>
                                    </div>
                                    <div className="text-xl font-mono">
                                        {item.title}
                                    </div>
                                </div>
                                <div style={{textIndent: '2em'}} className="p-2 leading-relaxed">
                                    {item.text}
                                </div>
                            </>
                        ))}

                        <div className="flex items-center p-4">
                            <div className="h-6 w-6 mr-4">
                                <img src={Logo3} alt="logo3" className="h-full w-auto"/>
                            </div>
                            <div className="text-xl font-mono">三、项目实施</div>
                        </div>

                        <div className="pt-2 grid grid-cols-3 gap-4 ">
                            {ProAction.map((item, index) => (
                                <div key={index} className="relative group border-2 rounded py-20 mb-4">
                                    <div
                                        className="transition-opacity duration-300 ease-in-out absolute inset-0 bg-white p-4 border-2 shadow-lg flex flex-col justify-center items-center opacity-100 group-hover:opacity-0"
                                    >
                                        <div className="font-bold text-xl">{item.title}</div>
                                    </div>
                                    <div
                                        className="transition-opacity duration-300 ease-in-out absolute inset-0 bg-white p-4 border-2 shadow-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100"
                                        style={{top: 0, left: 0}}
                                    >
                                        {item.text.map((textItem, idx) => (
                                            <p key={idx} className="leading-relaxed mt-1">{textItem}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center p-4">
                            <div className="h-6 w-6 mr-4">
                                <img src={Logo4} alt="logo4" className="h-full w-auto"/>
                            </div>
                            <div className="text-xl font-mono">四、项目创新点</div>
                        </div>

                        <div className="pt-2 grid grid-cols-3 gap-4 ">
                            {ProInnovate.map((item, index) => (
                                <div key={index} className="relative group border-2 rounded py-20 mb-4">
                                    <div
                                        className="transition-opacity duration-300 ease-in-out absolute inset-0 bg-white p-4 border-2 shadow-lg flex flex-col justify-center items-center opacity-100 group-hover:opacity-0"
                                    >
                                        <div className="font-bold text-xl">{item.title}</div>
                                    </div>
                                    <div
                                        className="transition-opacity duration-300 ease-in-out absolute inset-0 bg-white p-4 border-2 shadow-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100"
                                        style={{top: 0, left: 0}}
                                    >
                                        {item.text.map((textItem, idx) => (
                                            <p key={idx} className="leading-relaxed mt-1">{textItem}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <ScrollToTopButton/>
        </>
    );
};

export default MainPage;