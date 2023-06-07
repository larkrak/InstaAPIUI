import { styled } from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import { useSearchContext } from '../context/search_context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSearchContext();

  return (
    <Wrapper>

      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img className='logo' src={logo} alt='coding addict' />
          <button className='close-btn'>
            <FaTimes onClick={closeSidebar} />
          </button>
        </div>

        <ul className='links'>
          <li><Link><p>Home</p></Link></li>
          <li><Link><p>About</p></Link></li>
          <li><Link><p>SISISI</p></Link></li>
          <li><Link><p>ayyy dulamao</p></Link></li>
          <div className='login-container'>
            <li>
              <Link>
                <p>Login</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Sign in</p>
              </Link>
            </li>
          </div>
        </ul>

      </aside>

    </Wrapper>
  )
}


const Wrapper = styled.aside`
    text-align: center; 
  
    .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    
    img{
            height: 60px;
        }
  }
   .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color:  hsl(22, 31%, 52%);
    transition: 0.3s ease all;
    cursor: pointer;
    color: var(--yellow);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color:  var(--yellow-opacity);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: black;
    transition: 0.3s ease all;
    p{
      background-color: #ffffff9e;
      border-radius: 10px;
      width: auto;
      padding: 1rem 2rem 1rem 2rem;
      display: inline-block;
    }
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
  }

   .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: 0.3s ease all;
    transform: translate(-100%);
    z-index: -1;
    border: 1px solid black;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    background: linear-gradient(90deg, rgba(250,126,30,1) 0%, rgba(214,41,118,1) 35%, rgba(150,47,191,1) 100%); 

  }

  .login-container{
    
    li a{
      transform: 0.3s ease all; 
      background-color: var(--yellow-opacity);
      color: black;
      display: block;
    }
}
  

   @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

`


export default Sidebar