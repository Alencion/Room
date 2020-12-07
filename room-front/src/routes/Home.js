import React from "react";

const Home = ({ user }) => {

    return (
        <div className="hoom">
            <p>Public Room</p>
            <ul>

            </ul>
            <p>Private Room</p>
            {user !== null ?
                <ul>
                    <li>
                        <Link to={/generation}>+</Link>
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <p>로그인이 필요합니다.</p>
                    </li>
                </ul>
            }
        </div>
    );
}

export default Home;