import Link from "next/link"
import Image from "next/image"
import Mypic from "@/app/component/Image/team/Picsart_24-06-08_09-18-07-792.jpg"
import team from "@/app/component/Image/team/salma.jpg"
import team_member from "@/app/component/Image/team/pic.jpg"


export default function Team(){
    return(
        <div>
            <div className="team" id="team">
  <h1 className="team-h1">Meet our team</h1>
  <p className="team-p">Thes people work on making our product best.</p>

  <div className="peoples">

    
  <div className="people-1">

<Image className="pics"
    
    src={team}
    alt="friend"
    width={330}
   
    />
  

  <div className="people-1-name">
    <h2>Salma Farhad</h2>
    <p>Cyber Security Engineer</p>
    <div className="icons">
      <Link href={"https://www.facebook.com/profile.php?id=100087493656194"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></Link>

      <Link href={"https://github.com/SalmaFarhad"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></Link> 

       <Link href={"https://www.linkedin.com/in/salma-farhad-8b3a26300/"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></Link> 
      </div>
  </div>
</div>



<div className="people-2">

<Image  className="pics"
    
    src={Mypic}
    alt="Your Image"
    width={348}
   
    />
  

  <div className="people-2-name">
    <h2>M Shahzad</h2>
    <p>Wed Developer</p>
    <div className="icons">
    <Link href={"https://www.facebook.com/profile.php?id=100092978561744"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></Link>

    <Link href={"https://github.com/SalmaFarhad"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></Link> 

    <Link href={"https://www.linkedin.com/in/m-shahzad-9b86892b9/"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></Link> 
      </div>
  </div>
</div>



 

  <div className="people-3">

  <Image  className="pics"
     
      src={team_member}
      alt="Your Image"
      width={310}
      
      
    />
    

    <div className="people-3-name">
      <h2>Sohaib Khan</h2>
      <p>Graphic Designer</p>

      <div className="icons">

      <Link href={"https://www.facebook.com/share/15G5JBqh85/"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></Link>


      <Link href={"https://www.instagram.com/sohaibkhan0067/profilecard/?igsh=MWczb3Q2OXJ4N2l3Mg=="}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></Link> 

  
      </div>    

    </div>



  </div>


</div>


</div>

        </div>
    )
}