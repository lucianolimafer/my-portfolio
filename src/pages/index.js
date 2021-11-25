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
import { BioSection, BioYear } from '../components/bio';

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
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          Born in Valença do Piauí - PI, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2001 - 2009</BioYear>
          Completed the college in Valença do Piauí - PI, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2010 - 2012</BioYear>
          Completed the High School in Valença do Piauí - PI, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2013 - 2015</BioYear>
          Started the Graduation in Analisys and Development of Systems, in Institute of Science and Technolgy from Picos - PI, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2014 - 2015</BioYear>
          Started working like a manager on the department of public administration from files in Prefeitura Municipal Valença do Piauí - PI, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2016 - 2016</BioYear>
          Started working like a social media in a agency from publicity Global Monster, Teresina - PI, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2017 - 2018</BioYear>
          Started working as a electronic technician on the TRF 4ª Region, on Porto Alegre - RS, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2020</BioYear>
          Started working as a electronic technician on the TRF 4ª Region, on Porto Alegre - RS, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2020</BioYear>
          Started working as a front-end developer freelancer, on Porto Alegre - RS, Brazil
        </BioSection>
        <BioSection>
          <BioYear>2021 - 2021</BioYear>
          Started working as a front-end developer in a Software house, the company Rockapps, from Rio de Janeiro, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2021 - actually</BioYear>
          Working as a front-end ande mobile developer in a outsourcing squad to Globalsys company, from Vitoria - ES, Brazil, and the biggest club of wine from the world, wine.com.br.
        </BioSection>
      </Section>
    </Container>
  );
}

export default Page;
