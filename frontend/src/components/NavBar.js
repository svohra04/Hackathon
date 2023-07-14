import { ReactComponent as Logo } from './media/address-book-solid.svg';
import './style/NavBar.css'



function NavBar() {

    function handleClickProfile() {
        alert("Clicked")
    }

    return (
        <nav className="navbar">
                <h1 className="navbar-logo">
                    <a href="/">Enterprise Directory <Logo className="logo" style={{color: "#ffffff"}}/></a>
                </h1>        
                <div className="menu-icon">
                    {/* <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> */}
                </div>
                <ul className={'nav-menu'}>
                    <li key={0}>
                        <span className='nav-links'>Predict Salary</span>
                    </li>
                    <li key={1} onClick={handleClickProfile}>
                        <span className='nav-links'>Profile</span>
                    </li>

                </ul>
            </nav>
    )
}

export default NavBar