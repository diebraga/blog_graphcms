import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import { apolloClient } from '../lib/apolloClient';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
export default MyApp;
