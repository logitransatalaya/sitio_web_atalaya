import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavAtalaya } from 'components/NavAtalaya'
import { FooterAtalaya } from 'components/FooterAtalaya'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavAtalaya />
			<Component {...pageProps} />
			<FooterAtalaya />
		</>
	)
}

export default MyApp
