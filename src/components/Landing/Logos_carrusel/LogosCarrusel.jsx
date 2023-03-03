// STYLES
import './LogosCarrusel.css';

// IMGs
import AArEII from '../../../assets/img/Logos/AArEII.png'
import Cameda from '../../../assets/img/Logos/Cameda.png'
import CerebroCurioso from '../../../assets/img/Logos/CerebroCurioso.png'
import UNCUYO from '../../../assets/img/Logos/UNCUYO.png'

export default function Logos_carrusel() {
  return (
    <div className="section logos">
      <h2> Confian en Nosotros </h2>
      <div className="imgcontainer">
        <div className="img">
          <img src={Cameda} />
        </div>
        <div className="img">
          <img src={CerebroCurioso} />
        </div>
        <div className="img">
          <img src={AArEII} />
        </div>
        <div className="img">
          <img src={UNCUYO} />
        </div>
      </div>
    </div>
  )
}