import {
	CustomerReviews,
	Footer,
	Hero,
	Services,
	SpecialOffers,
	SuperQuality,
	PopularProducts,
} from './section'
import Nav from './components/Nav'

const App = () => (
	<>
		<main className='relative w-full max-container'>
			<Nav />
			<section className='w-full max-container'>
				<Hero />
			</section>
			<section className='w-full max-container'>
				<PopularProducts />
			</section>
			<section className='w-full max-container'>
				<SuperQuality />
			</section>
			<section className='w-full max-container'>
				<Services />
			</section>
			<section className='w-full max-container'>
				<SpecialOffers />
			</section>
			<section className='w-full max-container bg-pale-blue'>
				<CustomerReviews />
			</section>
			<section className='w-full max-container bg-slate-900'>
				<Footer />
			</section>
		</main>
	</>
)

export default App
