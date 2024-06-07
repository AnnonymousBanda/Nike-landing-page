/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontSize: {
			hero: [
				'clamp(6rem, 1.8857rem + 5.3571vw, 9.6rem)',
				'clamp(9rem, 5.5714rem + 4.4643vw, 12rem)',
			],
			'hero-md': ['5rem', '6rem'],
			h: 'clamp(2.1rem, 1.7000rem + 1.2500vw, 3.5rem)',
			sh: 'clamp(1.8rem, 1.5143rem + 0.8929vw, 2.8rem)',
			b: 'clamp(1.5rem, 1.4429rem + 0.1786vw, 1.7rem)',
			xs: ['12px', '16px'],
			sm: ['14px', '20px'],
			base: ['16px', '19.5px'],
			lg: ['18px', '21.94px'],
			xl: ['20px', '24.38px'],
			'2xl': ['24px', '29.26px'],
			'3xl': ['28px', '50px'],
			'4xl': ['48px', '58px'],
			'8xl': ['96px', '106px'],
		},
		screens: {
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
			'4xl': '2560px',
		},
		extend: {
			fontFamily: {
				palanquin: ['Palanquin', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: '#ECEEFF',
				'coral-red': '#FF6452',
				'slate-gray': '#6D6D6D',
				'pale-blue': '#F5F6FF',
				'white-400': 'rgba(255, 255, 255, 0.80)',
			},
			boxShadow: {
				'3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
			},
			backgroundImage: {
				hero: "url('assets/images/collection-background.svg')",
				card: "url('assets/images/thumbnail-background.svg')",
			},
			screens: {
				wide: '1440px',
			},
			padding: {
				btn: '0.5em 1em',
				custom: 'clamp(2.8rem, 1.7714rem + 3.2143vw, 6.4rem)',
			},
		},
	},
	plugins: [],
}
