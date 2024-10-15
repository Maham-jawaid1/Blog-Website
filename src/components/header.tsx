import Link from "next/link"
export default function Header (){
    return(
        <div className="bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <strong> <h1 className="text-emerald-950 align-centre"> Blogs</h1></strong> 
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-4">
                    <Link href="/" className="text-black hover:bg-emerald-950 hover:text-white rounded-lg p-2">Home</Link>
                    <Link href="/blog" className="text-black hover:bg-emerald-950 hover:text-white rounded-lg p-2">Blogs</Link>
                    <Link href="/about" className="text-black hover:bg-emerald-950 hover:text-white rounded-lg p-2">About</Link>
                    <Link href="/contact" className="text-black hover:bg-emerald-950 hover:text-white rounded-lg p-2">Contact Us</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}