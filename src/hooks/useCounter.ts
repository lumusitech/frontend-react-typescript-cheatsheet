import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap'

export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState(5);

    const elementToAnimate = useRef<any>(null);

    const timeline = useRef(gsap.timeline());


    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount))
    }

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;

        timeline.current
            .to(elementToAnimate.current, { y: -10, duration: .3, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: .7, ease: 'bounce.out' })
    }, [])

    useEffect(() => {
        timeline.current.play(0);
    }, [counter])

    return {
        counter,
        elementToAnimate,
        handleClick
    }

}