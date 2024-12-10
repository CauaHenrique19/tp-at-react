import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import {
  DateTimeValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";

interface DateTimePickerComponentProps {
  label: string;
  onChange?: (
    date: Date | null,
    context: PickerChangeHandlerContext<DateTimeValidationError>
  ) => void;
}

export function DateTimePickerComponent({
  label,
  onChange,
}: DateTimePickerComponentProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        sx={{
          width: "100%",
          svg: { color: "#fff", fill: "#fff" },
          input: { color: "#fff" },
          label: { color: "#fff" },
        }}
        label={label}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
