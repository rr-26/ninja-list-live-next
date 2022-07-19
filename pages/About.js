import Head from 'next/head'


const about = () => {
    return ( 
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name = "keywords" content="ninjas"/>
            </Head>

            <div>
                <h1>This is About section</h1>
                <p>THis is about paragraph 1</p>
                <p>THis is about paragraph 2</p>
                <p>THis is about paragraph 3</p>
                <p>THis is about paragraph 4</p>
            </div>
        </>
    );
}
 
export default about;