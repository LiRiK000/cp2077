import { useState, useEffect } from "react";
import { Box, Text, CircularProgress } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                    }}
                >
                    <Box textAlign="center">
                        <CircularProgress isIndeterminate color="secondary.500" />
                        <Text mt={4} color="white">
                            Loading...
                        </Text>
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
