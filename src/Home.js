import './Home.css';
import Navbar from './components/Navbar';
import project1 from './images/Screenshot 2023-01-31 at 1.21.22 PM.png'
import project2 from './images/Screenshot 2023-02-21 at 8.37.27 PM.png'


function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className="Home">
      <h1>Welcome to my portoflio!</h1>
      <h3>I am a software developer who is excited to use my talents and skills that I've learned to build and create websites. This desire to build from scratch has always been with me and I can truly say it is a passion of mine. I feel I can contribute greatly to any company and will work well with a team or on my own. I am dedicated and hard-working and will see through my work until its completion.</h3> 
      <h3>I have been programming for over 6 months now developing skills in python, javascript, css, and html. I also have created websites in react and flask. I am familiar with working with no coding websites and have helped a business develop their website. I've also done pro-bono projects with non-profits during my 6 months of learning. </h3>
      <h3>I value are a collaborative working environment and thrive in empowers me to aim high and supports me to reach those goals. </h3>
    </div>
    <div id='middle' className='middle'>
      <h1>Projects</h1>
      <img id='project1' src={project1}></img>
      <img id='project2' src={project2}></img>
    </div>
    <div id='footer' className='footer'>
      <h1>Contact</h1>
      <a>Email: leeja328@gmail.com</a>
      <h3>LinkedIn: </h3>
      <h3>Github: </h3>
    </div>
    </>
  );
}

export default Home;
