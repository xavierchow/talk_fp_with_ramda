/* eslint-disable */
// Import React
import React from "react";
import Prism from "prismjs";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Link,
  Deck,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableItem,
  TableBody,
  CodePane,
  Heading,
  ListItem,
  List,
  Image,
  Notes,
  Quote,
  Slide,
  Text,
  Markdown,
  Appear,
  Layout,
  Fill,
  Code
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
// Import theme
//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

/* Custom Nova syntax highlighting */
import "spectacle-theme-nova/syntax/prism.nova.css";
// import "spectacle-theme-nova/syntax/prism-javascript";

const images = {
  transform: require("./assets/transform.png"),
  pipe: require("./assets/pipe.png")
};

preloader(images);

// Require CSS
// require("normalize.css");

//import { theme } from "spectacle-theme-solarized-light";
import { prismLight } from "spectacle/lib/themes/default";
import { prismDark } from "spectacle/lib/themes/default";
const theme = createTheme(null, {
  prism: {
    light: prismLight,
    dark: prismDark
  }
});
/* const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
); */

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            A step from imperative to funtional
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            start functional programming with Ramda
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Imperative Paradigm
          </Heading>
          <List>
            <ListItem>Command</ListItem>
            <ListItem>State</ListItem>
            <ListItem>Focus on "how" the program operates</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          color="white"
          // textSize={25}
          lang="js"
          code={require("!raw-loader!./assets/imperative.js")}
          ranges={[
            { loc: [0, 1], title: "a variable with let" },
            {
              loc: [4, 13],
              title: "For loop, some ops in each step"
            },
            { loc: [14, 18], title: "Do something and reset the collector" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Functional Paradigm
          </Heading>
          <List>
            <ListItem>Immutablitiy</ListItem>
            <ListItem>Usability</ListItem>
            <ListItem>Focus on "data tranforming"</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          color="white"
          lang="js"
          code={require("!raw-loader!./assets/immutability.js")}
          ranges={[{ loc: [0, 11], title: "yes, a new foo!!" }]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps textColor="secondary">
            transform
          </Heading>
          <List>
            <Layout>
              <Fill>
                <Image
                  src={images.transform.replace("/", "")}
                  margin="0px auto 40px"
                />
              </Fill>
            </Layout>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps textColor="secondary">
            compose/pipe
          </Heading>
          <List>
            <Layout>
              <Fill>
                <Image
                  src={images.pipe.replace("/", "")}
                  margin="0px auto 40px"
                />
              </Fill>
            </Layout>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps textColor="secondary">
            Demo Time!
          </Heading>
          <List />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Markdown>
            {`
## ~~DEMO Time~~
## CODE Time!
           `}
          </Markdown>
          <List />
        </Slide>
      </Deck>
    );
  }
}
