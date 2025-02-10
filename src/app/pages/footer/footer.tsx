export default function Footer() {
    return (
       <footer className="text-center justify-center items-center text-sm md:text-xl flex flex-col gap-5 bg-gray-300 h-40">
            <div className="flex list-none gap-5 justify-center items-center">
                <li className="border-r-[1px] border-gray-500 pr-5 text-gray-500">link</li>
                <li className="border-r-[1px] border-gray-500 pr-5 text-gray-500">link</li>
                <li className="border-r-[1px] border-gray-500 pr-5 text-gray-500">link</li>
                <li className="border-r-[1px] border-gray-500 pr-5 text-gray-500">link</li>
            </div>
            <span className="text-[10px] md:text-lg text-gray-500">& 2025 AT Software, All rights reserved.</span>
       </footer>
    )
}