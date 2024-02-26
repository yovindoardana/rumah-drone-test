export default function showFormattedDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
//   return new Date(date).toLocaleDateString("id-ID", options);
  return new Date(date).toLocaleDateString("id-ID", options);
}
