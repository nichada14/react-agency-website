import React from 'react';

const Service = () => {
    const services = [
        {id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/icons/icon1.png"},
        {id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/icons/icon2.png"},
        {id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/icons/icon3.png"}
    ]
    return (
        <div className="px-4 py-16 mx-auto md:px-14 max-w-screen-2xl" id='service'>
            <div className="my-8 text-center">
                <h2 className="mb-2 text-4xl text-neutralDGrey font-semiblod">
                    Our Clients
                </h2>
                <p className="text-neutralDGrey">
                    We have been working with some Fortune 500+ clients
                </p>

                {/* company logo */}
                <div className="flex flex-wrap items-center justify-between gap-8 my-12">
                    <img src="/src/assets/company1.png" alt="" />
                    <img src="/src/assets/company2.png" alt="" />
                    <img src="/src/assets/company3.png" alt="" />
                    <img src="/src/assets/company4.png" alt="" />
                    <img src="/src/assets/company5.png" alt="" />
                    <img src="/src/assets/company6.png" alt="" />
                    <img src="/src/assets/company7.png" alt="" />
                </div>
            </div>

            {/* service card */}
            <div className="mx-auto mt-20 text-center md:w-1/2">
                <h2 className="mb-3 text-4xl text-neutralDGrey font-semiblod">
                    Manage your entire community in a single system
                </h2>
                <p className="text-neutralDGrey">
                    Who is Nextcent suitable for?
                </p>
            </div>

            {/* card */}
            <div className="grid grid-cols-1 gap-12 mx-auto mt-14 lg:grid-cols-3 md:grid-cols-2 md:w-11/12">
                {
                    services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                                <img src={service.image} alt="" className="-ml-5"/>
                            </div>
                            <h4 className="px-2 mb-2 text-2xl font-bold text-neutralDGrey">{service.title}</h4>
                            <p className="text-sm text-neutralDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>

            
        </div>
    );
};

export default Service;