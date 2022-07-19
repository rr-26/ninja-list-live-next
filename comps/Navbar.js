import Link from 'next/link'
import Image from 'next/image'



const navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/ninjaLogo.jpg" width={200} height= {150} />
            </div>
            <Link href = "/"><a>Home</a></Link>
            <Link href = "/About"><a>About</a></Link>
            <Link href = "/ninjas/"><a>Ninja Listing</a></Link>
        </nav>
        
    );
}
 
export default navbar;