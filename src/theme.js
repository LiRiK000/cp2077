import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            'html, body':{
                overflowX: 'hidden'
            }
        }
    },
    colors: {
        primary: {
            500: "#000000",
        },
        secondary: {
            500: "#F8F200",
        },
    },
    fonts: {
        heading: "Alegreya, sans-serif;",
        body: "Alegreya, sans-serif",
    },
    space: {
        2: "8px",
        4: "16px",
    },
    components: {
        Button: {
            // Переопределение базового стиля кнопки
            baseStyle: {
                fontWeight: "bold",
                borderRadius: "md",
            },
            // Стили для различных размеров кнопки
            sizes: {
                md: {
                    fontSize: "md",
                    padding: "12px 24px",
                },
                lg: {
                    fontSize: "lg",
                    padding: "16px 32px",
                },
            },
            // Варианты цветов кнопки (например, primary, secondary)
            variants: {
                primary: {
                    bg: "primary.500",
                    color: "white",
                    _hover: {
                        bg: "#333",
                    },
                },
                secondary: {
                    bg: "secondary.500",
                    color: "black",
                    _hover: {
                        bg: "gray.600",
                    },
                },
            }
        }
    },
    breakpoints: {
        base: "1px",
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: '400000px',
        '2xl': '500000px'
    },
});

export default theme;
