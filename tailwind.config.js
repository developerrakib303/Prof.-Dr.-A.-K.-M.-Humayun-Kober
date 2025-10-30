/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '2rem',
				xl: '2rem',
			},
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Primary brand - Deep Blue
				primary: {
					50: '#E8EAF6',
					100: '#C5CAE9',
					500: '#3F51B5',
					600: '#3949AB',
					900: '#1A237E',
					DEFAULT: '#3F51B5',
				},
				// Secondary - Maroon
				secondary: {
					500: '#7B1FA2',
					600: '#6A1B9A',
					DEFAULT: '#7B1FA2',
				},
				// Neutral Grays
				neutral: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					500: '#A3A3A3',
					700: '#404040',
					900: '#171717',
				},
				// Semantic colors
				success: '#059669',
				warning: '#D97706',
			},
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				lato: ['Lato', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},
			fontSize: {
				'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
				'title-xl': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
				'title-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
				'title-md': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
				'title-sm': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
				'body-xl': ['20px', { lineHeight: '1.6' }],
				'body-lg': ['18px', { lineHeight: '1.6' }],
				'body': ['16px', { lineHeight: '1.5' }],
				'small': ['14px', { lineHeight: '1.5' }],
				'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
			},
			spacing: {
				'xs': '8px',
				'sm': '16px',
				'md': '24px',
				'lg': '32px',
				'xl': '48px',
				'2xl': '64px',
				'3xl': '96px',
				'4xl': '128px',
			},
			borderRadius: {
				'sm': '8px',
				'md': '12px',
				'lg': '16px',
				'xl': '24px',
				'full': '9999px',
			},
			boxShadow: {
				'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
				'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
				'modal': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
				'nav-scroll': '0 1px 3px rgba(0, 0, 0, 0.1)',
			},
			animation: {
				'fade-in': 'fadeIn 0.25s ease-out',
				'slide-up': 'slideUp 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			transitionDuration: {
				'fast': '200ms',
				'base': '250ms',
				'slow': '300ms',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
