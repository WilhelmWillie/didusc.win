import moment from "moment";

function formatDate(date) {
  return moment(new Date(date)).format("MMM DD, YYYY");
}

export default formatDate;
