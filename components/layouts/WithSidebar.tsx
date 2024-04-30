import Container from "@sonnat/ui/Container";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Footer from "components/containers/Footer";
import Sidebar from "components/containers/Sidebar";
import * as React from "react";

const componentName = "WithSidebar";

const useStyles = makeStyles(
  theme => {
    const {
      breakpoints,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        display: "flex"
      },
      container: {
        [breakpoints.up("lg")]: {
          paddingRight: 0,
          paddingLeft: 0
        }
      },
      sidebar: {
        height: `100vh`,
        width: pxToRem(256),
        flexShrink: 0,
        [breakpoints.down("lg")]: {
          display: "none"
        }
      },
      content: {
        flex: "1 1",
        minWidth: 0,
        paddingTop: pxToRem(64),
        paddingRight: pxToRem(32),
        paddingLeft: pxToRem(32),
        [breakpoints.down("lg")]: {
          paddingTop: pxToRem(96),
          paddingRight: 0,
          paddingLeft: 0
        }
      },
      article: {
        minHeight: `calc(100vh - ${pxToRem(264)})`,
        [breakpoints.down("lg")]: {
          minHeight: `calc(100vh - ${pxToRem(296)})`
        },
        [breakpoints.down("sm")]: {
          minHeight: "auto"
        }
      }
    };
  },
  { name: componentName }
);

const WithSidebar: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <main id="main" className={classes.root}>
      <Sidebar className={classes.sidebar} />
      <section className={classes.content}>
        <Container className={classes.container}>
          <article className={classes.article}>{children}</article>
          <Footer />
        </Container>
      </section>
    </main>
  );
};

WithSidebar.displayName = componentName;

export default WithSidebar;
