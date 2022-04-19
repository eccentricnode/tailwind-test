export default function Contact() {
    return(
        <div className="container my-20 mx-auto ">
            <div className="shadow-lg container rounded-lg py-6 pb-10 px-32">
            <h2 className="text-center text-4xl text-slate-700 mb-10 font-bold underline underline-offset-4">Contact Me</h2>
                <form action="">
                    <div className="flex flex-wrap">
                        <label className="flex-1 mr-2">
                            <span className=" text-sm font-medium text-slate-700"></span>
                            <input placeholder="Your Name"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 hover:drop-shadow"
                            />
                        </label>
                        <label className="flex-1">
                            <span className=" text-sm font-medium text-slate-700"></span>
                            <input placeholder="Email"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 hover:drop-shadow"
                            />
                        </label>
                    </div>
                    <div className="mt-5">
                        <label className="">
                        <span className="text-sm font-medium text-slate-700"></span>
                        <input placeholder="Subject"
                            className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 hover:drop-shadow"
                            />
                        </label>
                    </div>
                    <div className="mt-5">
                        <label className="">
                            <span className=" mt-3 text-sm font-medium text-slate-700"></span>
                            <textarea placeholder="Write a message" rows={10}
                                className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-500
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 hover:drop-shadow"
                                />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}