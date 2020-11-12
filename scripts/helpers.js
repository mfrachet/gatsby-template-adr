exports.getNextId = (adrs) => {
  let lastId = 0;

  if (adrs && adrs.length > 0) {
    const lastAdr = adrs[adrs.length - 1];
    lastId = Number(lastAdr.split("-")[0]);
  }

  const nextId = lastId + 1;
  return nextId;
};

exports.formatDateOfToday = () => {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  const formattedToday = `${now.getFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

  return formattedToday;
};
