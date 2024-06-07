import Button from '../components/Button'
import { arrowRight } from '../assets/icons/index.js'
function Hero() {
	return (
		<section
			id='home'
			className='w-full min-h-svh px-custom md:flex md:justify-between md:items-center block'
		>
			<div className='md:inline-block md:h-fit flex flex-col justify-center items-start h-svh'>
				<p className='font-montserrat text-b text-coral-red mb-12'>
					Our Summer collections
				</p>
				<h1 className='font-palanquin md:text-hero font-semibold tracking-tight text-hero-md'>
					<span className='relative z-10 bg-white'>
						The New&nbsp;Arrival
					</span>
					<br />
					<span className='text-coral-red'>Nike</span> Shoes
				</h1>
				<p className='font-montserrat text-b text-slate-700 tracking-tight mb-16'>
					Discover stylish Nike arrivals, quality comfort, and <br />
					innovation for your active life.
				</p>
				<Button label='Shop Now' iconURL={arrowRight} />
			</div>
		</section>
	)
}

export default Hero
