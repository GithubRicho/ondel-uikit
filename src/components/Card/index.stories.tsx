import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import CardRibbon from "./CardRibbon";
import UIKitCardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import Card from "./Card";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isActive>
          <CardBody>Active</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isSuccess>
          <CardBody>Success</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isWarning>
          <CardBody>Warning</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isDisabled>
          <CardBody>Disabled</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </div>
  );
};

export const CardHeader: React.FC = () => {
  return (
<<<<<<< HEAD
    <div style={{ padding: "32px", width: "500px" }}>
=======
    <div style={{ padding: "32px", width: "600px" }}>
>>>>>>> refs/remotes/origin/master
      <Card>
        <UIKitCardHeader>
          <Heading size="xl">Card Header</Heading>
        </UIKitCardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};
export const Ribbon: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card ribbon={<CardRibbon text="Ribbon" />}>
          <div style={{ height: "112px", backgroundColor: "#191326" }} />
<<<<<<< HEAD
          <CardBody style={{ height: "150px" }}>Body</CardBody>
=======
          <CardBody style={{ height: "200px" }}>Body</CardBody>
>>>>>>> refs/remotes/origin/master
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="textDisabled" text="Ribbon with Long Text" />}>
<<<<<<< HEAD
          <CardBody style={{ height: "150px" }}>Ribbons will truncate when text is too long</CardBody>
=======
          <CardBody style={{ height: "200px" }}>Ribbons will truncate when text is too long</CardBody>
>>>>>>> refs/remotes/origin/master
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="success" text="Success" />}>
<<<<<<< HEAD
          <CardBody style={{ height: "150px" }}>Card</CardBody>
=======
          <CardBody style={{ height: "200px" }}>Card</CardBody>
>>>>>>> refs/remotes/origin/master
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="failure" text="Failure" />}>
<<<<<<< HEAD
          <CardBody style={{ height: "150px" }}>Any Color in the theme</CardBody>
=======
          <CardBody style={{ height: "200px" }}>Any Color in the theme</CardBody>
>>>>>>> refs/remotes/origin/master
        </Card>
      </Row>
    </div>
  );
};
