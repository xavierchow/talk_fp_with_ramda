let collector = [];
const records = [];
const res = [];
const Model = "something";
for (const item of res) {
  collector.push(Model.findById(item.id));
  if (collector.length < 10) {
    continue;
  }

  Promise.all(collector).then(list => list.map(record => records.push(record)));
  collector = [];
}

if (collector.length) {
  Promise.all(collector).then(list => list.map(record => records.push(record)));
  collector = [];
}

return records;
