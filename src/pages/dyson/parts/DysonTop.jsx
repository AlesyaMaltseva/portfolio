import dyson from '../css/dyson.module.css'
import logo from '../img/dyson/logo.png'
import { Link } from 'react-router-dom'


function DysonTop() {

return <>
<div className={dyson.dysonTopMenu} id="top">
	<div className={dyson.fw1025}>
		<Link to="/dyson"><img src={logo} /></Link>
		<Link to="/dyson/wash-and-dry/"><span>Dyson Airblade Wash+Dry</span></Link>
		<Link to="/dyson/9kJ/"><span>Dyson Airblade 9kJ</span></Link>
		<Link to="/dyson/V/"><span>Dyson Airblade V</span></Link>
		<Link to="/dyson/dB/"><span>Dyson Airblade dB</span></Link>
	</div>
</div>
</>
}

export default DysonTop; 