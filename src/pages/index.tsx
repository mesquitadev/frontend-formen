import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { FaInstagram, FaLocationArrow, FaWhatsapp } from 'react-icons/fa';
import { GrCatalog } from 'react-icons/gr';
import { SiWhatsapp } from 'react-icons/si';
import { A11y, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {
  const cards = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
  ];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay
    >
      {cards.map((url, index) => (
        <SwiperSlide key={index}>
          <Box
            key={index}
            height="500px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Formen Multimarcas</title>
      </Head>

      <Container maxW="container.lg">
        <Flex as="section" direction="column">
          <Flex justifyContent="center" alignItems="center" py={10}>
            <Text fontWeight="bold" as="h1" size="6xl">
              BEM VINDO À FORMEN MULTIMARCAS
            </Text>
          </Flex>
          <Center p={8}>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
              <Button
                w={'full'}
                colorScheme={'yellow'}
                leftIcon={<AiOutlineClockCircle />}
                as={Link}
                href="https://asset.cloudinary.com/dxin0mfj4/822890d626ae6a144f88f401ce9b4359"
                target="_blank"
              >
                <Center>
                  <Text>Horário de Funcionamento</Text>
                </Center>
              </Button>

              <Button
                w={'full'}
                colorScheme={'whatsapp'}
                leftIcon={<SiWhatsapp />}
                as={Link}
                href="https://wa.me/5598991526700"
                target="_blank"
              >
                <Center>
                  <Text>Whatsapp Loja</Text>
                </Center>
              </Button>

              <Button
                w={'full'}
                colorScheme={'teal'}
                leftIcon={<GrCatalog />}
                as={Link}
                href="https://drive.google.com/drive/folders/1l8nba8xkwMhLFdFFyayIMkMjhLiEV-_j"
              >
                <Center>
                  <Text>Catálogo</Text>
                </Center>
              </Button>

              {/* Messenger */}
              <Button
                w={'full'}
                colorScheme={'pink'}
                leftIcon={<FaInstagram />}
                as={Link}
                href="https://www.instagram.com/formen_mulltimarcas?igsh=MTcxNDB0bTNpNm5uZA=="
                target="_blank"
              >
                <Center>
                  <Text>Instagram</Text>
                </Center>
              </Button>

              <Button
                w={'full'}
                colorScheme={'facebook'}
                leftIcon={<BsTruck />}
                as={Link}
                href="https://wa.me/5598991526700"
                target="_blank"
              >
                <Center>
                  <Text>Delivery</Text>
                </Center>
              </Button>
              <Button
                w={'full'}
                colorScheme={'whatsapp'}
                leftIcon={<FaWhatsapp />}
                as={Link}
                href="https://chat.whatsapp.com/LmP05eTl07x69ogya8Vtw5"
                target="_blank"
              >
                <Center>
                  <Text>GRUPO de NOVIDADES E PROMOÇÕES</Text>
                </Center>
              </Button>

              <Button
                w={'full'}
                colorScheme={'cyan'}
                leftIcon={<FaLocationArrow />}
                as={Link}
                href="https://asset.cloudinary.com/dxin0mfj4/e495cb3adb90157ca44220b7acbbdfa9"
                target="_blank"
              >
                <Center>
                  <Text>Endereço Lojas</Text>
                </Center>
              </Button>
            </Stack>
          </Center>
          <Box py={20}>
            <Carousel />
          </Box>
        </Flex>
      </Container>
    </>
  );
}
