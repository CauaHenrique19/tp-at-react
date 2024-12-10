import React from "react";
import dayjs from "dayjs";

import {
  BoxComponent,
  DateTimePickerComponent,
  GridComponent,
  TextFieldComponent,
} from ".";
import { adjustDateTimeForTimezone } from "../utils/date";
import { handleInputChange } from "../utils/actions";

interface SleepProps {
  data: any;
  setData: (data: any) => void;
  t: (key: string) => string;
}

export const Sleep: React.FC<SleepProps> = ({ data, setData, t }) => {
  return (
    <BoxComponent sx={{ mt: 1, display: "flex" }}>
      <GridComponent container={true} spacing={2}>
        <GridComponent size={{ xs: 12 }}>
          <DateTimePickerComponent
            value={
              data?.start_date
                ? dayjs(adjustDateTimeForTimezone(data.start_date))
                : null
            }
            label={t("data-hour-start")}
            name="start_date"
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) => handleInputChange('start_date', new Date(value.toString()), data, setData)}
          />
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <DateTimePickerComponent
            value={
              data?.end_date
                ? dayjs(adjustDateTimeForTimezone(data.end_date))
                : null
            }
            label={t("data-hour-end")}
            name="end_date"
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) => handleInputChange('end_date', new Date(value.toString()), data, setData)}
          />
        </GridComponent>
        <GridComponent size={{ xs: 12 }}>
          <TextFieldComponent
            value={data?.observation}
            label={t("observation")}
            name="observation"
            onChange={(event) => handleInputChange('observation', event.target.value, data, setData)}
            rows={6}
            fullWidth={true}
            multiline={true}
          />
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
};
