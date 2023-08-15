import { SocialButton } from './SocialButton'
import {Card} from 'react-bootstrap'
import { iconosRedes } from '../Constants'
import { Formulario } from './Formulario'

export function Registro({Alerta, setAlerta}){
    return(
    <Card className='cardRegistro'>
    <h3>Crea una cuenta</h3>
    <section className='Social-Header'>
        {iconosRedes.map((index)=>(
        <SocialButton key={index} socialIcon={index} />
        )
        )}
    </section>
    <p>O usa tu email para registrarte</p>
    <Formulario Alerta={Alerta} setAlerta={setAlerta}/>
    </Card>

    )
}