export * from "./tableMaker";
export * from "./header";

import React from "react";
import PrepareTable, { PrepareTableProps } from "./tableMaker";
class FlexTable extends React.Component {
  render(this: { props: Readonly<PrepareTableProps> }) {
    return <PrepareTable {...this.props}></PrepareTable>;
  }
}
export default FlexTable;
