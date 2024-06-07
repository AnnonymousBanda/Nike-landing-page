import { headerLogo } from '../assets/images/index.js'
import { hamburger } from './../assets/icons/index.js'
import { navLinks } from './../constants/index.js'

function Nav() {
	return (
		<header className="absolute z-10 w-full px-custom sm:py-8 py-6 text-b max-container">
			<nav className='flex justify-between items-center max-container'>
				<a href='/'>
					<img
						src={headerLogo}
						alt='Nike logo'
						width={130}
						height={29}
					/>
				</a>
				<div className='flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map((a) => (
						<a
							key={a.label}
							href={a.href}
							className='font-monts errat text-lg text-slate-gray'
						>
							{a.label}
						</a>
					))}
				</div>
				<div className='flex  gap-2 text-lg  font-medium font-montserrat max-lg:hidden wide:mr-28'>
					<a href='/'>Sign in</a>
					<span>/</span>
					<a href='/'>Explore now</a>
				</div>
				<div className='hidden max-lg:block'>
					<img
						src={hamburger}
						alt='hamburger icon'
						width={25}
						height={25}
					/>
				</div>
			</nav>
		</header>
	)
}

export default Nav
