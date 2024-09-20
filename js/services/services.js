const postData = async (url, data) => {
  // await браузер начнет дожидаться, когда код полностью исполниться, и тольк потом пойдет дальше (вплоть до 30 сек)
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
  return await result.json();
}
const getData = async (url) => {
  const result = await fetch(url);
  if (!result.ok) {
    throw new Error(`could not fetch ${url}, status: ${result.status}`);
  }
  return await result.json();
}
export { postData };
export { getData };