import { MainComp } from './Main'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description: "Здесь вы можете найти партнёров для вашего бизнеса",
};


export default function MainPage() {


	return (
		<>
			<MainComp />
		</>
	)
}