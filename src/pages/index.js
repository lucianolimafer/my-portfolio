import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hi, I'm a front-end developer focused on building mobile and web apps.
      </Box>
      <Box display={{ md: 'fles' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Luciano Lima Fer
          </Heading>
          <p>Mobile developer (js / ts)</p>
        </Box>
      </Box>
    </Container>
  );
}

export default Page;
