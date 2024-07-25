import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const Navbar = () => {
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState('');

    // useEffect(() => {
    //     setCurrentPage("main");
    // }, [])

    useEffect(() => {
        const hash = window.location.hash;
        const parts = hash.split('/');
        const currentPageName = parts[parts.length - 1];
        // alert(currentPageName);
        setCurrentPage(currentPageName);
    }, [location.hash]);

    return (
        <>
            <nav className="fixed top-0 w-full bg-gradient-to-b from-black to-black/0 text-white py-6 z-50">
                <div className="flex justify-between">
                    <div className="flex text-4xl font-mono px-16 text-center">
                        先贤智脑
                    </div>

                    <div className="flex justify-around list-none m-0 p-0">
                        <NavLink
                            to="/main"
                            className={`px-4 text-xl transition-colors duration-300 ease-in-out ${currentPage === 'main' ? 'text-amber-300' : 'text-white hover:text-amber-300'}`}
                            onClick={() => setCurrentPage('main')}
                        >
                            项目概况
                        </NavLink>
                        <NavLink
                            to="/team"
                            className={`px-4 text-xl transition-colors duration-300 ease-in-out ${currentPage === 'team' ? 'text-amber-300' : 'text-white hover:text-amber-300'}`}
                            onClick={() => setCurrentPage('team')}
                        >
                            团队组成
                        </NavLink>
                        <NavLink
                            to="/result"
                            className={`px-4 text-xl transition-colors duration-300 ease-in-out ${currentPage === 'result' ? 'text-amber-300' : 'text-white hover:text-amber-300'}`}
                            onClick={() => setCurrentPage('result')}
                        >
                            成果展示
                        </NavLink>
                        <NavLink
                            to="/help"
                            className={`px-4 text-xl transition-colors duration-300 ease-in-out ${currentPage === 'help' ? 'text-amber-300' : 'text-white hover:text-amber-300'}`}
                            onClick={() => setCurrentPage('help')}
                        >
                            帮助说明
                        </NavLink>
                    </div>
                </div>


            </nav>
        </>
    );
};

export default Navbar;