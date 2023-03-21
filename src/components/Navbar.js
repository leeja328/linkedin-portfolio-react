import './Navbar.css';
import profile_pic from '../images/IMG_6332.jpg';


function Navbar() {
    return (
        <>
        <div class='nav'>
            <img id='profile_pic' src={profile_pic} placeholder='image'></img>
            <a href='/'>About</a>
            <a href='#middle'>Projects</a>
            <a href='#footer'>Contact</a>
        </div>
        </>
    );
}

export default Navbar;