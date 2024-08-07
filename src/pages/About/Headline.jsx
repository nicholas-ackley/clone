import React from 'react'
import { useRef } from "react";
import { forwardRef } from 'react';

import './AboutAnimations.css'
const Headline = ({ text}, ref) => {
  return (
    <div>
        <div className="testing1">

        <h2 ref={ref}>{text}</h2>
    </div>

    </div>
  )
}

export default forwardRef(Headline)
