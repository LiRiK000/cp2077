import {
    SimpleGrid,
    Container,
    VStack,
    useBreakpointValue,
    Heading,
    Text,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Image,
    Box,
    Button
} from '@chakra-ui/react';
import { React } from 'react';

function PlayAndWin() {
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
        md: '5xl',
        lg: '6xl',
        xl: '7xl',
        '2xl': '7xl',
    };
    return (
        <VStack as='section' style={{ gap: '0' }}>
            <Image src="/img/8.webp" w='100vw' alt="Img 1" minH='40px' loading="lazy" />
            <Container maxW='100%' maxH='max-content' bg='primary.500' color='white'>
                <Heading fontSize={headingSizes[variant]} ml='10%' mb='30px' color='white'>Играй и выигрывай!</Heading>
                <Text maxW={(variant === 'base' || variant === 'sm') ? '100%' : '70%'} wordBreak='break-word' fontSize={textSizes[variant]} ml='10%' mb='30px'>
                    Играй в Cyberpunk 2077 и получи возможность выиграть консоль Xbox Series X
                    или
                    Sony PlayStation 5!
                    Заполни форму ниже и приложи скриншот о покупке игры.
                    Итоги розыгрыша будут подведены 1 февраля.Удачи!;)
                </Text >
                <SimpleGrid ml='10%' columns={[1, null, 2]} spacing='50px'>
                    <Box>
                        <FormControl>
                            <FormLabel>Имя</FormLabel>
                            <Input type='name' />
                            <FormHelperText>Как тебя зовут</FormHelperText>
                        </FormControl>
                        <FormControl mt='20px' mb='20px'>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            <FormHelperText>Введите почту</FormHelperText>
                        </FormControl>
                        <Button variant='secondary' mb='5px'>Отправить</Button>
                        <br />
                        <Checkbox>
                            согласие на обработку персональных данных
                        </Checkbox>
                    </Box>
                    <Box>
                        <Image src="/img/7.webp" alt="Img" loading='lazy' />
                    </Box>
                </SimpleGrid>
            </Container >
            <Image src="/img/9.webp" alt="Img 2" w='100vw' minH='40px' loading="lazy" />
        </VStack >
    );
}

export default PlayAndWin;
