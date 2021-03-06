export const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE0YzQ0MDdlNzE4NzAwMjBlMzhlZWUiLCJpYXQiOjE2MTE5NzM2OTZ9.HjdXeC-ct5_9dcz1s1wBSktBWKpaGD8ymQoXMsyoxHU",
};

export const user = "https://coding-challenge-api.aerolab.co/user/me";
export const productsUrl = "https://coding-challenge-api.aerolab.co/products";
export const redeemUrl = "https://coding-challenge-api.aerolab.co/redeem";
export const historyUrl = "https://coding-challenge-api.aerolab.co/user/history";
export const coinsUrl = "https://coding-challenge-api.aerolab.co/user/points";
const API_URL = 'https://coding-challenge-api.aerolab.co';

export const fetchUser = async (setUserData) => {
  let requestOptions = {
		method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  try {
    const response = await fetch(user, requestOptions);
    const newUser = await response.json();
    setUserData(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (setProductData) => {
	let requestOptions = {
		method: 'GET',
		headers: headers,
		redirect: 'follow'
	};

	try {
		const result = await fetch(productsUrl, requestOptions);
		const products = await result.json();
		setProductData(products);
	} catch (error) {
		console.log('error', error);
	}
}; 

export const postCoins = async (amount, userData, setUserData) => {
  let jason=JSON.stringify({ amount: amount});
  let requestOptions = {
		method: 'POST',
    headers: headers,
    body: jason,
		redirect: 'follow'
	};
  try {
    const response = await fetch(`${API_URL}/user/points`, requestOptions);
    const newPointsData  = await response.json();

    const newPointsState  = { ...userData };
    newPointsState.points = newPointsData['New Points'];
    setUserData(newPointsState);
  } catch (error) {
    console.log("error", error);
  }
};

export const getRedeem = async (productId) => {
  let jason= JSON.stringify({ productId: productId});
  let requestOptions = {
		method: 'POST',
    headers: headers,
    body: jason,
		redirect: 'follow'
	};
  try {
    await fetch(redeemUrl, requestOptions);
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export const fecthHistory = async (setHistory) => {
  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const result = await fetch(historyUrl, requestOptions);
    const data = await result.json();
    setHistory(data);
  } catch (error) {
    console.log("error", error);
  }
};
