'use client'

import Link from 'next/link'
import style from './Header.module.scss'
import { MdMenu } from 'react-icons/md'
import { GoArrowDown } from 'react-icons/go'
import { useState } from 'react'

export function Header() {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={`${style.header} flex justify-between items-center gap-6`}>
				<Link href='/' className={style.logoContainer}>
					<img src="https://avatars.mds.yandex.net/i?id=85b9d0a99200acbab62183b94b1cf770_l-5229626-images-thumbs&n=13" alt="Лого" />
					<h2>Buisness Hub</h2>
				</Link>
				<nav className={style.nav}>
					<ul className='flex items-center gap-10'>
						<li><Link className='a-hover' href={'/'}>Главная</Link></li>
						<li><Link onClick={() => setIsOpen(!isOpen)} className='a-hover flex gap-2 items-center' href={'#'}>Найти <GoArrowDown /></Link></li>
						{isOpen && (
							<div className={`${style.menu} flex gap-12 text-2xl font-semibold p-6 border-2 border-blue rounded-xl`}>
								<u className={style.underline}><Link onClick={() => setIsOpen(!isOpen)} href={'/Businesses'}>Бизнес</Link></u>
								<u className={style.underline}><Link onClick={() => setIsOpen(!isOpen)} href={'/Investores'}>Инвестора</Link></u>
							</div>
						)}
						<li><Link className='a-hover' href={'/login'}>Войти</Link></li>
					</ul>
				</nav>
				<MdMenu size={36} className={style.burgerMenu} />
			</div>
		</>
	)
}