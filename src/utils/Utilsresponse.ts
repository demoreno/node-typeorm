
export function utilsResponse(res,code,data,errors) {
    res.send({
        code : code,
        message : 'ok',
        error : errors,
        data : {
            rows : data
        }
    });
}