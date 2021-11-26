import {
  Container,
  Heading,
  SimpleGrid,
  Divider
} from '@chakra-ui/react';
import Section from '../components/section';
import {
  GridItem,
  WorkGridItem,
  GridItemStyle
} from '../components/grid-item';
import Layout from '../components/layouts/article';
import thumbLifepet from '../../public/images/works/lifepet_01.png';
import thumbSatelite from '../../public/images/works/satelite_01.png';
import thumbForniture from '../../public/images/works/forniture_01.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem id="lifepet" title="Lifepet Partners" thumbnail={thumbLifepet}>
              Mobile app for pet owners to track their pets' health and behavior.
            </WorkGridItem>
          </Section>

          <Section delay={0.6}>
            <WorkGridItem id="satelite" title="Satelite" thumbnail={thumbSatelite}>
              A hybrid app (android and ios) built to manage video calls person to person or live for multiple users.
            </WorkGridItem>
          </Section>

          <Section delay={0.9}>
            <WorkGridItem id="forniture" title="FornitureFer App" thumbnail={thumbForniture}>
              A hybrid app (android and ios) built like a forniture store.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
