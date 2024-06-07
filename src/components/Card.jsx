import CardImg from './CardImg'
const Card = ({ name, imgURL, price, width}) => {
	return (
		<div>
			<CardImg key={name} imgURL={imgURL} width={width}/>
			<p className='font-palanquin font-semibold text-sh'>{name}</p>
			<p className='font-palanquin text-coral-red font-semibold text-b'>{price}</p>
		</div>
	)
}

export default Card
