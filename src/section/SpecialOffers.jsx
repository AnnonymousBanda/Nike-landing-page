import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons/index'
import Button from '../components/Button'
function SpecialOffers() {
	return (
		<div className='w-full px-custom py-20 flex justify-start lg:items-center items-start gap-28 lg:flex-row flex-col'>
			<div>
				<img
					className='lg:w-[670px] lg:min-w-[auto] w-[570px] min-w-[auto]'
					src={offer}
					alt='Super Quality Shoes'
				/>
			</div>

			<div className='flex flex-col items-start gap-10 py-20'>
				<h2 className='text-h font-semibold font-montserrat'>
					<span className='text-coral-red'>Special</span> Offer
				</h2>
				<p className='text-b text-slate-500 font-palanquin'>
					Embark on a shopping journey that redefines your experience
					with <br />
					unbeatable deals. From premier selections to incredible
					savings, <br />
					we offer unparalleled value that sets us apart.
				</p>
				<p className='text-b text-slate-500 font-palanquin'>
					Navigate a realm of possibilities designed to fulfill your{' '}
					<br />
					unique desires, surpassing the loftiest expectations. Your{' '}
					<br />
					journey with us is nothing short of exceptional.
				</p>
				<div className='flex justify-start xs:gap-20 gap-10'>
					<Button label='Shop&nbsp;now' iconURL={arrowRight} />
					<Button label='Learn&nbsp;more' className="bg-transparent text-black"/>
				</div>
			</div>
		</div>
	)
}

export default SpecialOffers
