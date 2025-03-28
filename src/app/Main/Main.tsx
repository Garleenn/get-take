'use client'

import style from './Main.module.scss'

const reviews = [
	{
		username: `Павел Дуров`,
		img: `https://yastatic.net/naydex/yandex-search/mf5IdM911/0d8a77Ph3B-/txAQojNHh3PpSoVlTwd4Kw1kO7er6_jT61hKs6Y2_4khXT5_UhsLoNwQbbX_gG7rZ5CdT8sJnkgPaSL2URtkvTia2K7_G8_-Z9DJborGOuwfoal2PWX2Q`,
		review: 5.0,
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere repellat recusandae cupiditate quidem, deleniti sequi tempore aliquid in voluptas exercitationem? Id, laboriosam dolorum esse doloremque quibusdam delectus iste sapiente?`,
	},
	{
		username: `Илон Маск`,
		img: `https://yastatic.net/naydex/yandex-search/mf6IdM103/0d8a77Ph3B-/txAQojNHh3PpSoVlTwd4Kw1kO7er6_jT61hKs6Y2_4khXT5_UhsLoV5TbfT5QmgqZlGdzwnI2JFMrvolyEC2NniBlul4XEx6YlLPr0VMMutepDvz_jm9E7fWw`,
		review: 4.5,
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere repellat recusandae cupiditate quidem, deleniti sequi tempore aliquid in voluptas exercitationem? Id, laboriosam dolorum esse doloremque quibusdam delectus iste sapiente?`,
	},
]

export function MainComp() {


	return (
		<>
			<div className={`${style.welcome} flex`}>
				<div className={`${style.leftBlock} flex flex-col items-center justify-center gap-8 p-12 text-4xl font-bold`}>
					<h2>Добро пожаловать</h2>
					<span>На</span>
					<h2 className='mb-12'>Buisness Hub!</h2>

					<button type="button" className='px-20 py-6 text-3xl border-white border-2 rounded-xl'>Войти</button>
				</div>

				<div className={`${style.rightBlock} flex flex-col items-center justify-center gap-8 p-12 text-3xl font-bold`}>
					<h2>Мы помагаем начинающим</h2>
					<span>Предпринимателям и профессиональным </span>
					<h2 className='mb-12'>Инвесторам найти друг друга! </h2>

					<button type="button" className='px-20 py-6 text-3xl border-blue border-2 rounded-xl'>Регистрация</button>
				</div>
			</div>

			<div className="justify-center text-center mt-24 flex flex-col">
				<h2 className='text-5xl blue font-bold mb-10'>О нас</h2>

				<p className='text-slate-500 text-center text-2xl'>Мы работаем с 2025 года и у нас уже помогли более тралалелотралала, поркуадива порквала? Бомбордиро крокодило, Лира лира лира и многим другим, у нас работают множество сотрудников и мы развиваем наш сервис каждый день йоу</p>
			</div>

			<div className="justify-center text-center mt-16 flex flex-col gap-6">
				<h2 className='text-5xl blue font-bold mb-2'>Отзывы</h2>

				{reviews.map((review: object) => (
					<div className={`${style.review} flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2`}>
						<div className="up-block flex items-center justify-between mb-2">
							<div className="info flex gap-3 items-center">
								<img src={review.img} className={style.userPhoto} alt="Лого" />
								<h3 className='text-xl'>{review.username}</h3>
							</div>
							<b className='text-xl blue'>{review.review}</b>
						</div>
						<p className='text-slate-500 text-base text-left'>{review.text}</p>
					</div>
				))}

			</div>
		</>
	)
}