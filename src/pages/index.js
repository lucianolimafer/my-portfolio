import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";

const Page = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
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
          Work
        </Heading>
        <p>Workssss</p>
      </Section>
    </Container>
  );
}

export default Page;
