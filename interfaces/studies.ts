export interface ICertificate {
	dateFinished: string;
	dateStart?: string;
	description: string;
	image: string;
	linkCurso: string;
	courseHours: number;
	courseWeeks: number;
	name: string;
	place: string;
	slug: string;
	type: 'course' | 'career';
	url: string;
}
