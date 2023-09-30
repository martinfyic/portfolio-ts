export interface ICertificate {
	name: string;
	slug: string;
	url: string;
	image: string;
	description: string;
	dateStart?: string;
	dateFinished: string;
	linkCurso: string;
	place: string;
	type: 'course' | 'career';
}
