import Card from '../components/Card'
import { products } from '../constants/index.js'
function PopularProducts() {
	return (
		<div className='w-full px-custom py-20'>
			<h2 className='font-semibold font-montserrat text-h'>
				Our <span className='text-coral-red'>Popular</span> Products
			</h2>
			<p className='text-slate-500 text-b'>
				Experience top-notch quality and style with our sought-after
				selections. Discover a world of comfort, design, and value
			</p>

			<div className='flex flex-wrap p-16 gap-10 content-center justify-center'>
				{products.map((product) => (
					<Card
						key={product.name}
						name={product.name}
						imgURL={product.imgURL}
						price={product.price}
						width="282px"
					/>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
