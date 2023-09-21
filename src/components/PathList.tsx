import React from "react";
import { Path } from "types";
import { Button } from "components";
import moment from "moment";
import {
  Balloon,
  LeftCol,
  MiddleCol,
  RightCol,
  Row,
  Info,
} from "styles/result";
import { IconPin, IconStep } from "styles/icons";
import { DotSeparator } from "styles/shared";

interface Props {
  result: {
    paths: Path[];
    passengers: number;
    date: string;
  };
  onBack: () => void;
}

export const PathList = ({ result, onBack }: Props) => {
  const totalDistance = result.paths.reduce(
    (acc, path) => acc + path.distance,
    0
  );
  const lastPath = result.paths[result.paths.length - 1];

  return (
    <div style={{ textAlign: "center" }}>
      {result.paths.map((path, index) => (
        <Row key={index}>
          <LeftCol>
            <Balloon>{path.distance.toFixed(2)} km</Balloon>
          </LeftCol>
          <MiddleCol>
            <IconStep />
            <DotSeparator size={36} />
          </MiddleCol>
          <RightCol>{path.from}</RightCol>
        </Row>
      ))}
      <Row>
        <LeftCol />
        <MiddleCol>
          <IconPin />
        </MiddleCol>
        <RightCol>{lastPath?.to}</RightCol>
      </Row>
      <Info>
        <p>
          <b>{totalDistance.toFixed(2)} km</b> is total distance
        </p>
        <p>
          <b>{result.passengers}</b> passengers
        </p>
        <p>
          <b>{moment(result.date).format("MMM D, YYYY")}</b>
        </p>
      </Info>
      <Button onClick={onBack}>Back</Button>
    </div>
  );
};
