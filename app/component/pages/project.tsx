import Link from "next/link"
import Image from "next/image"
import Atm from "@/app/component/Image/project/ATM-Machine.jpeg"
import Calculator from "@/app/component/Image/project/simple-calculator.png"
import Todo_app from "@/app/component/Image/project/todo-app.png"
import Currency from "@/app/component/Image/project/currency_converter.webp"
import Number_gussing_game from "@/app/component/Image/project/CLI-Number-Guessing.jpeg"
import Word_count from "@/app/component/Image/project/word-count.jpeg"
import Apple from "@/app/component/Image/project/apple.webp"


export default function Project(){
    return(
        <div>
            <div className="project" id="project">

<h1>My Project</h1>


<div className="projects-parts">
    
<div className="line-1">


<div className="project-1"><Link href={"https://github.com/shahzad006/ATM-Machine"}>

<Image
src={Atm}
alt="My Image"
width={540}
// height={300}
    />

</Link></div>



<div className="project-2">
<Link href={"https://github.com/shahzad006/simple.calculator"}>

<Image
src={Calculator}
alt="Calculator Project"
width={540}

    />

</Link>
</div>




<div className="project-3">

<Link href={"https://github.com/shahzad006/todo-app"}>

<Image
src={Todo_app}
alt="Calculator Project"
width={540}

    />

</Link>

</div>



</div>


<div className="line-2">




<div className="project-4">
<Link href={"https://github.com/shahzad006/Currency_converter"}>

<Image
src={Currency}
alt="Calculator Project"
width={540}

    />

</Link>
</div>





<div className="project-5">
<Link href={"https://github.com/shahzad006/CLI-Number-Guessing"}>

<Image
src={Number_gussing_game}
alt="Calculator Project"
width={540}

    />

</Link>


</div>


<div className="project-6">

<Link href={"https://github.com/shahzad006/Word-counter"}>

<Image
src={Word_count}
alt="Calculator Project"
width={540}

    />

</Link>
</div>



</div>






<div className="line-3">


<div className="project-7">
<Link href={"https://github.com/shahzad006/apple-clone"}>

<Image
src={Apple}
alt="Apple website"
width={540}

    />

</Link>
</div>


</div>

</div>











</div>
        </div>
    )
}