export const formatDate = (date, locale = 'en-US') => {
    if (!date) return;

    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(new Date(date));
};
export const timeElapsed = (date) => {
    if (!date) return;
    const now = new Date();

    const elapsed = now - new Date(date);
    const second = Math.floor(elapsed / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const days = Math.floor(hour / 24);
    const month = Math.floor(days / 30);
    const year = Math.floor(month / 12);
    if (year > 0) {
        return `${year} năm trước`;
    }
    if (month > 0) {
        return `${month} tháng trước`;
    }
    if (days > 0) {
        return `${days} ngày trước`;
    }
    if (hour > 0) {
        return `${hour} giờ trước`;
    }
    if (minute > 0) {
        return `${minute} phút trước`;
    }
    return `${second} giây trước`;
};
