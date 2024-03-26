"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
                                    users,
                                    titleComponent,
                                }: {
    users: {
        name: string;
        designation: string;
        image: string;
        badge?: string;
    }[];
    titleComponent: string | React.ReactNode;
}) => {
    const containerRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [1, 50]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -20]);

    return (
        <div
            className="h-full flex items-center justify-center relative px-12"
            ref={containerRef.current}
        >
            <div
                className=" w-full my-auto relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <Header translate={translate} titleComponent={titleComponent} />
                <Card
                    rotate={rotate}
                    translate={translate}
                    scale={scale}
                    users={users}
                />
            </div>
        </div>
    );
};

export const Header = ({ translate, titleComponent }: any) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({
                         rotate,
                         scale,
                         translate,
                         users,
                     }: {
    rotate: any;
    scale: any;
    translate: any;
    users: {
        name: string;
        designation: string;
        image: string;
        badge?: string;
    }[];
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate, // rotate in X-axis
                scale,
                }}
            className="max-w-5xl -mt-12 mx-auto h-full w-full p-6"
        >
            <div className=" h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-hidden">
                {users.map((user, idx: number) => (
                    <motion.div
                        key={`user-${idx}`}
                        className=" rounded-md cursor-pointer relative bg-secondary"
                        style={{ translateY: translate }}
                        whileHover={{
                            boxShadow:
                                "0 20px 25px -5px #111717, 0 8px 10px -6px #111717",
                        }}
                    >
                        <div className="absolute top-2 right-2 rounded-full text-xs font-bold px-2 py-1">
                            {user.badge}
                        </div>
                        <img
                            src={user.image}
                            className="rounded-tr-md rounded-tl-md text-sm "
                            alt="thumbnail"
                        />
                        <div className="p-4">
                            <h1 className="font-semibold text-sm ">{user.name}</h1>
                            <h2 className=" text-gray-500 text-xs ">{user.designation}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
