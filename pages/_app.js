import '../styles/globals.css';
import ThemeChanger from '../components/ThemeChanger';

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-background-default text-color-default">
      <ThemeChanger />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
