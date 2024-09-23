import Background from "../img/result.png"
import Background1 from "../img/main1.jpg"
import Background2 from "../img/team1.jpg"
import {useEffect, useState} from "react";

const RollingPic = () => {
    const images = [Background, Background1, Background2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return(
        <>
            <div className="overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full object-cover transition duration-500 ease-in-out"
                    style={{height: '70vh', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)'}}
                />
            </div>

            {/* 指示器部分 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}  // 点击事件
                        className={`w-4 h-4 rounded-full cursor-pointer transition ${
                            index === currentIndex
                                ? "bg-gray-500"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                    ></div>
                ))}
            </div>
        </>
    );
}

export default RollingPic;