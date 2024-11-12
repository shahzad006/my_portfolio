import Link from "next/link"






export default function Navbar(){
    return(
        <div>
             <nav>

<div className="logo">
  <h1>CreDesign</h1>
</div>

<div className="nav-bar">
  <ul>

    <li> <Link href={"#"}>HOME</Link></li>
    <li> <Link href={"#services"}>SERVICES</Link></li>
    <li> <Link href={"#project"}>PROJECT</Link></li>
    <li> <Link href={"#team"}>TEAM</Link></li>
   
    
  </ul>
</div>

<div className="contact">

  <ul>
  <li> <Link href={"#contact"}> <b> Contact Us</b></Link></li>
  </ul>

</div>

</nav>






{/* ******************************* responsive ******************************* */ }

<div className="responsive-navbar">


<div className="responsive-logo">
  <h1>CreDesign</h1>
</div>


<div className="responsive-nav">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
</div>





</div>








        </div>
    )
}