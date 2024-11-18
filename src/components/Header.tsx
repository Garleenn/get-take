import Link from 'next/link'
import style from './Header.module.scss'
import { MdMenu } from 'react-icons/md'

export function Header() {


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
						<li><Link className='a-hover' href={'#'}>Найти</Link></li>
						<li><Link className='a-hover' href={'/login'}>Войти</Link></li>
					</ul>
				</nav>
				<MdMenu size={36} className={style.burgerMenu} />
			</div>
		</>
	)
}