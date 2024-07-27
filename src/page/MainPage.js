import Navbar from "../component/Navbar";

import Background from "../img/main1.jpg"
import ScrollToTopButton from "../component/ScrollToTopButton";
import {ProAction, ProInnovate, ProIntroduction} from "../store/IntroductionStore";

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
                {/*<div style={{textIndent: '2em'}} className="text-xl font-mono">*/}
                {/*    {`${ProIntroduction[0].text}`}*/}
                {/*</div>*/}

                {ProIntroduction.map((item) => (
                    <>
                        <div className="text-xl p-4 font-mono">
                            {`${item.title}`}
                        </div>
                        <div style={{textIndent: '2em'}} className="p-2 leading-relaxed">
                            {item.text}
                        </div>
                    </>
                ))}

                <div className="text-xl p-4 font-mono">三、项目实施</div>
                <div className="grid grid-cols-3 gap-4 ">
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

                <div className="text-xl p-4 font-mono">四、项目创新点</div>
                <div className="grid grid-cols-3 gap-4 ">
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

            <ScrollToTopButton/>
        </>
    );
};

export default MainPage;