import dayjs from "dayjs";

const adjustDateTimeForTimezone = (dateString: string) => {
  if (!dateString) return new Date();
  const dateUTC = dayjs.utc(dateString);
  const dateInUTCMinus = dateUTC.tz("America/Sao_Paulo");

  return dayjs(dateInUTCMinus.format());
};

const handleChange = (data: any, setData: any, value: any, field: string) => {
  const d = data;
  d[field].value = value;
  setData(() => ({
    ...d,
  }));
};

export { handleChange, adjustDateTimeForTimezone };
