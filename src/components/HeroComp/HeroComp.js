import { useState, useEffect } from "react";
import { Box, Text, Button, useBreakpointValue } from "@chakra-ui/react";

function HeroComp() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "/img/1.webp",
        "/img/2.webp",
        "/img/3.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const sizeMapping = {
        base: 'sm',
        sm: 'md',
        md: 'md',
        lg: 'lg',
    };

    const textSizes = {
        base: 'md',
        sm: 'lg',
        md: 'xl',
        lg: '2xl',
        xl: '3xl',
        '2xl': '4xl',
    };
    const variant = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' });

    return (
        <Box
            as="section"
            position="relative"
            height="100vh"
            backgroundSize="cover"
            backgroundPosition="center"
            transition="background-image 1s ease-in-out"
            backgroundImage={`url(${images[currentImage]})`}
        >
            <Box
                borderTopLeftRadius='60px'
                borderBottomRightRadius='60px'
                position="absolute"
                bgColor='secondary.500'
                p='4'
                textAlign="center"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '35dvw'}
                right='0'
                top={variant === 'base' || variant === 'sm' ? '80dvh' : '70dvh'}
                color="white"
            >
                <Text fontSize={textSizes[variant]} color='primary.500' mb='5px'>
                    Доступно на всех платформах
                </Text>
                <Button variant="primary" size={sizeMapping[variant]}>
                    Узнать больше
                </Button>
            </Box>
        </Box>
    );
}

export default HeroComp;
