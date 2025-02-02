function encodeObject(obj) {
    const jsonString = JSON.stringify(obj);
    const base64String = btoa(jsonString);
    return base64String;
}

export default encodeObject;
