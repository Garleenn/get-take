'use client'

import style from './Home.module.scss'
import { Filters } from './Filters';
import { Buisness, Investor } from '@/types/peoples.interface';
import Link from 'next/link';
import { useState } from 'react';

const data = [
	{
		id: `6682gcbc71-cmjn-18h`,
		image: '/g82.jpg',
		name: `Иван Николаевич`,
		role: `Частный инвестор`,
		description: `Занимаюсь инвестициями уже более 12 лет`,
		money: [1000000 ,5200000]
	},
	{
		id: `6682gcbc71-cmjn-18h3`,
		image: '/g82.jpg',
		name: `Иван Николаевич`,
		role: `Частный инвестор`,
		description: `Занимаюсь инвестициями уже более 12 лет`,
		money: [1000000 ,5200000]
	},
	{
		id: `6682gcbc71-cmjn-18h2`,
		image: '/g82.jpg',
		name: `Иван Николаевич`,
		role: `Частный инвестор`,
		description: `Занимаюсь инвестициями уже более 12 лет`,
		money: [1000000 ,5200000]
	},
]

const buisnesses: Buisness[] = [
	{
		id: `6682gcbc71-cmjn-18h2`,
		images: ['/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg'],
		title: `Кофейня в центре Москвы`,
		category: `Оффлайн точка`,
		description: `Кофейня в центре Москвы, которая пупупупупупупупупупупупупупупупупупупупупупупупупупупупупупупупу`,
		city: `Москва`,
		form: `OOO`,
		precent: [40, 60],
		money: [5000000 ,10000000],
		payback: 24,
	},
	{
		id: `6682gcbc71-cmjn-18h2`,
		images: ['/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg', '/g82.jpg'],
		title: `Кофейня в центре Москвы`,
		category: `Оффлайн точка`,
		description: `Кофейня в центре Москвы, которая пупупупупупупупупупупупупупупупупупупупупупупупупупупупупупупупу`,
		city: `Москва`,
		form: `OOO`,
		precent: [40, 60],
		money: [5000000 ,10000000],
		payback: 24,
	}
]

export function HomeComp() {

	const [filters, setFilters] = useState({
		isInvestor: false
	});

	return (
		<>
			<div className={style.home}></div>
			<Filters filters={filters} setFilters={setFilters} />
			<div className="flex justify-center text-2xl mt-4 font-semibold"><h2>Результатов: 52</h2></div>
			{filters.isInvestor ? (
				<div className={`${style.investorsContainer} flex justify-center items-center mt-6 gap-5`}>
				{data ? (
					<>
						{data.map((investor: Investor) => (
							<Link href={`/investor/${investor.id}`} className={style.card} key={investor.id} >
								<div className={style.imgBlock}>
									<img src={investor.image} alt="Image" />
								</div>
								<div className="px-5 py-3 flex flex-col">
									<h2 className='font-semibold text-xl'>{investor.name}</h2>
									<span className=''>{investor.role}</span>
									<span className=''>Готов вложить от <b>{investor.money[0]}</b> до <b>{investor.money[1]}</b></span>
								</div>
							</Link>

						))}
					</>
				) : (
					<div className="flex justify-center text-2xl mt-4 font-semibold"><h2>Не удалось найти(</h2></div>
				)}
			</div>
			) : (
				<>
					{buisnesses ? (
						<div className={`${style.buisnessContainer} flex flex-col my-6 gap-5`}>
							{buisnesses.map((buisness: Buisness, index: number) => (
							<Link href={`/buisness/${buisness.id}`} className={`${style.buisnessCard} flex flex-row gap-6 p-8 justify-between`} key={buisness.id} >
								<div className="flex gap-6">
									<div className={`${style.imageContainer}`}>
										<img src={buisness.images[0]} />
										<div className={style.imagesSmall}>
												{buisness.images.map((image: string, index: number) => (
													<>
														{index <= 5 && (<img src={image} />)}
													</>
												))}
										</div>
									</div>
									<div className={`${style.infoContainer} flex flex-col gap-3`}>
											<h2 className='font-semibold text-2xl'>{buisness.title}</h2>
											<p className='text-slate-500'>{buisness.description.substring(0, 90)} {buisness.description.length > 90 && '...'}</p>
											<span>Тип: <b>{buisness.category}</b></span>
											<span>Город: <b>{buisness.city}</b></span>
											<span>Оформление: <b>{buisness.form}</b></span>
											<span>Доля: <b>{buisness.precent[0]}</b> на <b>{buisness.precent[1]}</b> в сторону <b>{buisness.precent[0] >= buisness.precent[1] ? 'предпринимателя' : 'инвестора'}</b></span>
											<span>Приблизительный срок окупаемости: <b>{buisness.payback} месяца(-ев)</b></span>
									</div>
								</div>

									<div className={`${style.priceContainer} flex flex-col justify-end items-end gap-3 text-3xl`}>
											<h2><i>Оценка стоимости:</i></h2>
											<span className='mr-10'>от <i className='text-4xl font-bold'>{buisness.money[0]} р.</i></span>
											<span>до <i className='text-4xl font-bold'>{buisness.money[1]} р.</i></span>
									</div>
							</Link>
							))}
						</div>
					) : (
						<div className="flex justify-center text-2xl mt-4 font-semibold"><h2>Не удалось найти(</h2></div>
					)}
				</>
			)}
		</>
	)
}