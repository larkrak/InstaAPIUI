import React, { useState } from "react";
import { styled } from "styled-components";
// import { useSearchContext } from "../context/search_context"
import { useEffect } from "react";
import { useSearchContext } from "../context/search_context";
import axios from "axios";
import { useUserContext } from "../context/user_context";
import { obj } from "../utils/sample_data";
import LazyLoad from "react-lazy-load";
import ImageWithPreload from "../components/ImageWithPreload";
// import Instagram from 'instagram-web-api';
import { FiDownloadCloud } from "react-icons/Fi";

const UserSearched = () => {
  const [debugg, setDebugg] = useState(false);

  const {
    user_search,
    startFollowersSearch,
    is_user_searching,
    endFollowersSearch,
  } = useSearchContext();

  const { loadFollowers, user_followers, user_following, user_info } =
    useUserContext();
  const context = useUserContext();

  console.log("context", context);

  // const client = new Instagram({ username: 'shizukablyat', password: 'Piliputa2@contrasena#pelota' }, { language: 'es-CL' })

  const getFollowers = () => {
    axios
      .post(
        "http://127.0.0.1:5000/getFollowers",
        { username: user_search },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => {
        endFollowersSearch();
        loadFollowers(resp.data);
      })
      .catch((error) => {
        endFollowersSearch();
        console.log(error);
      });
  };

  useEffect(() => {
    if (!debugg) {
      getFollowers();
      startFollowersSearch();
    } else {
      loadFollowers(obj);
      endFollowersSearch();
    }
  }, []);

  return (
    <Wrapper>
      <section>
        {debugg === true && (
          <div
            // className={`${is_user_searching ? "loader show" : "loader"}`}
            className={`${is_user_searching ? "" : "loader"}`}
          ></div>
        )}
        {debugg === false && (
          <div
            className={`${is_user_searching ? "loader show" : "loader"}`}
            // className={`${is_user_searching ? "" : "loader"}`}
          ></div>
        )}
        {/* change 'is_user_searching' to false in debugg mode */}
        {!is_user_searching && (
          <div className="followers_content section-center">
            <div className="user_content">
              <div className="user_content-img">
                <LazyLoad threshold={0.99}>
                  {/* <ImageWithPreload
                  alt="img perfil"
                  src={`http://localhost:5000/${
                    !debugg ? user_search.split("@")[1] : "shizukablyat"
                  }/${user_search.split("@")[1]}.png`}
                ></ImageWithPreload> */}

                  <ImageWithPreload
                    alt="img perfil"
                    src={`http://localhost:5000/shizukablyat/shizukablyat.png`}
                  ></ImageWithPreload>
                </LazyLoad>
                <FiDownloadCloud
                  style={{ width: 40, height: 40 }}
                ></FiDownloadCloud>
              </div>
              <div className="user_content-info">
                <h1>{user_search}</h1>
                <div className="user_content-media">
                  <p>
                    <p>Posts</p>
                    <span>{user_info.posts_count}</span>
                  </p>
                  <p>
                    <p>Followers</p>
                    <span>{user_info.follower_count}</span>
                  </p>
                  <p>
                    <p>Following</p>
                    <span>{user_info.following_count}</span>
                  </p>
                </div>
                <span>{user_info.biography}</span>
              </div>
            </div>
            <div className="column_data">
              <div>
                <h1 className="title">Followers</h1>
                {Object.entries(user_followers).map(([key, value]) => (
                  <div className="follower_info">
                    <div className="follower_pic">
                      <LazyLoad width={100} threshold={0.99}>
                        <ImageWithPreload
                          alt="img perfil"
                          src={`http://localhost:5000/${
                            !debugg ? user_search.split("@")[1] : "shizukablyat"
                          }/${user_followers[key].username}.png`}
                        ></ImageWithPreload>
                      </LazyLoad>
                    </div>

                    <div key={key}>
                      <h1>{user_followers[key].full_name}</h1>
                      <p>{`@${user_followers[key].username}`}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="title">Following</h1>
                {Object.entries(user_following).map(([key, value]) => (
                  <div className="follower_info">
                    <div className="follower_pic">
                      <LazyLoad width={100} threshold={0.99}>
                        <ImageWithPreload
                          alt="img perfil"
                          src={`http://localhost:5000/${
                            !debugg ? user_search.split("@")[1] : "shizukablyat"
                          }/${user_following[key].username}.png`}
                        ></ImageWithPreload>
                      </LazyLoad>
                    </div>

                    <div key={key}>
                      <h1>{user_following[key].full_name}</h1>
                      <p>{`@${user_following[key].username}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 80vh;
  background-color: white;

  .followers_content {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 4rem;

    .user_content {
      width: 100%;
    }

    .column_data {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .title {
        font-size: 24px;
        padding: 0 0 20px 0;
      }

      div {
        flex: 1/2;
      }
    }
  }
  .loader {
    position: absolute;
    top: -500%;
    left: -500%;
    border: 10px solid var(--pink);
    border-top: 10px solid var(--blue);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }

  .follower_info {
    display: flex;
    justify-content: start;
    align-content: center;
    align-items: center;
    transform: scale(0);
    animation: 0.2s loadInItems ease forwards;

    p {
      font-weight: 400;
    }

    /* img {
      border-radius: 50%;
      border-style: solid;
      border-width: 10px;
      border-image: linear-gradient(45deg, rgb(0, 143, 104), rgb(250, 224, 66))
        1;
      background-clip: padding-box;
      padding: 10px;
      box-shadow: 0 3px 9px black, inset 0 0 9px white;
    }

    img::after {
      position: absolute;
      top: -2px;
      bottom: -2px;
      left: -2px;
      right: -2px;
      border-image: linear-gradient(45deg, rgb(0, 143, 104), rgb(250, 224, 66));
      content: "";
      z-index: -1;
      border-radius: 50px;
    } */

    .follower_pic img {
      width: 80px;
      position: relative;
      border: 4px solid transparent;
      border-radius: 50%;
      background: linear-gradient(
        90deg,
        rgba(250, 126, 30, 1) 10%,
        rgba(214, 41, 118, 1) 80%,
        rgba(150, 47, 191, 1) 100%
      );
      background-clip: padding-box;
      padding: 3px;
      animation: 0.2s fadeIn ease forwards;

      /* just to show box-shadow still works fine */
    }
  }

  .LazyLoad {
    opacity: 0;
    transition: all 1.5s ease-in-out;
  }

  .is-visible {
    opacity: 1;
  }

  .show {
    top: 50%;
    left: 50%;
  }

  .user_content {
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-content: center;
    align-items: center;

    .user_content-info span {
      font-weight: 400;
    }
    .user_content-img {
      display: flex;
    }
    .user_content-img img {
      border-radius: 100%;
    }
    .user_content-img svg {
      font-size: 18px;
      position: relative;
      top: 105px;
      right: 45px;
      color: white;
      padding: 5px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      background: linear-gradient(
        90deg,
        rgba(250, 126, 30, 1) 0%,
        rgba(214, 41, 118, 1) 35%,
        rgba(150, 47, 191, 1) 100%
      );
      border-radius: 50px;
    }

    .user_content-media {
      display: flex;
      flex-direction: row;
      gap: 4rem;
      p {
        flex: 1;
      }
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loadInItems {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    from {
      display: none;
      opacity: 0;
      transform: scale(0);
    }
    to {
      display: block;
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default UserSearched;
