import { Metadata } from "next";
import { BusinessesComp } from "./BusinessesComp";

export const metadata: Metadata = {
  title: "Все бизнес-проекты",
  description: "Здесь вы можете найти проекты и идеи для вашего бизнеса",
};

export default function Buisness() {


	return (
		<>
			<BusinessesComp />
		</>
	)
}