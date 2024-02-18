let details = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

let finalObj = {};

function magic(obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      finalObj[parent + "_" + key] = obj[key];
    }
  }
}

magic(details, "details");
console.log(finalObj);
