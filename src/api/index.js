const sputnikUrl =
  "https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco";
const prpUrl =
  "https://api.apify.com/v2/actor-tasks/qPvzsNfzXaYmhM8fn/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco";

export const getSputnik = async () => {
  const response = await fetch(sputnikUrl, { method: "get" });

  if (!response.ok) throw new Error("response not ok");
  const data = await response.json();
  return data;
};

export const getPrp = async () => {
  const response = await fetch(prpUrl, { method: "get" });

  if (!response.ok) throw new Error("response not ok");
  const data = await response.json();
  return data;
};
