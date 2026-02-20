/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		fontSize: {
			fontbtw: '1.78rem', 
		  },
		fontWeight: {
			extrathin: '50', 
			littlelarge: '550'
		  },
		colors: {
		  customBlue: '#0F1B8D',
		  navBox: '#242425',
		  buttonColor: '#3D63DD',
		  buttonHover: '#008ECF',
		  textcolor: '#93B4FF',
		  textBlue: '#D5E2FF',
		  modalHover: '#393A40',
		  cardBg:'#19191B',
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		fontFamily: {
		  sans: ['Poppins', 'sans-serif'],
		},
		keyframes: {
		  twinkle: {
			'0%, 100%': { transform: 'scale(1)' },
			'50%': { transform: 'scale(0.2)' },
		  },
		  'spin-clockwise': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		  },
		  'spin-anticlockwise': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(-360deg)' },
		  },
		  'spin-2x-clockwise': {
			'0%': { transform: 'rotate(0deg)' },
			'50%': { transform: 'rotate(360deg)' },
			'100%': { transform: 'rotate(0deg)' },
		  },
		},
		animation: {
		  twinkle: 'twinkle 4s ease-in-out infinite',
		  'spin-clockwise': 'spin-clockwise 5s linear infinite',
		  'spin-anticlockwise': 'spin-anticlockwise 5s linear infinite',
		  'spin-2x-clockwise': 'spin-2x-clockwise 10s linear infinite',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  