import Navbar from "../component/Navbar";

import Background from "../img/help.jpg"

const HelpPage = () => {
    return (
        <>
            <Navbar/>

            <div className="relative">
                <img
                    src={Background}
                    className="flex w-full"
                    style={{height: '70vh', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)'}}
                ></img>
                <div className="absolute bottom-0 left-0 p-16 font-blod text-black text-6xl">
                    帮助说明
                </div>
            </div>

            <div className="px-12">
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
                <div className="text-2xl p-4">
                    帮助说明
                </div>
            </div>
        </>
    );
}

export default HelpPage;