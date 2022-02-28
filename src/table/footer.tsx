import React, { FC } from "react";
import { Nav } from "react-bootstrap";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTableInfo } from ".";

const NavLink: FC<{
  disabled?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = ({ children, disabled, active, onClick }) => {
  return (
    <Nav.Item as="span">
      <Nav.Link {...{ disabled, active, onClick, children }} />
    </Nav.Item>
  );
};

export const Footer = () => {
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTableInfo();
  return (
    <footer>
      <Nav justify variant="pills">
        <NavLink onClick={() => gotoPage(0)} disabled={pageIndex == 0}>
          <FaAngleDoubleLeft />
        </NavLink>
        <NavLink onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FaAngleLeft />
        </NavLink>
        <NavLink disabled active>
          Page {pageIndex + 1} of {pageOptions.length}
        </NavLink>
        <NavLink onClick={() => nextPage()} disabled={!canNextPage}>
          <FaAngleRight />
        </NavLink>
        <NavLink onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex == pageCount - 1}>
          <FaAngleDoubleRight />
        </NavLink>
      </Nav>
    </footer>
  );
};
export default Footer;
