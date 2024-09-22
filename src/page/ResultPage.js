import Navbar from "../component/Navbar";

import Background from "../img/result.png"
import AllThoughts from "../store/MemoryStore";
import {AllLinks} from "../store/LinkStore";
import {AllMasterLinks} from "../store/LinkStore"
import ScrollToTopButton from "../component/ScrollToTopButton";
import {useState} from "react";

const ResultPage = () => {
    const [ifMaster, setIfMaster] = useState(false);

    const toggleMode = () => {
        setIfMaster(prev => !prev); // 切换 ifMaster 的值
    };

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
                <div className="absolute bottom-0 left-0 p-16 font-blod text-black text-6xl">
                    成果展示
                </div>
            </div>

            <div className="h-6"></div>

            <div className="flex">
                <div className="px-12 mb-8 w-10/12 flex flex-col">
                    {AllThoughts.map((thought, index) => (
                        <>
                            <div className="border-2 rounded p-2">
                                <div key={index}>
                                    <div className="flex justify-center text-xl p-4">
                                        {`${thought.title}`}
                                    </div>
                                    <div style={{textIndent: '2em'}} className="p-2 leading-relaxed">
                                        {thought.memory}
                                    </div>
                                </div>
                            </div>
                            <div className="h-8"></div>
                        </>
                    ))}
                </div>

                <div className="w-2/12 border-l border-gray-300 pl-4">
                    <div className="sticky top-20">
                        <div>
                            <h2 className="text-xl font-bold mb-4 flex-row inline-block">AI入口</h2>
                            <button
                                className="px-4 text-blue-400 inline-block"
                                onClick={toggleMode}
                            >
                                切换模式({ifMaster ? '专家' : '普通'})
                            </button>
                        </div>

                        <ul className="space-y-2">
                            {(ifMaster ? AllMasterLinks : AllLinks).map((link) => (
                                <li>
                                    <a href={`${link.link}`} className="text-blue-500 hover:underline">
                                        {`${link.name}`}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <ScrollToTopButton/>
        </>
    );
};

export default ResultPage;