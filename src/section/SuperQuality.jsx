import Button from '../components/Button'
import { shoe8 } from '../assets/images'
function SuperQuality() {
	return (
		<div className='w-full px-custom py-20 flex justify-start items-center gap-20 md:flex-row flex-col'>
			<div className='flex flex-col items-start gap-10 py-20'>
				<h2 className='text-h font-semibold font-montserrat'>
					We&nbsp;Provide&nbsp;You{' '}
					<span className='text-coral-red'>Super Quality</span> Shoes
				</h2>
				<p className='text-b text-slate-500 font-palanquin'>
					Ensuring premium comfort and style, our meticulously crafted<br/>
					footwear is designed to elevate your experience, providing<br/>
					you with unmatched quality, innovation, and a touch of
					elegance.
				</p>
				<p className='text-b text-slate-500 font-palanquin'>
					Our dedication to detail and excellence ensures your
					satisfaction
				</p>
				<Button label='view details' />
			</div>

			<div>
				<img
					className='md:w-[570px] md:min-w-[auto] w-[570px] min-w-[auto]'
					src={shoe8}
					alt='Super Quality Shoes'
				/>
			</div>
		</div>
	)
}

export default SuperQuality
