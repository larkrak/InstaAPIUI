import { styled } from 'styled-components'
import logo from '../assets/react.svg'
import { FaBars } from 'react-icons/fa'
import { useSearchContext } from '../context/search_context'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const { openSidebar } = useSearchContext();


    return (
        // <Wrapper className='section-center'>
        //     <div className='hide-content'>
        //         <img src={logo}></img>
        //         <a>about</a>
        //         <a>Nop se qyue</a>
        //         <a>Sisisi</a>
        //     </div>
        //     <button type='button' className='nav-toggle' onClick={openSidebar} >
        //         <FaBars />
        //     </button>
        //     <div className="login-container">
        //         <button className='btn'>Login</button>
        //         <button className='btn'>
        //             <p>Sign in</p>
        //         </button>
        //     </div>
        // </Wrapper>
        <Wrapper>
            <div className='nav-center section-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                    <button type='button' className='nav-toggle' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>

                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">No se que</Link>
                    </li>
                    <li>
                        <Link to="#">SISISISIIS</Link>
                    </li>
                </ul>
                <div className="login-container">
                    <button className='btn'>Login</button>
                    <button className='btn'>
                        <p>Sign in</p>
                    </button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    height: 10vh;
    display: flex;
    .nav-center{
        display: flex;
        align-content: center;
        align-items: center;
        
    }

    .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }


    .nav-header{
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 2rem;
        img{
            height: 60px;
        }
    }

    .nav-links{
        display: none;
    }
    
    .login-container{
        display: none;
        button{
            padding: 0.5rem 2rem;
            transform: 0.3s ease all;
        }
        button:nth-child(1){
            background-color: var(--yellow);
        }
        button:nth-child(1):hover{
            background-color: var(--yellow-opacity);
            color: black;
        }
        button:nth-child(2){
            background-color: transparent;
            p::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0.2em;
                background-color: var(--violet);
                opacity: 0;
                transition: opacity 300ms, transform 300ms;
                }
            p{
                overflow: hidden;
                display: block;
                position: relative;
                padding: 0.2em 0;

            }
            p::after{
                opacity: 1;
                transform: translate3d(-100%, 0, 0);
            }

            p:hover::after,
            p:focus::after{
                transform: translate3d(0, 0, 0);
            }
        }
    }


 @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-links{
        display: flex;
        flex: 1;
        flex-direction: row;
        list-style: none;
        align-content: center;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        
    }
    .nav-center{
        justify-content: space-between;
    }
    .login-container{
        display: block;
    }
    .nav-header{
        width: auto;
    }
    
}
/*
@media (max-width: 992px) {
    .hide-content {
      display: none;
    }
    .login-container{
        display: none;
    }
    
} */
`

export default Navbar