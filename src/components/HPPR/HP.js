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

function HP() {
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
            <Container maxW='100%' maxH='max-content' bg='secondary.500' color='primary.500'>
                <Heading fontSize={headingSizes[variant]} ml='10%' mb='30px' color='white'>Играй и выигрывай!</Heading>
                <Text maxW='70%' wordBreak='break-word' fontSize={textSizes[variant]} ml='10%' mb='30px'>
                    Играй в
                    <span style={{ color: 'blue' }}> Cyberpunk 2077 </span>
                    и получи возможность выиграть консоль
                    <span style={{ color: 'blue' }}> Xbox Series X </span>
                    или
                    <span style={{ color: 'blue' }}> Sony PlayStation 5! </span>
                    Заполни форму ниже и приложи скриншот о покупке игры.
                    Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)
                </Text>
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
                        <Button variant='secondary'>Отправить</Button>
                        <br />
                        <Checkbox>
                            согласие на обработку персональных данных
                        </Checkbox>
                    </Box>
                    <Box>
                        <Image src="/img/7.webp" alt="Img" loading='lazy' />
                    </Box>
                </SimpleGrid>
            </Container>
        </VStack>
    );
}

export default HP;
