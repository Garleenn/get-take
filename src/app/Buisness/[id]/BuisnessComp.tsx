'use client'

import style from '../buisness.module.scss'
import { useCallback, useState } from 'react';
import { useParams } from "next/navigation"
import { useBuisness } from '@/hooks/useBuisness';

export function BuisnessComp() {

	const { id } = useParams();

	const [indexOfImage, setIndexOfImage] = useState(0);

	const { data, isError, isLoading } = useBuisness(id);

	const handleSelectImage = useCallback((index: number) => {
		setIndexOfImage(index);
	}, []);

	return (
		<>
			{ !isLoading ? (
				<div className={`${style.buisnessContainer} flex mx-4 my-20`}>
					{ data && !isError ? (
						<div className='card flex gap-8'>
							{data.images.length && (
								<div className={`${style.images} flex flex-col gap-2`}>
									<img className={style.mainImage} src={data.images[indexOfImage]} alt={data.title} />
									<div className="images-small flex gap-4 flex-wrap">
										{data.images.map((image: string, index: number) => (
											<img onClick={() => handleSelectImage} className={`${index === indexOfImage ? style.activeImage : style.imageSmall}`} src={image} />
										))}
									</div>
								</div>
							)}
							<div className={`${style.infoBlock} flex flex-col gap-3`}>
								<h1 className='text-4xl font-bold'>{data.title}</h1>
								<p className='text-slate-500'>{data.description}</p>
								<span>Категория: <b>{data.category}</b></span>
								<span>Город: <b>{data.city}</b></span>
								<span>Оформление: <b>{data.form}</b></span>
								<span>Доля: <b>{data.precent[0]}</b> на <b>{data.precent[1]}</b> в сторону <b>{data.precent[0] >= data.precent[1] ? 'предпринимателя' : 'инвестора'}</b></span>
								<span>Приблизительный срок окупаемости: <b>{data.payback} месяца(-ев)</b></span>
							</div>
						</div>
					) : (
						<h1>Ошибка, такого бизнеса нет или он был удалён</h1>

					)}
				</div>
			) : (
				<h1>Загрузка...</h1>
			)}
		</>
	)
}