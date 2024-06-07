import { reviews } from '../constants/index.js'
import CustomerCard from '../components/CustomerCard.jsx'
const CustomerReviews = () => {
	return (
		<div className='w-full px-custom py-[10rem] flex flex-col items-start justify-center gap-28'>
			<div >
				<h1 className='text-h font-semibold font-palanquin'>
					What Our <span className='text-coral-red'>Customers</span>{' '}
					Say?
				</h1>
				<p className='text-b text-slate-gray'>
					Hear genuine stories from our satisfied customers about
					their exceptional experiences with us.
				</p>
			</div>
			<div className='flex items-center justify-around gap-14'>
				{reviews.map(({ customerName, imgURL, feedback }) => (
					<CustomerCard
						key={customerName}
						imgURL={imgURL}
						customerName={customerName}
						feedback={feedback}
					/>
				))}
			</div>
		</div>
	)
}

export default CustomerReviews
