import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
    const isAuthentication = user !== null;

    return (
        <div className="header">
            <p className="logo">Room</p>
            { // 상단 헤더 바
                isAuthentication ?
                    <div className="inline">
                        <img src={user.picture} />
                        <p>{user.name}</p>
                    </div>
                    :
                    <div className="inline">
                        <p><Link to="/signin">로그인</Link>이 필요합니다.</p>
                    </div>
            }

        </div>
    );
}

export default Header;