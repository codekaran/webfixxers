export const fetcher = async (params) => {
  let res = await fetch(
    `https://webfixxers-cms.herokuapp.com/getData?page=${
      params.split(",")[0]
    }&lang=${params.split(",")[1]}`
  );
  res = await res.json();
  let data = JSON.parse(res.data);
  data["path"] = params.split(",")[1] === "en" ? "/en" : "";
  data.meta.title = "";
  console.log(data);
  return data;
};
