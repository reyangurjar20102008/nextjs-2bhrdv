import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR, { preload } from 'swr';
preload('https://api.consumet.org/meta/anilist/trending');
export default function Home() {
  const { data, error } = useSWR(
    'https://api.consumet.org/meta/anilist/trending',
    { fallbackData: prefetchedData },
    { refreshInterval: 18000 }
  );

  return <>{console.log(data)}</>;
}
