/* eslint-disable prettier/prettier */
const apiGetProduct = 'https://fakestoreapi.com/products';

async function getProductFromServer() {
    try {
        let response = await fetch(apiGetProduct);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}

export default {getProductFromServer};
