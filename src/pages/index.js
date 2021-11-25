import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';

const Page = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  const arrowComponent = <ChevronRightIcon />;

  return (
    <Container>
      <Box borderRadius="lg" bg={bgColor} p={3} mb={6} align="center">
        Hi, I'm a front-end developer focused on building mobile and web apps.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Luciano Lima Fer
          </Heading>
          <p>Mobile developer (js / ts)</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={3}
            borderStyle="solid"
            maxWidth="25%"
            display="inline-block"
            borderRadius="full"
            src="https://avatars.githubusercontent.com/u/69359504?v=4"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          I'm a mobile developer with over two years of development experience and improving my skills with Javascript and Typescript to build high-performance and high complexity hybrid applications (android and ios) using the react-native framework, my
          {' '}
          <NextLink href="/works/inkdrop">
            <Link>Linkedin</Link>
          </NextLink>
          .
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={arrowComponent} colorScheme="orange">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
}

export default Page;
