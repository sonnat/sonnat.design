import Row from "@sonnat/ui/Row";
import Column from "@sonnat/ui/Column";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import TableOfContent from "components/TableOfContent";
import * as React from "react";

const componentName = "WithTableOfContent";

const useStyles = makeStyles(
  theme => ({
    root: {},
    tableColumn: {
      [theme.breakpoints.down("lg")]: {
        display: "none"
      }
    }
  }),
  { name: componentName }
);

type TableDataType = { id: string; label: string }[];

interface Props {
  tableData: TableDataType;
}

const WithTableOfContent: React.FC<Props> = ({ children, tableData }) => {
  const classes = useStyles();

  return (
    <Row className={classes.root}>
      <Column all="12" lg="9">
        {children}
      </Column>
      <Column className={classes.tableColumn} all={{ size: "2", offset: "1" }}>
        <TableOfContent tableData={tableData} />
      </Column>
    </Row>
  );
};

WithTableOfContent.displayName = componentName;

export default WithTableOfContent;
