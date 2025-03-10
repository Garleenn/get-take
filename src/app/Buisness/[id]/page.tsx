import { Metadata } from "next";
import { BuisnessComp } from "./BuisnessComp";

export const metadata: Metadata = {
  title: "Главная",
  description: "Здесь вы можете найти партнёров для вашего бизнеса",
};

export default function Buisness() {


	return (
		<>
			<BuisnessComp />
		</>
	)
}