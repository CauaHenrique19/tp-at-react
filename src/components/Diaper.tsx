import React from "react";
import dayjs from "dayjs";

import {
  Button,
  BoxComponent,
  TextFieldComponent,
  GridComponent,
  DateTimePickerComponent,
} from ".";
import { verifySelected } from "../utils/verifySelected";
import { handleInputChange } from "../utils/actions";
import { adjustDateTimeForTimezone } from "../utils/date";

interface DiaperProps {
  data: any;
  setData: (data: any) => void;
  t: (key: string) => string;
}

export const Diaper: React.FC<DiaperProps> = ({ data, setData, t }) => {
  return (
    <BoxComponent component="form" noValidate sx={{ mt: 1, display: "flex" }}>
      <GridComponent container={true} spacing={2}>
        <GridComponent size={{ xs: 6 }}>
          <Button
            onClick={() => handleInputChange("type", 1, data, setData)}
            fullWidth={true}
            variant={verifySelected(1, data, "type")}
          >
            {t("diaper-wet")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 6 }}>
          <Button
            onClick={() => handleInputChange("type", 2, data, setData)}
            fullWidth={true}
            variant={verifySelected(2, data, "type")}
          >
            {t("diaper-dirty")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 6 }}>
          <Button
            onClick={() => handleInputChange("type", 3, data, setData)}
            fullWidth={true}
            variant={verifySelected(3, data, "type")}
          >
            {t("diaper-both")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 6 }}>
          <Button
            onClick={() => handleInputChange("type", 4, data, setData)}
            fullWidth={true}
            variant={verifySelected(4, data, "type")}
          >
            {t("diaper-clean")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <DateTimePickerComponent
            value={
              data?.start_date
                ? dayjs(adjustDateTimeForTimezone(data.start_date))
                : null
            }
            label={t("data-hour")}
            name="start_date"
            fullWidth={true}
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) =>
              handleInputChange(
                "start_date",
                new Date(value.toString()),
                data,
                setData
              )
            }
          />
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <TextFieldComponent
            value={data?.observation}
            label={t("observation")}
            name="observation"
            onChange={(event) =>
              handleInputChange(
                "observation",
                event.target.value,
                data,
                setData
              )
            }
            rows={6}
            fullWidth={true}
            multiline={true}
          />
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
};