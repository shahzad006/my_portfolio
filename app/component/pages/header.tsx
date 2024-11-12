import Image from "next/image"
import Pic from "@/app/component/Image/header/FB_IMG_1715084266138-removebg-preview.png"
import Link from "next/link"






export default function Header(){
    return(
        <div>
               <header>

<div className="header-left">
  <h1>I'm <span>M Shahzad</span></h1>
  <p>I'm Web Developer</p>
  <button><Link href={"#project"}></Link> Portfolio</button>
</div>



<div className="header-right">

<Image src={Pic} alt="My Image" width={540} />

</div>



</header>






{/* ********************************* */}


<header className="responsive-header">




<div className="responsive-header-left">

<Image src={Pic} alt="My Image" width={300} />

</div>




<div className="responsive-right">
  <h1>I'm <span>M Shahzad</span></h1>
  <p>I'm Web Developer</p>
  <button><Link href={"#project"}></Link> Portfolio</button>
</div>







</header>





        </div>
    )
}