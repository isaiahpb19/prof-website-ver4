import { React, useState } from "react";
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import "./VerticalGridBackground.css";

let squares = new Array(20).fill(0);

const ani = {
    initial: {
        opacity: 0
    },
     open: (i) => ({
        opacity: 1,
        transition: {duration: 0, delay: 0.05 * i}
    }),
    closed: (i) => ({
        opacity: 0,
        transition: {duration: 0, delay: 0.05 * i}
    })
};


const GridBackground = (props) => {

    const [start, setStart] = useState(props.state);

    const setInView = (inView) => {
        if (inView) {
          setStart(1);
        }
    };

    const fisherYatesShuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    const pixelSetup = (i, r, g, b) => {
        const pixelSize = window.innerWidth * 0.05;
        const amountPixels = Math.ceil(window.innerHeight / pixelSize);

        let delay = fisherYatesShuffle(Array.from(Array(amountPixels).keys()));
        const pixel = new Array(amountPixels).fill(0);

        for (let j = 0; j < delay.length; j++) {
            pixel[j] = (<motion.div key={`${i}-${j}`} className='pixel' style={{backgroundColor: `rgb(${r},${g},${b})`}} variants={ani} initial='initial' animate={start ? "open" : "closed"} custom={delay[j] + i}></motion.div>);
        }
        return pixel;
    }

    return (
        <InView onChange={setInView} threshold={0.8} key='GridBackground'>
            <div className='GridBackground'>
                {
                    squares.map( (_, i) => {
                        return <div key={`${i}`} className='column'>
                            {
                                pixelSetup(i, props.r, props.g, props.b) 
                            }
                        </div>
                    })
                }
            </div>
        </InView>
    );
};

export default GridBackground;