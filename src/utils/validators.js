export const LIMIT_COMMON_FILE_SIZE = 10 * 1024 * 1024; // 10MB;
export const ALLOW_COMMON_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

export const singleFileValidator = (file) => {
    if (!file || !file.name || !file.type) {
        return 'File is empty';
    }

    if (file.size > LIMIT_COMMON_FILE_SIZE) {
        return 'File size must be less than 10MB';
    }

    if (!ALLOW_COMMON_FILE_TYPES.includes(file.type)) {
        return 'File type is not allowed';
    }
    return null;
};
