import React from 'react';

const Blog = () => {
    const blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/assets/blog1.png"},
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/assets/blog2.png"},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/blog3.png"}
    ]
    return (
        <div className='px-4 mx-auto my-12 lg:px-14 max-w-screen-2xl' id='faq'>
            <div className="mx-auto text-center md:w-1/2">
                <h2 className="mb-4 text-4xl font-semibold text-neutralDGrey">
                    Caring is the new marketing
                </h2>
                <p className="mx-auto mb-8 text-sm md:w-3/4 text-neutralGrey">
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lots more
                </p>
            </div>

            {/* all blogs */}
            <div className="grid items-center justify-between grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2">
                {
                    blogs.map( blog => <div key={blog.id} className='relative mx-auto mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className="relative mx-auto mb-12 cursor-pointer"/>
                        <div className='absolute left-0 right-0 px-4 py-8 mx-auto text-center bg-white rounded-md shadow-lg md:w-3/4 -bottom-12'>
                            <h3 className='mb-3 font-semibold text-neutralGrey'>{blog.title}</h3>
                            <div className="flex items-center justify-center gap-8">
                                <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Readmore
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className="inline-block ml-2">
                                <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F"/>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Blog;