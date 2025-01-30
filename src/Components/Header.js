const Header=()=>{ // logo, about us search bar contact us
    return (
    <div className='header'>
        <div className='image-container'>
        <h1 className='logo'>Tomato.</h1>
        </div>
        <ul className='nav-right'>
        <li>About us</li>
        <li>Contact us</li>
        <li>🛒</li>
        </ul>
    </div>

    );
}
export default Header;