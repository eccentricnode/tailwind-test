export default function Contact() {
    return(
        <div className="container my-20 mx-auto text-center">
            <div className="shadow-lg container rounded-lg py-6 pb-10 px-32">
            <h2 className="text-4xl text-slate-700 mb-6 font-bold underline underline-offset-4">Contact Me</h2>
                <form action="">
                    <div className="flex flex-wrap">
                        <label className="flex-1 mr-2">
                            <span className=" text-sm font-medium text-slate-700">Your Name</span>
                            <input type="text" value="Your Name"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                        </label>
                        <label className="flex-1">
                            <span className=" text-sm font-medium text-slate-700">Email</span>
                            <input type="text" value="Email"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                        </label>
                    </div>
                    <label className="">
                        <span className=" text-sm font-medium text-slate-700">Subject</span>
                        <input type="text" value="input a username"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            />
                    </label>

                    <label className="">
                        <span className=" text-sm font-medium text-slate-700">Message</span>
                        <textarea value="Write a message" rows={10}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            />
                    </label>
                </form>
            </div>
        </div>
    );
}