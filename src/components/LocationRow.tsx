import {
  CloseIcon,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  TableRow,
} from "styles/home";
import { IconPin, IconStep } from "styles/icons";
import { LocationField } from "./fields";
import { memo } from "react";
import { DotSeparator } from "styles/shared";

interface Props {
  fieldId: string;
  city: string | undefined;
  isLast: boolean;
  isUnique: boolean;
  onRemove: (id: string) => void;
}

const LocationRowComponent = ({
  fieldId,
  city,
  isLast,
  isUnique,
  onRemove,
}: Props) => (
  <TableRow key={fieldId}>
    <LeftColumn>
      {isLast ? (
        <IconPin />
      ) : (
        <>
          <IconStep />
          <DotSeparator size={57} />
        </>
      )}
    </LeftColumn>
    <MiddleColumn>
      <LocationField
        defaultValue={city || ""}
        name={`destinations[${fieldId}]`}
        label={"City of destination"}
        validate={(value) =>
          !value ? "You must choose the city of destination" : undefined
        }
      />
    </MiddleColumn>
    <RightColumn>
      {!isUnique && <CloseIcon onClick={() => onRemove(fieldId)} />}
    </RightColumn>
  </TableRow>
);
export const LocationRow = memo(LocationRowComponent);
