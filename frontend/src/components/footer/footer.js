import React from "react";
import {AiOutlineCopyright} from "react-icons/ai";

import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <span className="copyright"><AiOutlineCopyright/> 2023</span>
            </footer>
        </div>
    );
}

export default Footer;