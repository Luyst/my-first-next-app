export type SearchParams = {
    location: string;
    date: string;
    guests: number;
};

export function handleSearch(params: SearchParams) {
    // TODO: có thể navigate đến 1 page khác hoặc gọi API
    console.log("Search parameters:", params);

    // Ví dụ nếu muốn điều hướng:
    // router.push(`/search?location=${params.location}&date=${params.date}&guests=${params.guests}`);
}
