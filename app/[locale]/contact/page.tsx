import Head from 'next/head';
import Form from '../../../components/Form/Form';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title> Contact Form</title>
        <meta name="description" content="Contact form tutorial" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
      <h1 className="text-center text-2xl mb-5">Contact Us</h1>
        <Form />
      </main>

      <footer>
        <p>© 2025 Your Company</p>
      </footer>
    </div>
  );
}
