import React, { useEffect, useState, useCallback } from "react";
import moment from "moment";
import { v4 as generateUuid } from "uuid";
import { Col, Row } from "react-grid-system";

import { Button, Form, LocationRow } from "components";
import { DateField, IncrementerField, LocationField } from "components/fields";

import {
  ButtonColumn,
  LeftColumn,
  MiddleColumn,
  PlusIcon,
  PlusLinkButton,
  RightColumn,
  TableRow,
  Table,
} from "styles/home";
import { IconStep } from "styles/icons";
import { Card, DotSeparator } from "styles/shared";
import { useRouterForm } from "hooks";

export default function HomePage() {
  const { defaultValues, handleSubmit, handleFormUpdate, setKeys } =
    useRouterForm();

  const [routeKeys, setRouteKeys] = useState(
    Array.from(
      {
        length:
          defaultValues.cities.length <= 1
            ? 1
            : defaultValues.cities.length - 1,
      },
      () => generateUuid()
    )
  );

  useEffect(() => setKeys(routeKeys), [routeKeys, setKeys]);

  const handleAddDestination = useCallback(() => {
    setRouteKeys((prevKeys) => [...prevKeys, generateUuid()]);
  }, []);

  const handleRemoveDestination = useCallback((keyToRemove: string) => {
    setRouteKeys((prevKeys) => prevKeys.filter((key) => key !== keyToRemove));
  }, []);

  if (!defaultValues) {
    return null;
  }
  return (
    <Card>
      <Form onSubmit={handleSubmit} onUpdate={handleFormUpdate}>
        <Row>
          <Col xs={12} md={8}>
            <Table>
              <tbody>
                <TableRow>
                  <LeftColumn>
                    <IconStep />
                    <DotSeparator size={57} />
                  </LeftColumn>
                  <MiddleColumn>
                    <LocationField
                      defaultValue={defaultValues.cities[0] || ""}
                      name={"origin"}
                      label={"City of origin"}
                      validate={(value) => {
                        if (!value) {
                          return "You must choose the city of origin";
                        }
                      }}
                    />
                  </MiddleColumn>
                  <RightColumn></RightColumn>
                </TableRow>
                {routeKeys.map((key, index) => (
                  <LocationRow
                    key={key}
                    fieldId={key}
                    city={defaultValues.cities[index + 1]}
                    isLast={index === routeKeys.length - 1}
                    isUnique={routeKeys.length === 1}
                    onRemove={handleRemoveDestination}
                  />
                ))}
                <TableRow>
                  <ButtonColumn>
                    <PlusLinkButton onClick={handleAddDestination}>
                      <PlusIcon
                        style={{
                          marginRight: 25,
                          transform: "translateY(4px)",
                        }}
                      />
                      {"Add destination"}
                    </PlusLinkButton>
                  </ButtonColumn>
                </TableRow>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={4}>
            <Row style={{ marginLeft: 25, display: "inline-flex" }}>
              <Col xs={6} md={12} style={{ paddingRight: 50 }}>
                <IncrementerField
                  defaultValue={defaultValues.passengers}
                  name={"passengers"}
                  label={"Passengers"}
                  validate={(value) => {
                    if (value < 1) {
                      return "Select passengers";
                    }
                  }}
                />
              </Col>
              <Col xs={6} md={12}>
                <DateField
                  defaultValue={defaultValues.date}
                  name={"date"}
                  label={"Date"}
                  validate={(value) => {
                    if (!value) {
                      return "Select date";
                    }
                    if (moment(value).isBefore(moment().startOf("day"))) {
                      return "Date must be after today";
                    }
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
