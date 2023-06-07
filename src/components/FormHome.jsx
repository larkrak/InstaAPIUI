import { styled } from "styled-components"
import { HiOutlineViewfinderCircle } from 'react-icons/Hi2';
import { BsFillArrowRightCircleFill } from 'react-icons/Bs'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/search_context";
// import axios from "axios";

const FormHome = () => {

    const [isShown, setIsShown] = useState(false);
    const [inputSearch, setInputSearch] = useState("");
    const navigate = useNavigate();

    const { sendUserToContext } = useSearchContext()

    const focusedInput = () => {
        if (inputSearch === "") setInputSearch("@shizukablyat")
        setIsShown(true)
    }

    const handleSubmit = () => {
        if (inputSearch !== "@" && inputSearch.length > 1) {
            sendUserToContext(inputSearch)
            navigate("/search")
        }
    }


    return (
        <Wrapper className="section-center">

            <div className="content">
                <HiOutlineViewfinderCircle className={isShown ? 'rotation' : ''}></HiOutlineViewfinderCircle>

                <input type="text"
                    placeholder="Introduce el @ de la cuenta"
                    onMouseEnter={focusedInput}
                    onMouseLeave={() => setIsShown(false)}
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                />
                <button className="button" >
                    <Link to={inputSearch !== "@" && inputSearch.length > 1 ? '/search' : ''} onClick={handleSubmit}>Buscar</Link>
                    <BsFillArrowRightCircleFill onClick={() => handleSubmit()}></BsFillArrowRightCircleFill>
                </button>
            </div>
            {/* <button className="button"><Link to="/search" target="_blank">Buscar</Link>
                <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
            </button> */}
            {/* <div className="container">
                <button href="#" className="button">Buscar</button>
            </div> */}



        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap:3rem;



    .rotation{
        -webkit-transform: rotateZ(360deg);
        -moz-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
    }

    .content{
        background-color: white;
        width: 50%;
        /* margin: auto; */
        display: flex;
        align-content: center;
        align-items: center;
        svg{ 
            font-size: 42px;
            -webkit-transition: 0.6s ease-out;
            -moz-transition:  0.6s ease-out;
            transition:  0.6s ease-out;
            color: var(--blue);;
        }
        svg:hover{
            -webkit-transform: rotateZ(360deg);
            -moz-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
        input{
            border: none;
            padding: 15px;
            flex: 1;
            outline: none;
            color: #727272;
        }
        input:focus{
            outline: none;    
        }

    }

    .button {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 1rem;
        padding: .1rem 3.25rem;
        border-radius: 1rem;
        color: black;
        font-size: 1.2rem;
        transition: all .3s;
        position: relative;
        overflow: hidden;
        z-index: 1;
        svg{
            color: var(--violet);
        }
    }
    

    .button::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: var(--blue-opacity); */
        background-color: white;
        border-radius: 1rem;
        z-index: -2;
        opacity: 1;
    }

    .button::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: var(--blue);;
        opacity: 1;
        transition: all .3s;
        border-radius: 1rem;
        z-index: -1;
    }

    .button:hover {
        color: #fff; 
        svg{
            color: white;
        }
    }
    .button:hover::before {
        width: 100%;
    }
    
    

`

export default FormHome