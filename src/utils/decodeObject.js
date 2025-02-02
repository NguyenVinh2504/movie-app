function decodeObject(encodedData) {
    try {
        const decodedString = atob(encodedData);
        const obj = JSON.parse(decodedString);

        return obj;
    } catch {
        return {};
    }
}
export default decodeObject;
