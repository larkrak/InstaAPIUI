import { styled } from "styled-components"
import { SlSocialInstagram } from 'react-icons/sl';
import { BiImages } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import FormHome from "../components/FormHome";

// import bg3 from '../assets/bg3.jpg'

const Home = () => {
    return (
        <Wrapper className="section-center">
            {/* <div className="img-container"><img style={{ maxHeight: "500px" }} src={bg3}></img></div> */}
            {/* background: linear-gradient(90deg, rgba(250,126,30,1) 0%, rgba(214,41,118,1) 35%, rgba(150,47,191,1) 100%); */}

            <div className="header-container">
                <header className="header-content">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis praesentium molestiae.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, sapiente inventore laboriosam veniam architecto adipisci eveniet doloribus harum tenetur, earum consequatur assumenda accusamus suscipit sint ab unde fugiat modi officiis!</p>
                </header>


                <FormHome></FormHome>
            </div>

            <div className="card-container">

                <div className="card">
                    <SlSocialInstagram style={{ color: "var(--orange)" }} />
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Consequuntur, officiis?</p>

                </div>

                <div className="card">
                    <BiImages style={{ color: "var(--pink)" }} />
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Consequuntur, officiis?</p>

                </div>

                <div className="card">
                    <AiOutlineSetting style={{ color: "var(--violet)" }} />
                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Consequuntur, officiis?</p>
                </div>


            </div>


        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 90vh;
    background-color: #F9F9F9;
    /* background-color: #8C31A2;
    .img-container{
        position: relative;
        

        img{
            position: absolute;
            top: 180px;
            right: 200px;
            scale: 1.3;
        }
    } */

    .header-container{
        padding: 4rem 0 4rem 0;
        background: linear-gradient(90deg, rgba(250,126,30,1) 0%, rgba(214,41,118,1) 35%, rgba(150,47,191,1) 100%); 
        color: white
    }

    .header-content{
        text-align: center;
        width: 60%;
        margin: auto;
        
        h1{
            margin-top: 3rem;
            margin-bottom: 2rem;
            font-size: 2rem;
        }
        p{
            margin-top: 3rem;
            margin-bottom: 2rem;
            width: 50%;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .card-container{
        display: flex;
        place-content: center;
        justify-content: space-around;
        margin-top: 3rem;
        .card{
            text-align: center;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: space-around;
            height: 150px;
            gap: 3;
            svg{
                font-size: 4rem;
                color: var(--clr-grey-3);
            }
        }
    }


`

export default Home