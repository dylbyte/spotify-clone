import formatDuration from "format-duration";

export const formatTime = (timeInSeconds) => {
  return formatDuration(timeInSeconds * 1000);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
