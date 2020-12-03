import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
                className="header__logo"
                src="data:image/png;base64,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"
                alt=""
            />
            <IconButton>
                <ChatIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
