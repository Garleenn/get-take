'use client'

import { IoMdCheckmark } from 'react-icons/io'
import style from './Home.module.scss'

interface IProps {
	filters: {
		isInvestor: boolean,
	},
	setFilters: (filters: any) => void,
}

export function Filters(props: IProps) {

	
	
	return (
		<>
		
		<div className="flex flex-col gap-8 items-center my-8">
			<h2 className='font-bold text-3xl'>Что ищете?</h2>
			<div className="flex gap-12">
					<button onClick={() => props.setFilters((prev: any) => ({...prev, isInvestor: true})) } className={style.btnChoose}>Инвестора {props.filters.isInvestor && (<IoMdCheckmark className={style.mark} />)}</button>
					<button onClick={() => props.setFilters((prev: any) => ({...prev, isInvestor: false})) } className={style.btnChoose}>Бизнес {!props.filters.isInvestor && (<IoMdCheckmark className={style.mark} />)}</button>
			</div>
		</div>

		<form className="filters flex-col xl:flex-row flex gap-4 xl:gap-10 justify-between items-center w-full mt-6">

				<select className={`${style.select} bg-black text-white`}>
					<option value="" selected>Тип бизнеса:</option>
					<option value="investor">Инвестор</option>
					<option value="buisness">Предприниматель</option>
				</select>

				<select className={`${style.select} bg-black text-white`}>
					<option value="" selected>Оформление:</option>
					<option value="investor">ООО</option>
					<option value="buisness">ИП</option>
				</select>

				<select className={`${style.select} bg-black text-white`}>
					<option value="" selected>Срок окупаемости:</option>
					<option value="investor">3-6 месяцев</option>
					<option value="buisness">6-12 месяцев</option>
					<option value="buisness">12-18 месяцев</option>
					<option value="buisness">18-24 месяцев</option>
					<option value="buisness">более 24 месяцев</option>
				</select>

				<select className={`${style.select} bg-black text-white`}>
					<option value="" selected>Стоимость</option>
					<option value="investor">Инвестор</option>
					<option value="buisness">Предприниматель</option>
				</select>

				<select className={`${style.select} bg-black text-white`}>
					<option value="" selected>Город</option>
					<option value="investor">Инвестор</option> 
					<option value="buisness">Предприниматель</option>
				</select>
			</form>
		</>
	)
}