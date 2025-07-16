import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const PolitykaPrywatnosci = () => {
    return (
        <div>
            <Navigation />

            <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
                <h1 className="text-3xl font-bold mb-8">Polityka Prywatności</h1>

                <p className="mb-6">
                    Niniejsza polityka prywatności dotyczy strony internetowej <b>kajakiwodnapasja.pl</b>.
                    Szanujemy prywatność osób odwiedzających naszą stronę i nie zbieramy danych osobowych.
                </p>

                {/* <h2 className="text-xl font-semibold mb-2">1. Administrator danych</h2>
                <p className="mb-6">
                    Administratorem danych jest [Nazwa Firmy], z siedzibą przy [adres], NIP: [numer], REGON: [numer].<br />
                    Kontakt: [adres e-mail]
                </p> */}

                <h2 className="text-xl font-semibold mb-2">1. Zakres przetwarzanych danych</h2>
                <p className="mb-6">
                    Strona ma charakter informacyjny. Nie prowadzimy aktywnego zbierania danych osobowych
                    przez formularze. Dane mogą być przetwarzane jedynie w przypadku kontaktu drogą mailową lub telefoniczną.
                </p>

                <h2 className="text-xl font-semibold mb-2">2. Pliki cookies</h2>
                <p className="mb-6">
                    Nie stosujemy plików cookies w celach analitycznych, marketingowych ani profilujących.
                    Strona może wykorzystywać jedynie techniczne cookies niezbędne do jej działania.
                </p>

                <h2 className="text-xl font-semibold mb-2">3. Przekazywanie danych</h2>
                <p className="mb-6">
                    Nie przekazujemy danych osobowych użytkowników osobom trzecim ani poza Europejski Obszar Gospodarczy (EOG),
                    chyba że będzie to wymagane przepisami prawa.
                </p>

                <h2 className="text-xl font-semibold mb-2">4. Prawa użytkownika</h2>
                <p className="mb-6">
                    Osobom, których dane są przetwarzane (np. w wyniku kontaktu mailowego), przysługują prawa zgodnie z RODO:
                    prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz prawo wniesienia skargi
                    do organu nadzorczego (PUODO).
                </p>

                <h2 className="text-xl font-semibold mb-2">5. Kontakt</h2>
                <p className="mb-6">
                    W razie pytań prosimy o kontakt:<br />
                    📧 wodnapasja.kajaki@gmail.com<br />
                    📞 +48 668 481 266
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default PolitykaPrywatnosci;