
export const getShrineSearch = async () => {
  const url = '/api/shrines/index';
  const res = await axios.get(url, {
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    let errorMessage = error.response;
    switch (error.response?.status) {
      case 419:
        location.href = '/';
        errorMessage.message = 'セッションが切れたため画面を再読み込みします。'
        return errorMessage;
    }
    console.log(error);
    return errorMessage;
  })

  return res;
}
