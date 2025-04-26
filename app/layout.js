import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Agency - Transform Your Business with AI',
  description: 'Leading AI solutions provider offering LLM, RAG, and MCP services to transform your business.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
