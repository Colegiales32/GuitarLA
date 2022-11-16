
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
        title={'Nosotros'}
        description={'Sobre nosotros'}
        >
            <main className='contenedor'>
                <h1 className='heading' > Nosotros </h1>
           
           <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt='imagen sobre nosotros' />

            <div>
                <p>
                Aliquam condimentum ligula et enim scelerisque sollicitudin. Aliquam orci libero, tincidunt et pretium at, tempus sed arcu. Aenean nec viverra eros, luctus accumsan metus. Quisque bibendum eget sapien porta sagittis. Fusce fringilla in diam ultrices volutpat. Suspendisse tempor ante eu turpis maximus, ac maximus neque tincidunt.
                </p>
                <p>
                Donec pharetra erat quis tellus mollis, in volutpat est tincidunt. Aenean in faucibus lectus. Integer semper lacus et maximus iaculis. Nam luctus, purus ac scelerisque porttitor, leo lorem volutpat magna, lobortis eleifend ipsum neque at lectus. Morbi ac fermentum ligula. Duis bibendum ipsum a diam dignissim, ut sodales magna posuere. Suspendisse ac elit magna. Maecenas tincidunt augue nec laoreet malesuada.
                </p>
            </div>

           </div>

            </main>
            
        </Layout>
    )
}


