'use client'

import { useBuisnesses } from '@/hooks/useBuisness'
import style from './businesses.module.scss'
import { Buisness } from '@/types/peoples.interface';
import Link from 'next/link';

export function BusinessesComp() {

		const { data, isLoading } = useBuisnesses();

	return (
		<>
			<div className="flex justify-between items-center">
				<h4 className='text-3xl font-semibold'>Готовые бизнес-проекты</h4>
				<select className={`border-blue text-2xl border-2 rounded-3xl py-4 px-12`}>
					<option selected value="">Сортировать</option>
				</select>
			</div>
			<div className="mainContainer flex gap-8 h-full mt-10">
				<form className={`${style.filtres} h-full border-blue flex flex-col border-4 rounded-xl p-8 justify-start`}>
					<u className='text-2xl font-semibold'>Фильтры</u>

					<div className="catrgory flex flex-col gap-3 mt-10">

						<label className='text-xl font-semibold'>Название</label>
						<input className='border-b-2 border-blue py-2 pr-2' type="search" placeholder='Введите название проекта' />

						<label className='text-xl font-semibold'>Цена от</label>
						<input className='border-b-2 border-blue py-2 pr-2' type="number" placeholder='Введите минимальную цену проекта' />
						<label className='text-xl font-semibold'>Цена до</label>
						<input className='border-b-2 border-blue py-2 pr-2' type="number" placeholder='Введите максимальную цену проекта' />

						<label className='text-xl font-semibold'>Окупаемость от</label>
						<input className='border-b-2 border-blue py-2 pr-2' type="number" placeholder='Минимальный срок в месяцах' />
						<label className='text-xl font-semibold'>Окупаемость до</label>
						<input className='border-b-2 border-blue py-2 pr-2' type="number" placeholder='Максимальный срок в месяцах' />

						<label className='text-xl font-semibold'>Категория</label>
						<select className={`border-2 rounded-xl py-4 pr-12 pl-2`}>
							<option selected value="">Выбирите категорию</option>
						</select>

						<label className='text-xl font-semibold'>Направление</label>
						<select className={`border-2 rounded-xl py-4 pr-12 pl-2`}>
							<option selected value="">Выбирите направление</option>
						</select>
					</div>

					<button type='submit' className={`${style.btnSubmit} mt-12`}>Подтвердить</button>
				</form>
				{data && !isLoading ? (
					<>
						<div className={`${style.projectsContainer} flex flex-col`}>
							<h2 className='text-3xl font-bold mt-6'>Все проекты</h2>
							<span className='text-xl text-slate-500'>Всего проектов: {data?.length}</span>

							<div className={`${style.projectsContainer} flex flex-row flex-wrap gap-10 mt-3`}>
								{data.map((product: Buisness) => (
									<Link href={`/Buisness/${product.id}`} className={`${style.card} flex flex-col border-2 rounded-xl border-blue cursor-pointer hover:-translate-y-2 transition-all`}>
										<img className='rounded-t-xl' src={product.images[0]} alt={product.title} />
										<div className="descr px-10 py-6 flex flex-col gap-0">
											<h2 className='text-2xl font-semibold'>{product.title}</h2>
											<span>Город: <b>{product.city}</b></span>
											<span>Категория:  <b>{product.category}</b></span>
											<div className="price flex flex-row gap-3">
												<span>Стоимость:</span>
												<div className="wkhd flex flex-col gap-1">
													<span>от <b className='text-xl'>{product.money[0]} р.</b></span>
													<span>до <b className='text-xl'>{product.money[1]} р.</b></span>
												</div>
											</div>
											<span>Окупаемость за: <b>{product.payback} месяца</b></span>
										</div>
									</Link>
								))}
							</div>
						</div>
					</>
				) : (
					<h2 className='text-4xl text-slate-500'>Проекты не найдены! Подождите немного</h2>
				)}

			</div>
		</>
	)
}