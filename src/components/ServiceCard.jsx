const ServiceCard = ({ imgURL, label, subtext, className }) => {
	return (
		<div
			className={
				'px-28 py-20 shadow-3xl flex flex-col items-start justify-start gap-5 rounded-[5rem] ' +
				className
			}
		>
			<img
				src={imgURL}
				alt='service related icons'
				className='w-[35px] p-2 bg-coral-red rounded-full'
			/>
			<h3 className='text-h font-semibold'>{label}</h3>
			<p className='text-slate-gray text-b'>{subtext}</p>
		</div>
	)
}

export default ServiceCard
