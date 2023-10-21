import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from "../assets/banner1.png"

const Home = () => {
    return (
        <div className="bg-neutralSilver" id="home">
            <div className="h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl">
                <Carousel className="w-full mx-auto">
                    <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="mb-4 text-5xl font-semibold leading-snug text-neutralDGrey md:w-3/4">
                                Lessons and insights{" "}
                            <span className="leading-snug text-brandPrimary">
                                from 8 years
                            </span>
                            </h1>
                            <p className="mb-8 text-base text-neutralGrey">Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="mb-4 text-5xl font-semibold leading-snug text-neutralDGrey md:w-3/4">
                                Learn and Earn Money{" "}
                            <span className="leading-snug text-brandPrimary">
                                in 4 Months
                            </span>
                            </h1>
                            <p className="mb-8 text-base text-neutralGrey">Where to grow your business as a photographer: site or social media?</p>
                            <button className="btn-primary">Register</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;