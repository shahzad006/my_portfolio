
import Navbar from "./component/pages/navbar";
import Header from "./component/pages/header";
import Services from "./component/pages/services";
import Project from "./component/pages/project";
import Team from "./component/pages/team";
import Testimoials from "./component/pages/testimoials";
import Contact from "./component/pages/contact";
import Footer from "./component/pages/footer";













export default function home() {




  return (
    <div>

      {/* *************** Navbar ******************** */}

      
      <Navbar />
      

      {/* *************** Header ******************** */}
      <Header />

      {/* *************** Services ******************** */}
      <Services />

      {/* *************** Project ******************** */}
      <Project />

      {/* *************** Team ******************** */}
      <Team />


      {/* *************** Testimoials ******************** */}
      <Testimoials/>


      {/* *************** Contact ******************** */}
      <Contact />

      {/* *************** footer ******************** */}
      <Footer /> 
    </div>
  );
}
