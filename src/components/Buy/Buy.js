import React from 'react';
import {
    SimpleGrid,
    Container,
    VStack,
    useBreakpointValue,
    Heading,
    List,
    ListItem,
    Image,
    Box,
    Button
} from '@chakra-ui/react';
import { CopyIcon, StarIcon, ViewIcon } from '@chakra-ui/icons'

function Buy() {
    const headingSizes = {
        base: '2xl',
        sm: '3xl',
        md: '5xl',
        lg: '6xl',
        xl: '7xl',
        '2xl': '7xl',
    };

    const sizeMapping = {
        base: 'sm',
        sm: 'md',
        md: 'md',
        lg: 'lg',
    };

    const variant = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' });


    return (
        <VStack as='section'>
            <Container maxW='100%' maxH='max-content' bg='primary.500' color='white'>
                <SimpleGrid ml='10%' columns={[1, null, 2]} spacing='50px'>
                    <Box>
                        <Image src='/img/13.webp' loading='lazy' />
                    </Box>
                    <Box mb='30px'>
                        <Heading fontSize={headingSizes[variant]} mb='30'>Купить игру Cyberpunk 2077</Heading>
                        <List spacing={3} mb='30px'>
                            <ListItem>
                                <ViewIcon />
                                Футляр с игровыми дисками
                            </ListItem>
                            <ListItem>
                                <StarIcon />
                                Футляр с кодом для загрузки игры и дисками (pc)
                            </ListItem>
                            <ListItem>
                                <CopyIcon />
                                Справочник с информацией об игровом мире
                            </ListItem>
                        </List>
                        <Button variant="secondary" size={sizeMapping[variant]}>Купить</Button>
                    </Box>
                </SimpleGrid>
            </Container>
        </VStack>
    );
}

export default Buy;