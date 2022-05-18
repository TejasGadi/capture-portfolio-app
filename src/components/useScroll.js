// Scroll animation
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = ({ thresholdValue }) => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: thresholdValue });
    console.log(view);
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
}