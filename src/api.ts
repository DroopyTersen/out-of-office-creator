import eachDayOfInterval from "date-fns/eachDayOfInterval";

export async function createOutOfOfficeEvents({ flowUrl, start, end }) {
  if (!flowUrl) throw new Error("You must specify a Flow Url");
  let days = eachDayOfInterval({ start, end });
  await Promise.all(
    days.map(date => {
      return postToFlow({ flowUrl, date });
    })
  );
}

const postToFlow = ({ date, flowUrl = "" }) => {
  return fetch(flowUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ start: setHour(date, 8), end: setHour(date, 17) })
  });
};

function setHour(d: Date, time: number) {
  let newDate = new Date(d.getTime());
  newDate.setHours(time);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
}
