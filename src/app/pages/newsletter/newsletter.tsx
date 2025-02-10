export default function Newsletter() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center mt-32">
                <h1 className="text-lg font-bold md:text-3xl">Newsletter</h1>
                <p className="text-[8px] text-gray-400 w-3/4 md:text-lg">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
            </div>

            <form className="flex flex-col gap-5 w-full px-12 justify-center items-center mt-20">
                <input className="border-[1px] w-full md:h-[60px] md:text-lg h-10 rounded-md text-xs indent-2" type="email" name="" id="" placeholder="Email address" />
                <input className="border-[1px] w-full md:h-[60px] md:text-lg h-10 rounded-md text-xs indent-2" type="text" name="" id="" placeholder="Full name" />
                <button className="text-xs font-semibold md:text-base bg-gray-800 text-white p-3 w-full rounded-md">Subscribe</button>
            </form>

            <hr className="mt-32"/>
        </div>
    )
}