import { React, useState } from "react";
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import "./VerticalGridBackground.css";

let squares = new Array(20).fill(0);

const VerticalGridBackground = (props) => {

    const [start, setStart] = useState(props.state);

    const ani = {
        initial: {
            opacity: 1
        },
         open: (i) => ({
            opacity: 1,
            transition: {duration: 2, delay: 0.05 * i}
        }),
        closed: (i) => ({
            opacity: 0,
            transition: {duration: 2, delay: 0.05 * i},
        })
    };
    
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

        let pixel = fisherYatesShuffle(Array.from(Array(amountPixels).keys()));

        for (let j = 0; j < pixel.length; j++) {
            pixel[j] = (<motion.div key={`${i}-${j}`} className='pixel' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}variants={ani} initial='initial' animate={start ? "closed" : "open"} custom={pixel[j]}></motion.div>);
        }
        return pixel;
    }

    return (
        <InView onChange={setInView} threshold={props.thres} key='VerticalGridBackground'>
            <div className='VerticalGridBackground'>
                {
                    squares.map( (_, i) => {
                        return <div key={`${i}`} className='column'>
                            {
                                pixelSetup(i*props.direction, props.r, props.g, props.b) 
                            }
                        </div>
                    })
                }
            </div>
        </InView>
    );
};

export default VerticalGridBackground;