import Buisnesses from "@/services/buisness.service";
// import { Buisness } from "@/types/peoples.interface";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import { AxiosResponse } from "axios";


export const useBuisnesses = () => {
	return useQuery({
		queryKey: ['getBuisnesses'],
		queryFn: () => Buisnesses.getBuisnesses(),
		select: (data) => data.data
	});
}

export const useBuisness = (id: string) => {
	return useQuery({
		queryKey: ['getBuisness'],
		queryFn: () => Buisnesses.getBuisness(id),
		select: (data) => data.data,
	});
}