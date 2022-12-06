import { useState,useEffect } from "react"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"



export default function Producto({guitarra,agregarCarrito,agregado,setAgregado,carrito}){

function guitarraAgregada() {
  setClase(styles.verde)
  setValue('OK!')
  setTimeout(() => {
    setClase(styles.negro)
    setValue('Agregar Al carrito')
  }, 2000);
}

const {imagen,precio,nombre,descripcion,url} = guitarra[0].attributes
const [cantidad, setCantidad] = useState(0)
const [clase,setClase] = useState(false)
const [value,setValue] = useState('Agregar al Carrito')

const handleSubmit = e => {
  e.preventDefault()

  if(cantidad < 1) {
    alert('Cantidad no valida')
    return
  }

  //Construir Objeto
  const guitarraSeleccionada = {
    id:guitarra[0].id,
    imagen:imagen.data.attributes.url,
    nombre,
    precio,
    cantidad
  }

  //Pasando la informacion al context

  agregarCarrito(guitarraSeleccionada)

}


 
    return (
        <Layout title={`Guitarra ${nombre}`}>
        <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          
<form
onSubmit={handleSubmit}
className={styles.formulario}>

    <label htmlFor="cantidad">Cantidad:</label>
        
        <select
        onChange={e => setCantidad(+e.target.value) }
        id="cantidad">
          <option value="0">-- Seleccione --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

    <input 
    type="submit"
    value={value}
    onClick={guitarraAgregada}
    id={clase}
    />
  
  

</form>

        </div>
      </div>
      </Layout>
  )
}


export async function getServerSideProps({query: {url}}) {
const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitars?filters[url]=${url}&populate=imagen`)
const {data : guitarra} = await respuesta.json()


    return {
        
        props : {
            guitarra,
            
        }
    }
}