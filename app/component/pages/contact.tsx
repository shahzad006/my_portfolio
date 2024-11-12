

export default function Contact(){
    return(


        <div>

             {/* *************** Contact ******************** */}



<form id="contact">


<h1>My Contact</h1>
<h2>I WANT TO HEAR FROM YOU</h2>


<div className="contact-sides">


<div className="contact-left">


<input type="text" className="name" required placeholder="Your Name" />  
<input type="email" className="email" required placeholder="Your Email" />   <br />
<input type="text" className="number" required placeholder="Your phone" />    
<input type="text" className="subject" required placeholder="Subject" />    <br />
<textarea className="message" name="message" id="" placeholder="Message" rows={4}></textarea>

<button>Send Message</button>

</div>








</div>












</form>


        </div>
       
    )
}