import Layout from '../components/layout'
import Link from 'next/link'

export default function NoEncontrado() {
    return (
        <Layout title="Pagina no Encontrada">
            <p className='error'>Pagina No Encontrada</p>
            <Link href='/' legacyBehavior>
                <a className='error-enlace'>Ir a inicio</a>
            </Link>
        </Layout>
    )
}

