import { Home } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Servicios } from './pages/servicios'
import { Contactenos } from './pages/contactenos'
import { Sedes } from './pages/quienes-somos/sedes'
import ContainerBtns from 'components/ContainerBtns'
import { NavAtalaya } from './components/NavAtalaya'
import { DataTreatment } from './pages/dataTreatment'
import { PrivacyPolicies } from './pages/privacyPolicies'
import { FooterAtalaya } from './components/FooterAtalaya'
import { SobreNosotros } from './pages/quienes-somos/sobre-nosotros'
import { SeguridadVial } from './pages/quienes-somos/seguridad-vial'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { SistemaGestionIntegrado } from './pages/quienes-somos/sistema-gestion-integrado'


function App() {
	return (
		<Router>
      <ContainerBtns/>
        <NavAtalaya />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/servicios'>
            <Servicios />
          </Route>
          <Route exact path='/contactenos'>
            <Contactenos />
          </Route>
          <Route exact path='/dataTreatment'>
            <DataTreatment />
          </Route>
          <Route exact path='/privacyPolicies'>
            <PrivacyPolicies />
          </Route>
          {/* quienes somos */}
          <Route exact path='/quienes-somos/sedes'>
            <Sedes />
          </Route>
          <Route exact path='/quienes-somos/seguridad-vial'>
            <SeguridadVial />
          </Route>
          <Route exact path='/quienes-somos/sistema-gestion-integrado'>
            <SistemaGestionIntegrado />
          </Route>
          <Route exact path='/quienes-somos/sobre-nosotros'>
            <SobreNosotros />
          </Route>
        </Switch>
        <FooterAtalaya />
		</Router>
	)
}

export default App
