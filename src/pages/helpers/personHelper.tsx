import ApiHelper from './apiHelper';
const baseUrl = 'https://60946848a7e53a0017952aac.mockapi.io/ap/v1';

const get_persons_per_page = (limit, page): any => {
    return ApiHelper.get(`${baseUrl}/persons?limit=${limit}&page=${page}`)
}

const add_new_person = (data): any => {
    return ApiHelper.post(`${baseUrl}/persons`, {data})
}

export {
    get_persons_per_page,
    add_new_person
}