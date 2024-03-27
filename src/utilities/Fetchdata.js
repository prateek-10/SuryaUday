export const foodoptions = {
  method: "GET",
  headers: {
    "X-Api-Key": "hrmzeA25L5cVsF0nEU1ylQ==xbkUsTHtzxtmPhFK",
  },
};

export const Fetchdata = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
