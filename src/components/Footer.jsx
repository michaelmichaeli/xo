import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return <div className="footer flex align-center justify-center full">
        {/* <p> */}
        <CopyrightIcon />
        <p>2021 Designed and developed by Michael Michaeli</p>
        <a href="https://github.com/michaelmichaeli/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/michael-michaeli-a620b9b0/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        {/* </p> */}
    </div>;
};

export default Footer;