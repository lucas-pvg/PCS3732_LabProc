import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./button.css";

function Button(props) {
   const classes = "but " + props.classes;

  return (
      <motion.div 
         whileHover={{ scale: 1.1 }}
         onClick={ props.onClick }
         className={ classes }
      >
         <Link to={ props.to } className="link">
            <span>{ props.text }</span>
            <div className="img"></div>
         </Link>
      </motion.div>
  );
}

export default Button;
