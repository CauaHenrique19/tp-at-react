import React from "react";
import dayjs from "dayjs";

import {
  BoxComponent,
  Button,
  DateTimePickerComponent,
  GridComponent,
  TextFieldComponent,
  TypographyComponent,
} from ".";

import { verifySelected } from "../utils/verifySelected";
import { handleInputChange } from "../utils/actions";
import { adjustDateTimeForTimezone } from "../utils/date";

interface EatProps {
  data: any;
  setData: (data: any) => void;
  t: (key: string) => string;
}

export const Eat: React.FC<EatProps> = ({ data, setData, t }) => {
  return (
    <BoxComponent component="form" noValidate sx={{ mt: 1, display: "flex" }}>
      <GridComponent container={true} spacing={2}>
        <GridComponent size={{ xs: 12 }}>
          <TypographyComponent>{t("type")}:</TypographyComponent>
        </GridComponent>
        <GridComponent size={{ xs: 6 }}>
          <Button
            onClick={() => handleInputChange("type", 1, data, setData)}
            fullWidth={true}
            variant={verifySelected(1, data, "type")}
          >
            {t("eat-bottle")}
          </Button>
        </GridComponent>
        <GridComponent size={{ xs: 6 }}>
          <Button
            onClick={() => handleInputChange("type", 2, data, setData)}
            fullWidth={true}
            variant={verifySelected(2, data, "type")}
          >
            {t("eat-bosom")}
          </Button>
        </GridComponent>
        {data?.type === 1 ? (
          <>
            <GridComponent size={{ xs: 12 }}>
              <TextFieldComponent
                value={data.quantity}
                label={t("quantity")}
                name="quantity"
                onChange={(event) =>
                  handleInputChange(
                    "quantity",
                    event.target.value,
                    data,
                    setData
                  )
                }
                fullWidth={true}
              />
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
          </>
        ) : null}
        {data?.type === 2 ? (
          <>
            <GridComponent size={{ xs: 12 }}>
              <TypographyComponent>{t("side")}:</TypographyComponent>
            </GridComponent>
            <GridComponent size={{ xs: 4 }}>
              <Button
                onClick={() => handleInputChange("side", 1, data, setData)}
                fullWidth={true}
                variant={verifySelected(1, data, "side")}
              >
                {t("left")}
              </Button>
            </GridComponent>
            <GridComponent size={{ xs: 4 }}>
              <Button
                onClick={() => handleInputChange("side", 2, data, setData)}
                fullWidth={true}
                variant={verifySelected(2, data, "side")}
              >
                {t("right")}
              </Button>
            </GridComponent>
            <GridComponent size={{ xs: 4 }}>
              <Button
                onClick={() => handleInputChange("side", 3, data, setData)}
                fullWidth={true}
                variant={verifySelected(3, data, "side")}
              >
                {t("both")}
              </Button>
            </GridComponent>
            <GridComponent size={{ xs: 12 }}>
              <DateTimePickerComponent
                value={
                  data?.start_date
                    ? dayjs(adjustDateTimeForTimezone(data.start_date))
                    : null
                }
                label={t("data-hour-start")}
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
              <DateTimePickerComponent
                value={
                  data?.end_date
                    ? dayjs(adjustDateTimeForTimezone(data.end_date))
                    : null
                }
                label={t("data-hour-end")}
                name="end_date"
                fullWidth={true}
                ampm={false}
                format="DD/MM/YYYY HH:mm"
                onChange={(value) =>
                  handleInputChange(
                    "end_date",
                    new Date(value.toString()),
                    data,
                    setData
                  )
                }
              />
            </GridComponent>
          </>
        ) : null}
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
