import { Metadata } from "next";
import { HomeComp } from "./Home";

export const metadata: Metadata = {
  title: "Главная",
  description: "Здесь вы можете найти партнёров для вашего бизнеса",
};

export default function HomePage() {


	return (
		<>
			<HomeComp />
		</>
	)
}