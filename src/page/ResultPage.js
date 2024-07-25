import Navbar from "../component/Navbar";

import Background from "../img/result.png"
import AllThoughts from "../store/MemoryStore";
import AllLinks from "../store/LinkStore";

const ResultPage = () => {
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
                        <div key={index}>
                            <div className="flex text-3xl p-4 font-mono mt-8">
                                {`${thought.title}`}
                            </div>
                            <div style={{ textIndent: '2em' }} className="text-xl font-thin">
                                {thought.memory}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-2/12 border-l border-gray-300 pl-4">
                    <div className="sticky top-0">
                        <h2 className="text-2xl font-bold mb-4">AI入口</h2>

                        <ul className="space-y-4">
                            {AllLinks.map((link, index) => (
                                <li>
                                    <a href={`${link.link}`} className="text-blue-500 text-xl hover:underline">
                                        {`${link.name}`}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ResultPage;