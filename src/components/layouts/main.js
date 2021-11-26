import Head from 'next/head';
import Navbar from '../../components/navbar';
import NoSSR from '../no-ssr';
import { Box, Container } from '@chakra-ui/react';
import VoxelDog from '../voxel-dog';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Luciano Lima Fer</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSSR>
          <VoxelDog />
        </NoSSR>
        {children}
      </Container>
    </Box>
  );
}

export default Main;
