import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../constants/index.js'
function Services() {
	return (
		<div className='w-full px-custom py-64 flex flex-wrap gap-[2rem]'>
			{services.map((service) => (
				<ServiceCard
					key={service.label}
					imgURL={service.imgURL}
					label={service.label}
					subtext={service.subtext}
					className='flex-grow basis-[40rem]'
				/>
			))}
		</div>
	)
}

export default Services
