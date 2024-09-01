export const formatDate = (date, locale = 'en-US') => {
    if (!date) return;

    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(new Date(date));
};
