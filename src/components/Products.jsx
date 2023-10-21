import React from 'react';
import aboutImg from '../assets/mobile-login.png';
import Maecenas from '../assets/maecenas.png'

const Products = () => {
    return (
        <div>
            {/* about text */}
            <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl" id='product'>
                <div className="flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row">
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="mx-auto md:w-3/5">
                        <h2 className="mb-4 text-4xl font-semibold text-neutralDGrey md:w-4/5">
                            How to design your site footer like we did
                        </h2>
                        <p className="mb-8 text-sm md:w-3/4 text-neutralGrey">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className="px-4 py-16 mx-auto lg:px-14 max-w-screen-2xl bg-neutralSilver" id='testimonial'>
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="md:w-1/3">
                        <img src={Maecenas} alt="" />
                    </div>

                    {/* stats */}
                    <div className="mx-auto md:w-2/3">
                        <div>
                            <p className="mb-8 text-sm leading-7 md:w4/5 text-neutralGrey">
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                            </p>
                            <h5 className="mb-2 text-xl font-semibold text-brandPrimary">
                                Tim Smith
                            </h5>
                            <p className="mb-8 text-base text-neutralGrey">British Dragon Boat Racing Association</p>
                            <div>
                                <div className="flex flex-wrap items-center gap-8">
                                    <img src="/src/assets/company1.png" alt="" className="cursor-pointer"/>
                                    <img src="/src/assets/company2.png" alt="" className="cursor-pointer"/>
                                    <img src="/src/assets/company3.png" alt="" className="cursor-pointer"/>
                                    <img src="/src/assets/company4.png" alt="" className="cursor-pointer"/>
                                    <img src="/src/assets/company5.png" alt="" className="cursor-pointer"/>
                                    <img src="/src/assets/company6.png" alt="" className="cursor-pointer"/>
                                    <div className="flex items-center gap-8">
                                        <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Meet all customers{" "}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className="inline-block ml-2">
                                        <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F"/>
                                        </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;