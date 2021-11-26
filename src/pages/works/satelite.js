import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Lifepet">
    <Container>
      <Title>
        Satelite <Badge>2021</Badge>
      </Title>

      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>IOS App</Meta>
          <Link href="https://apps.apple.com/br/app/lifepet-parceiros/id1576593774">
            App Store <ExternalLinkIcon mx="20x" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Android App</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.lifepet.lifepetbusiness">
            Google Play <ExternalLinkIcon mx="20x" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android and IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Js and Ts, React-native, Expo BW</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/satelite_01.png" alt="satelite" />
    </Container>
  </Layout>
);

export default Work;
