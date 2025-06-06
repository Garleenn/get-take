import Buisnesses from "@/services/buisness.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";


export const useBuisnesses = () => {
	const {data, isLoading} = useQuery({
		queryKey: ['getBuisnesses'],
		queryFn: () => Buisnesses.getBuisnesses(),
		select: (data) => data.data
	});

	return {data, isLoading}
}

export const useBuisness = (id: string) => {
	return useQuery({
		queryKey: ['getBuisness'],
		queryFn: () => Buisnesses.getBuisness(id),
		select: (data) => data.data,
	});
}