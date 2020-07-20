export const queryParser = (queryStr) => {
    const query = new URLSearchParams(queryStr);
    let data= {};
    for (let params of query.entries()) {
        data[params[0]] = params[1];
    }
    return data
}