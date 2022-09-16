import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/';

function listGet(search) {
	return axios.get(url + 'search.php?s=' + search);
}

function detailGet(detail) {
	return axios.get(url + 'lookup.php?i=' + detail);
}

export { listGet, detailGet };
