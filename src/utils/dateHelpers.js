// This function takes a date and a format as arguments. The format argument is optional and defaults to 'YYYY-MM-DD'. The function uses the Intl.DateTimeFormat object to format the date according to the specified format. The function returns the formatted date as a string.

export const formatDate = (date, format = "YYYY-MM-DD") => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };

  if (format === "DD/MM/YYYY") {
    options.day = "2-digit";
    options.month = "2-digit";
    options.year = "numeric";
  }

  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
};

