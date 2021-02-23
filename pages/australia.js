import {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'




const australia = ({timezone}) => {
    let time = new Date().toLocaleString();
  const [Ctime, setCtime] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleString();
    setCtime(time);
  }

  setInterval(updateTime, 1000);
    return (
        <div>
            <Head>
                <title>iabhishek || About</title>
            </Head>
            <div className={styles.grid}>
            {timezone.map(timezones =>(
                    <div className={styles.card}>
                    <h3 className={styles.code}>{timezones}</h3>
                    <p>{new Date().toLocaleString("en-US", { timeZone: timezones, timeStyle: 'full', hourCycle: 'h12' })}</p>
                    </div>
            ))}
            </div>
            
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("http://worldtimeapi.org/api/timezone/Australia");
    const data = await res.json();
    return{
        props:{timezone : data}
    }
}

export default australia
