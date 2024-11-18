export interface Investor {
	id: string,
	image: string,
	name: string,
	role: string,
	description: string,
	money: number[]
}

export interface Buisness {
	id: string,
	images: string[],
	title: string,
	category: string,
	description: string,
	city: string,
	form: string,
	precent: number[],
	money: number[],
	payback: number,
}