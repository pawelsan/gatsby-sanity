import React from 'react';
import facebook from "../../../images/f_logo_RGB-Blue_58.png";
import bip from "../../../images/bip.png";
import DarkModeToggler from "./darkmode-toggler";
import LargeFontToggler from "./largefont-toggler";
import styles from "../styles/header.module.css";

const RightSideWrapper = () => {
    return (
        <div className={styles.rightside_wrapper}>
            <a href="http://www.pcprzyrardow.naszbip.pl/" rel="noopener noreferrer" target="_blank">
                <img src={bip} alt="Logo bip" />
            </a>
            <a href="https://www.facebook.com/PowiatoweCentrumPomocyRodzinieZyrardow/" rel="noopener noreferrer" target="_blank">
                <img src={facebook} alt="Logo facebook" />
            </a>
            <DarkModeToggler />
            <LargeFontToggler />
        </div>
    );
}

export default RightSideWrapper;