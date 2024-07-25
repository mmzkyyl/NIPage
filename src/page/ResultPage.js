import Navbar from "../component/Navbar";

import Background from "../img/result.png"

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

            <div className="px-12">
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
                <div className="text-2xl p-4">
                    成果展示
                </div>
            </div>
        </>
    );
};

export default ResultPage;