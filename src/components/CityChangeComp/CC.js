import React from "react";
import {
    Container,
    Flex,
    Box,
    Text,
    Heading,
    VStack,
    Grid,
    useBreakpointValue,
    GridItem
} from "@chakra-ui/react";

function CityChange() {
    const variant = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' });
    const textSizes = {
        base: 'md',
        sm: 'lg',
        md: 'xl',
        lg: '2xl',
        xl: '3xl',
        '2xl': '4xl',
    };
    const headingSizes = {
        base: '2xl',
        sm: '3xl',
        md: '4xl',
        lg: '5xl',
        xl: '6xl',
        '2xl': '7xl',
    };

    return (
        <VStack mt='71' mb='55' w='100%'>
            <Container maxW='100%' bg='white' color='#262626'>
                <Heading fontSize={headingSizes[variant]} ml='10%'>Найт-Сити изменит тебя навсегда!</Heading>
                <Text maxW='1000px' fontSize={textSizes[variant]} ml='10%' mb='70px' color='primary.500'>
                    <span style={{ color: 'blue' }}>
                        Cyberpunk 2077
                    </span>
                    — приключенческая ролевая игра,
                    действие которой происходит в мегаполисе Найт-Сити, где власть,
                    роскошь и модификации тела ценятся выше всего. Ты играешь за V,
                    наёмника в поисках устройства, позволяющего обрести бессмертие.
                    Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир,
                    где твои поступки влияют на ход сюжета и всё, что тебя окружает.
                </Text>
                <Flex ml='10%' flexWrap='wrap' justifyContent='space-between'>
                    <Grid
                        templateRows={{ base: "auto", md: "repeat(2, 1fr)" }}
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={{ base: 1, md: 2 }}
                    >
                        <GridItem
                            colSpan={{ base: 1, md: 1 }}
                        >
                            <Box
                                w="100%"
                                mb={{ base: '2', md: '2' }}
                            >
                                <img
                                    src="/img/4.webp"
                                    alt="Img 1"
                                    loading="lazy"
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 1, md: 1 }}
                        >
                            <Box
                                w="100%"
                                mb={{ base: '2', md: '2' }}
                            >
                                <img
                                    src="/img/6.webp"
                                    alt="Img 3" loading="lazy"
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 1, md: 1 }}
                        >
                            <Box
                                w="100%"
                                mb={{ base: '2', md: '2' }}
                            >
                                <img
                                    src="/img/5.webp"
                                    alt="Img 3" loading="lazy"
                                    style={{ width: '100%' }}
                                />
                            </Box>
                        </GridItem>
                    </Grid>
                </Flex>
            </Container>
        </VStack>
    )
}

export default CityChange;
