const Button = ({ label, iconURL, className }) => {
	return (
		<button
			className={`${className || 'bg-coral-red border-coral-red text-white'} 
            p-btn border-[1px] border-solid text-b flex justify-center items-center gap-3 font-montserrat rounded-full w-[fit-content]`}
		>
			{label}
			{iconURL && (
				<img
					src={iconURL}
					alt='button navigation icon'
					className='rounded-full bg-white w-[20px]'
				/>
			)}
		</button>
	)
}

export default Button
