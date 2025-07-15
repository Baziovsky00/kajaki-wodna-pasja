"use client"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import Footer from "./Footer"
import styles from "@/app/trasy-wisla/trasy.module.css"
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

const TrasyWisla = () => {
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
              Trasy Wisła
            </motion.h1>
            <motion.p className={styles.headerSubtitle} variants={fadeInUp}>
              Wisła – królowa polskich rzek – na odcinku Lubelszczyzny odsłania swoje najpiękniejsze, dzikie oblicze.
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
              Ten fragment rzeki to ukryty skarb dla miłośników przyrody, historii i aktywnego wypoczynku. Wisła
              meandruje tu przez malowniczą Dolinę Wisły, otoczoną lessowymi wzgórzami, rezerwatami przyrody i
              urokliwymi miasteczkami.
            </p>
            <p className={styles.descriptionText}>
              Spływ kajakowy Wisłą na Lubelszczyźnie to doskonała propozycja zarówno dla początkujących, jak i
              doświadczonych kajakarzy. Trasa jest spokojna, z licznymi miejscami na odpoczynek i biwak, co pozwala w
              pełni cieszyć się bliskością natury.
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
            Proponowane trasy spływów jednodniowych
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
                src="/images/trasy-wisla/wisla1.jpeg"
                width={600}
                height={400}
                alt="Wisła - widok z lotu ptaka"
                className={styles.routeImage}
              />
            </div>
            <div
              className={styles.routeInfo}
              style={{
                background: "linear-gradient(135deg, rgb(47, 148, 243) 50%, rgba(75, 85, 139, 1) 100%)",
              }}
            >
              <h3 className={styles.routeTitle}>Trasa 1: Lucimia – Puławy</h3>
              <div className={styles.routeDetails}>
                <p>
                  <strong>Dystans:</strong> ok. 21 km
                </p>
                <p>
                  <strong>Czas trwania:</strong> 5–6 godz.
                </p>
                <p>
                  <strong>Cena:</strong> 75zł
                </p>
              </div>
              <div className={styles.routeDescription}>
                <h4>Atrakcje na trasie:</h4>
                <ul>
                  <li>Dolina Wisły – szerokie zakola, piaszczyste łachy i dzika przyroda</li>
                  <li>Zamek w Janowcu – renesansowa twierdza widoczna z kajaka</li>
                  <li>Kazimierz Dolny – jedno z najpiękniejszych i najbardziej klimatycznych miasteczek w Polsce</li>
                  <li>Rezerwat „Krowia Wyspa" – ostoja dzikiej przyrody: czaple, bieliki, bobry</li>
                </ul>
                <p className={styles.routeNote}>
                  <strong>Uwaga!</strong> Na odcinku Lucimia – Janowiec działa prom – należy minąć linę promową z
                  odpowiednim zapasem i zachować ostrożność.
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
            <div
              className={styles.routeInfo}
              style={{
                background: "linear-gradient(135deg, rgba(45, 177, 218, 1) 20%, rgba(74, 85, 150, 1) 100%)",
              }}
            >
              <h3 className={styles.routeTitle}>Trasa 2: Janowiec – Puławy (nasza perełka!)</h3>
              <div className={styles.routeDetails}>
                <p>
                  <strong>Dystans:</strong> ok. 14 km
                </p>
                <p>
                  <strong>Czas trwania:</strong> 3–4 godz.
                </p>
                <p>
                  <strong>Cena:</strong> 60zł
                </p>
              </div>
              <div className={styles.routeDescription}>
                <p>
                  Spływ rozpoczynamy przy przeprawie promowej w Janowcu, a kończymy w nowoczesnej Marinie Puławy – z
                  przystanią, restauracją, sanitariatem, parkingiem i miejscem na grill lub ognisko.
                </p>
                <h4>Atrakcje na trasie:</h4>
                <ul>
                  <li>Zamek w Janowcu – start tuż przy promie, pod murami zamku</li>
                  <li>Panorama Kazimierza Dolnego – wyjątkowy widok z wody na zamek, basztę i farę</li>
                  <li>Spacer i przerwa w Kazimierzu – możliwość zostawienia kajaka w porcie i odwiedzenia Rynku</li>
                  <li>Most im. Ignacego Mościckiego – imponująca konstrukcja</li>
                  <li>Zalesione brzegi i dzikie plaże – idealne miejsca na krótki odpoczynek</li>
                </ul>
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
                src="/images/trasy-wisla/wisla3.jpeg"
                width={600}
                height={400}
                alt="Janowiec - Puławy trasa kajakowa"
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
                src="/images/trasy-wisla/wisla2.jpeg"
                width={600}
                height={400}
                alt="Puławy - Dęblin trasa kajakowa"
                className={styles.routeImage}
              />
            </div>
            <div
              className={styles.routeInfo}
              style={{
                background: "linear-gradient(135deg, rgba(43, 66, 145, 1) 20%, rgba(88, 93, 122, 1) 100%)",
              }}
            >
              <h3 className={styles.routeTitle}>Trasa 3: Puławy – Dęblin</h3>
              <div className={styles.routeDetails}>
                <p>
                  <strong>Dystans:</strong> ok. 22 km
                </p>
                <p>
                  <strong>Czas trwania:</strong> 6 godz.
                </p>
                <p>
                  <strong>Cena:</strong> 75zł
                </p>
              </div>
              <div className={styles.routeDescription}>
                <p>
                  Spływ zaczyna się w przystani Marina Puławy, malowniczo położonej nad Wisłą. Już na starcie atrakcją
                  jest przepłynięcie pod Mostem Jana Pawła II – nowoczesną, stalową konstrukcję z potężnym przęsłem,
                  idealną do pamiątkowego zdjęcia.
                </p>
                <p>
                  Dalej czeka Cię spokojna wędrówka wodna przez nadwiślańskie krajobrazy z możliwością postoju na
                  naturalnych plażach.
                </p>
                <p>
                  Spływ kończy się w Dęblinie – mieście słynącym z militarnych tradycji. Warto zobaczyć Fort Miejski,
                  który wchodzi w skład imponującej XIX-wiecznej Twierdzy Dęblin.
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

      {/* Attractions Section */}
      <section className={styles.attractionsSection}>
        <div className={styles.sectionContainer}>
          <motion.h3
            className={styles.attractionsTitle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Najważniejsze atrakcje na trasie
          </motion.h3>
          <motion.div
            className={styles.attractionsGrid}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Janowiec nad Wisłą",
                desc: "Urokliwe miasteczko z renesansowym zamkiem, idealne miejsce na rozpoczęcie spływu",
              },
              {
                title: "Kazimierz Dolny",
                desc: "Jedno z najpiękniejszych polskich miasteczek artystycznych, pełne zabytków, galerii i klimatycznych kawiarni",
              },
              {
                title: 'Rezerwat przyrody „Krowia Wyspa"',
                desc: "Chronione siedlisko ptaków wodnych i roślinności nadrzecznej",
              },
              {
                title: "Puławy",
                desc: "Koniec (lub początek) spływu, z Pałacem Czartoryskich i pięknym parkiem",
              },
            ].map((attraction, index) => (
              <motion.div
                key={index}
                className={styles.attractionItem}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <h4 className={styles.attractionTitle}>{attraction.title}</h4>
                <p className={styles.attractionDescription}>{attraction.desc}</p>
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
            <p>Dla zainteresowanych innymi odcinkami lub spływami kilkudniowymi – zapraszamy do kontaktu!</p>
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

export default TrasyWisla
