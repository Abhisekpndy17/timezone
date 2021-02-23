import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Links = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <Link href='/africa'>
                        <div className={styles.card}>
                            <h1>Africa</h1>
                        </div>
                    </Link>

                    <Link href='/america'>
                        <div className={styles.card}>
                            <h1>America</h1>
                        </div>
                    </Link>

                    <Link href='/asia'>
                        <div className={styles.card}>
                            <h1>Asia</h1>
                        </div>
                    </Link>

                    <Link href='/atlantic'>
                        <div className={styles.card}>
                            <h1>Atlantic</h1>
                        </div>
                    </Link>

                    <Link href='/australia'>
                        <div className={styles.card}>
                            <h1>Australia</h1>
                        </div>
                    </Link>

                    <Link href='/europe'>
                        <div className={styles.card}>
                            <h1>Europe</h1>
                        </div>
                    </Link>

                    <Link href='/indian'>
                        <div className={styles.card}>
                            <h1>Indian Ocean</h1>
                        </div>
                    </Link>

                    <Link href='/pacific'>
                        <div className={styles.card}>
                            <h1>Pacific Ocean</h1>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}



export default Links