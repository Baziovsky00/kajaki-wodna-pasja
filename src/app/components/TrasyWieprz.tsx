"use client"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import Footer from "./Footer"
import styles from "@/app/trasy-wieprz/trasy.module.css"
import Image from "next/image"
import CallIcon from "./CallIcon"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const TrasyWieprz = () => {
  return (
    <div className={styles.container}>
      <Navigation />

      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <motion.div
            className={styles.breadcrumb}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className={styles.breadcrumbLink}>
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ArrowLeft className={styles.breadcrumbIcon} />
                Powrót do strony głównej
              </motion.div>
            </Link>
          </motion.div>
          <motion.div className={styles.headerContent} initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1 className={styles.headerTitle} variants={fadeInUp}>
              Trasy Wieprz
            </motion.h1>
            <motion.p className={styles.headerSubtitle} variants={fadeInUp}>
              Odkryj malownicze trasy kajakowe na rzece Wieprz. Spokojne wody idealne dla rodzin i początkujących
              kajakarzy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Description */}
      <section className={styles.descriptionSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.descriptionContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className={styles.descriptionText}>
              Rzeka Wieprz to idealne miejsce dla miłośników spokojnych spływów kajakowych. Meandrująca przez malownicze
              tereny Lubelszczyzny, oferuje niezapomniane widoki i kontakt z dziewiczą przyrodą.
            </p>
            <p className={styles.descriptionText}>
              Nasze trasy są dostosowane do różnych poziomów zaawansowania i czasu, jaki chcesz spędzić na wodzie. Każda
              z tras gwarantuje bezpieczną i przyjemną przygodę.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Routes Section */}
      <section className={styles.routesSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Dostępne trasy kajakowe
          </motion.h2>

          {/* Route 1 */}
          <motion.div
            className={styles.routeLayout}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.routeImageContainer}>
              <Image
                src="/images/trasy-wieprz/wieprz1.jpeg"
                width={600}
                height={400}
                alt="Trasa Baranów - Bialki Dolne"
                className={styles.routeImage}
              />
            </div>
            <div className={styles.routeInfo} style={{ backgroundColor: "#ff6b35" }}>
              <h3 className={styles.routeTitle}>Trasa 1: Baranów – Bialki Dolne</h3>
              <div className={styles.routeDetails}>
                <p>
                  <strong>Dystans:</strong> 11 km
                </p>
                <p>
                  <strong>Czas trwania:</strong> 3 godz.
                </p>
                <p>
                  <strong>Cena:</strong> 60 zł
                </p>
              </div>
              <div className={styles.routeDescription}>
                <p>
                  Idealna trasa dla początkujących i rodzin z dziećmi. Spokojny nurt rzeki Wieprz prowadzi przez
                  malownicze tereny, oferując relaksującą przygodę na wodzie.
                </p>
                <p>
                  Trasa charakteryzuje się łagodnymi meandrami i pięknymi widokami na nadrzeczną roślinność. Doskonała
                  na pierwsze doświadczenia z kajakowaniem.
                </p>
              </div>
              <Link href="/#kontakt">
                <motion.button
                  className={styles.routeButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Zarezerwuj trasę
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Route 2 */}
          <motion.div
            className={styles.routeLayout}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.routeInfo} style={{ backgroundColor: "rgb(77, 118, 179)" }}>
              <h3 className={styles.routeTitle}>Trasa 2: Baranów – Kośmin</h3>
              <div className={styles.routeDetails}>
                <p>
                  <strong>Dystans:</strong> 21 km
                </p>
                <p>
                  <strong>Czas trwania:</strong> 6 godz.
                </p>
                <p>
                  <strong>Cena:</strong> 70 zł
                </p>
              </div>
              <div className={styles.routeDescription}>
                <p>
                  Najdłuższa z naszych tras, idealna dla bardziej doświadczonych kajakarzy lub tych, którzy chcą spędzić
                  cały dzień na wodzie. Trasa prowadzi przez najbardziej malownicze fragmenty rzeki Wieprz.
                </p>
                <p>
                  Podczas spływu mijasz różnorodne krajobrazy - od otwartych łąk po zacienione fragmenty rzeki otoczone
                  lasem. Liczne miejsca na odpoczynek i podziwianie przyrody.
                </p>
                <p>
                  <strong>Uwaga:</strong> Trasa wymaga dobrej kondycji fizycznej ze względu na długość spływu.
                </p>
              </div>
              <Link href="/#kontakt">
                <motion.button
                  className={styles.routeButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Zarezerwuj trasę
                </motion.button>
              </Link>
            </div>
            <div className={styles.routeImageContainer}>
              <Image
                src="/images/trasy-wieprz/wieprz2.jpeg"
                width={600}
                height={400}
                alt="Trasa Baranów - Kośmin"
                className={styles.routeImage}
              />
            </div>
          </motion.div>

          {/* Route 3 */}
          <motion.div
            className={styles.routeLayout}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.routeImageContainer}>
              <Image
                src="/images/trasy-wieprz/wieprz5.jpeg"
                width={600}
                height={400}
                alt="Trasa Bialki Dolne - Kośmin"
                className={styles.routeImage}
              />
            </div>
            <div className={styles.routeInfo} style={{ backgroundColor: "rgb(248, 126, 56)" }}>
              <h3 className={styles.routeTitle}>Trasa 3: Bialki Dolne – Kośmin</h3>
              <div className={styles.routeDetails}>
                <p>
                  <strong>Dystans:</strong> 11 km
                </p>
                <p>
                  <strong>Czas trwania:</strong> 3 godz.
                </p>
                <p>
                  <strong>Cena:</strong> 60 zł
                </p>
              </div>
              <div className={styles.routeDescription}>
                <p>
                  Druga z krótszych tras, oferująca spokojny spływ przez urokliwe fragmenty rzeki Wieprz. Idealna dla
                  tych, którzy chcą cieszyć się kajakowaniem bez pośpiechu.
                </p>
                <p>
                  Trasa prowadzi przez różnorodne tereny - od otwartych przestrzeni po bardziej zacienione fragmenty
                  rzeki. Doskonała propozycja na popołudniowy spływ.
                </p>
                <p>
                  Możliwość obserwowania lokalnej fauny i flory w naturalnym środowisku. Liczne miejsca na krótkie
                  postoje i odpoczynek.
                </p>
              </div>
              <Link href="/#kontakt">
                <motion.button
                  className={styles.routeButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Zarezerwuj trasę
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <motion.h3
            className={styles.featuresTitle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Dlaczego warto wybrać Wieprz?
          </motion.h3>
          <motion.div
            className={styles.featuresGrid}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Spokojne wody",
                desc: "Idealne dla początkujących i rodzin z dziećmi",
              },
              {
                title: "Malownicze krajobrazy",
                desc: "Piękne widoki na nadrzeczną przyrodę i lasy",
              },
              {
                title: "Różnorodne trasy",
                desc: "Od krótkich 3-godzinnych po całodniowe spływy",
              },
              {
                title: "Przystępne ceny",
                desc: "Atrakcyjne ceny za niezapomniane przeżycia",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureItem}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className={styles.contactTitle}>Wodna Pasja – Kajaki</h3>
            <p>Skontaktuj się z nami i zarezerwuj swój spływ Wieprzem już dziś!</p>
          </motion.div>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <a href="tel:+48668481266" className={styles.phoneLink}>
                668 481 266
              </a>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} />
              <a href="mailto:wodnapasja.kajaki@gmail.com" className={styles.emailLink}>
                wodnapasja.kajaki@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CallIcon />
    </div>
  )
}

export default TrasyWieprz
