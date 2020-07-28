import React from "react";
import "./breadcrumb.scss";

interface IBreadcrumbProps {

}

const Breadcrumb = (props: IBreadcrumbProps) => {
    return (
      <div className={"breadcrumb"}>
          <i className={"fa fa-home"} />
          <span>Tamil Nadu</span>
          <span>/</span>
          <span>Chennai</span>
          <span>/</span>
          <span>Pizzas</span>
      </div>
    );
};

export default Breadcrumb;
