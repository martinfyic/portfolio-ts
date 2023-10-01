export interface PageParams {
	params: Params;
	searchParams?: SearchParams;
}

export interface Params {
	slug: string;
}

export interface SearchParams {
	q: string;
}
