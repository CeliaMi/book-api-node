
export const handleHttError = (res, message = "something happend!", code = 403) => {
    res.satuts(code);
    res.send({error : message });
}