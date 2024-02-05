export interface ProductInfo {
	id: number;
	name: string;
	price: number;
	offerPrice: number;
	discount: number;
	image: string;
	colors: Record<string, unknown>[];
}

export type SortBy = "lowToHigh" | "highToLow";