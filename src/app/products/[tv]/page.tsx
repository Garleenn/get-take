'use client'

import Image from "next/image";
import style from './tv.module.css'
import { useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
// import { Metadata } from "next";

// export const metadata: Metadata = {  только на ISR, SSR, SSG
// 	title: `Название страницы`,
// 	description: `Описание`
// }

export default function Tv() {

	const {replace, push, refresh} = useRouter();

	const pathName = usePathname();

	const params = useParams();

	useEffect(() => {
		console.log(params);
	}, [pathName]);

	return (
		<>
			<div className={`${style.f52} text-5xl`} onClick={() => push('/')}>{pathName}</div>
			<Image src='/image.png' alt='react-rulit' width={200} height={200} />
			<button className="cursor-pointer" onClick={() => refresh()}>Перезагрузить страницу</button>
		</>
	)
}