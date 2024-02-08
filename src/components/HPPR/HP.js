import {
    SimpleGrid,
    Container,
    VStack,
    useBreakpointValue,
    Heading,
    Text,
    List,
    ListItem,
    Image,
    Box,
    Button
} from '@chakra-ui/react';
import { CopyIcon, StarIcon, ViewIcon } from '@chakra-ui/icons'
import { React } from 'react';

function HP() {
    const variant = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' });

    const textSizes = {
        base: 'md',
        sm: 'lg',
        md: 'xl',
        lg: 'xl',
        xl: '3xl',
        '2xl': '4xl',
    };
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

    return (
        <VStack as='section' style={{ gap: '0' }}>
            <Container maxW='100%' maxH='max-content' bg='secondary.500' color='primary.500'>
                <SimpleGrid ml='10%' columns={[1, null, 2]} spacing='50px'>
                    <Box>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '10px',
                        }}>
                            <Image src="/img/10.webp" alt="Img" loading='lazy' />
                            <Image src="/img/12.webp" mr='20%' w='20%' alt="Img" loading='lazy' />
                            <Image src="/img/11.webp" alt="Img" w='50%' loading='lazy' />
                        </div>
                    </Box>
                    <Box mb='30px'>
                        <Heading fontSize={headingSizes[variant]} >Купить игру Cyberpunk 2077</Heading>
                        <Text maxW={(variant === 'base' || variant === 'sm') ? '100%' : '70%'} wordBreak='break-word'
                            fontSize={textSizes[variant]} mb='30px'>
                            Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма,
                            созданном для отображения максимально насыщенных цветов.
                            Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц
                        </Text>
                        <List spacing={3} mb='30px'>
                            <ListItem>
                                <ViewIcon mr='1' />
                                Яркие насыщенные цвета
                            </ListItem>
                            <ListItem>
                                <StarIcon mr='1' />
                                Кристальная четкость изображения
                            </ListItem>
                            <ListItem>
                                <CopyIcon mr='1' />
                                Быстрые движения и плавный геймплей
                            </ListItem>
                        </List>
                        <Button variant="primary" size={sizeMapping[variant]}>Подробнее</Button>
                    </Box>
                </SimpleGrid>
            </Container>
        </VStack>
    );
}

export default HP;
