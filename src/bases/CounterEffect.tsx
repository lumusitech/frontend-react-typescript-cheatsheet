import { useEffect, useRef, useState } from "react";
import gsap from 'gsap'

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);

    const MAX_COUNT = 10;

    const handleClick = () => {
        // setCounter(prev => (prev < MAX_COUNT) ? prev + 1 : MAX_COUNT);
        setCounter(prev => Math.min(prev + 1, MAX_COUNT))
    }

    useEffect(() => {
        if (counter < MAX_COUNT) return;

        console.log(
            '%cSe llegó al valor máximo',
            `font-weight: bold; 
             background-color: tomato; 
             color: white; 
             padding: 4px; 
             order-radius: 3px`
        );

        const timeline = gsap.timeline();

        timeline
            .to(counterElement.current, { y: -10, duration: .3, ease: 'ease.out' })
            .to(counterElement.current, { y: 0, duration: .7, ease: 'bounce.out' })

    }, [counter])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}
