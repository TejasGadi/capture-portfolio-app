import { motion } from "framer-motion";

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 150,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
    exit: {
        opacity: 0,
        y: 150,
        transition: {
            duration: 0.5,
        },
    }
};
export const titleAnim = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.5,

        },
    },
    exit: {
        y: 500,
        transition: {
            duration: 0.5,

        },
    }
};
export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};
export const zoomOutAnim = {
    hidden: {
        x: 200,
        opacity: 0,
        scale: 1.8,
    },
    show: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
};

export const lineAnim = {
    hidden: {
        width: "0%",
    },
    show: {
        width: "100%",
        transition: {
            duration: 1,
        },
    },
};

export const sliderTransition = {
    hidden: {
        x: "-130%",
        skew: "45deg",
    },
    show: {
        x: "100%",
        skew: "0deg",
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};
export const sliderContainer = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.15,
        },
    },
};

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.3,
        transition: {
            duration: 0.5,
        },
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
};