import React from "react";
import {AiOutlineCopyright} from "react-icons/ai";

import "./footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <span className="copyright"><AiOutlineCopyright/> 2023 - </span>
                <span className="copyright">Zero direitos reservados. Pode copiar sim.</span>
            </footer>
        </div>
    );
}

export default Footer;