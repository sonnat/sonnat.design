import PageLoader from "@sonnat/ui/PageLoader";
import { DefaultTheme } from "@sonnat/ui/styles";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Header from "components/containers/Header";
import * as React from "react";
import useStore from "store";

const componentName = "MainWrapper";

const useStyles = makeStyles<DefaultTheme, unknown, "root" | "pageLoader">(
  theme => ({
    root: {},
    pageLoader: {},
    [theme.breakpoints.down("lg")]: {
      pageLoader: {
        top: [[theme.typography.pxToRem(64)], "!important"]
      }
    }
  }),
  { name: "MainWrapper" }
);

const MainWrapper: React.FC = ({ children }) => {
  const classes = useStyles();
  const isPageLoading = useStore(state => state.isPageLoading);

  return (
    <div id="main-wrapper" className={classes.root}>
      <Header />
      <PageLoader loading={isPageLoading} className={classes.pageLoader} />
      {children}
    </div>
  );
};

MainWrapper.displayName = componentName;

export default MainWrapper;
