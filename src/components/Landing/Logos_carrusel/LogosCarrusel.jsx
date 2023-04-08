// STYLES
import './LogosCarrusel.css';

// IMGs
import AArEII from '../../../assets/img/Logos/new AArEII.png'
import Cameda from '../../../assets/img/Logos/Cameda.png'
import CerebroCurioso from '../../../assets/img/Logos/newCerebroCurioso.png'
import UNCUYO from '../../../assets/img/Logos/UNCUYO.png'
import AMPROS from '../../../assets/img/Logos/AMPROS.png'

export default function Logos_carrusel() {
  return (
    <div className="section logos">
      <h2> Confian en Nosotros </h2>
      <div className="imgcontainer">
        <div className="img">
          <img src={AMPROS} alt='logo AMPROS'/>
        </div>
        <div className="img">
          <img src={Cameda} alt='logo CAMEDA'/>
        </div>
        <div className="img">
          <img src={CerebroCurioso} alt='logo Cerebro Curioso'/>
        </div>
        <div className="img">
          <img src={AArEII} alt='logo AArEII'/>
        </div>
        <div className="img">
          <img src={UNCUYO} alt='logo UNCUYO'/>
        </div>
      </div>
    </div>
  )
}