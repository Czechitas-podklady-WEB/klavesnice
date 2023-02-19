const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			include: [path.resolve(__dirname, 'components/icons')],
			use: [
				{
					loader: 'svg-sprite-loader',
				},
			],
		})
		return config
	},
	images: {
		unoptimized: true,
	},
}

module.exports = nextConfig
