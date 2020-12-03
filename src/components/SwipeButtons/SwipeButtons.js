import React from 'react';
import "./SwipeButtons.css";
import IconButton from '@material-ui/core/IconButton';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import StarsIcon from '@material-ui/icons/Stars';
import ReplayIcon from '@material-ui/icons/Replay';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize='large' />
            </IconButton>

            <IconButton className="swipeButtons__left">
                <ThumbDownIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__star">
                <StarsIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__right">
                <ThumbUpIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__lightening">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
