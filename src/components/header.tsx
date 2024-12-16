import Link from "next/link";

export default function Header(){
    return(
        <div className="header-nav">
        <h2 className="header-title">Cloud Corp</h2>
        <div className="header-menu">
            <Link href='/'>Home</Link>
            <Link href='/performance'>Performance</Link>
            <Link href='/reliability'>Reliability</Link>
            <Link href='/scale'>Scale</Link>
        </div>
        </div>
    )
}