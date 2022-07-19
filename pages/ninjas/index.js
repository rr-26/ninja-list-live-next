import Head from "next/head";
import styles from '../../styles/Home.module.css'
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props : {Ninjas : data}
    }
}


const ninjalist = ({Ninjas}) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninja Listing</title>
                <meta name = "keywords" content="ninjas"/>
            </Head>
            <div>
                <h1>All Ninjas List </h1>
                {Ninjas.map(ninja => (
                    <Link href = {'/ninjas/' + ninja.id} key= {ninja.id}>
                        <a className={styles.single}>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}
 
export default ninjalist;