import React, {FC} from "react";
import './header.css';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { MdLeaderboard, MdSettings } from 'react-icons/md';

const Header = () => {
    return (
        <div className="header-container">
            <BsQuestionCircleFill className="question-icon icons"/>
            <div className="heading">
                Wordle
            </div>
            <div className="header-right-side">
                <MdLeaderboard className="icons" />
                <MdSettings className="icons icon-right" />
            </div>
        </div>
    )
};

export default Header;