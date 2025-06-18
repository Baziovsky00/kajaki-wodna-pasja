"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, MapPin, Star, Trees, Castle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import Footer from "./Footer"
import styles from "@/app/trasy/trasy.module.css"
import Image from "next/image"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
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

const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const TrasyClient = () => {
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
              Trasy Wieprz & Wisła
            </motion.h1>
            <motion.p className={styles.headerSubtitle} variants={fadeInUp}>
              Odkryj najpiękniejsze trasy kajakowe na Wieprzu i Wiśle. Wybierz trasę idealną dla siebie i swojej grupy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Wieprz Section */}
      <section className={styles.wieprzSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={styles.sectionTitle}>Spływy Wieprzem</h2>
            <p className={styles.sectionDescription}>
              Malowniczy nurt doliny, około 300 km, idealny dla początkujących i zaawansowanych. Rzeka Wieprz oferuje
              niezapomniane widoki i spokojną żeglugę przez dziewicze tereny.
            </p>
          </motion.div>

          <motion.div
            className={styles.riverImageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className={styles.riverImagePlaceholder}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={styles.placeholderContent}>
                <Image src={"/images/rzeka-wieprz.jpg"} width={1200} height={500} alt="Rzeka Wieprz spływ kajakiem" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.routesGrid}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Dorohucza → Jaszczów (3 h)",
                desc: "Start przy szkole, parking dostępny",
                price: "70-80 zł/osoba",
              },
              {
                title: "Jaszczów → Łęczna (5–6 h)",
                desc: "Przełom wśród lasów, meandry, zabezpieczenia",
                price: "90-100 zł/osoba",
              },
              {
                title: "Zawieprzyce → Lubartów (5–6 h)",
                desc: "Szeroka rzeka, końcówka na miejskiej plaży",
                price: "90-100 zł/osoba",
              },
              {
                title: "Łęczna → Zawieprzyce (4–5 h)",
                desc: "Wysokie skarpy, zamek z ruinami",
                price: "80-90 zł/osoba",
              },
            ].map((route, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className={styles.routeCard}>
                  <CardHeader className={styles.routeCardHeader}>
                    <CardTitle className={styles.routeCardTitle}>
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Clock className={styles.routeIcon} />
                      </motion.div>
                      {route.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={styles.routeCardContent}>
                    <p className={styles.routeDescription}>{route.desc}</p>
                    <div className={styles.routePrice}>
                      <strong>{route.price}</strong>
                    </div>
                    <Link href={"/#kontakt"}>
                      <motion.button
                        className={styles.routeButton}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        Zarezerwuj trasę
                      </motion.button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.attractionsSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className={styles.attractionsTitle}>Atrakcje na trasie Wieprza</h3>
            <motion.div
              className={styles.attractionsGrid}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                {
                  icon: Trees,
                  title: "Obszary Natura 2000",
                  desc: "Chronione tereny z unikalną florą i fauną",
                  color: "#059669",
                },
                {
                  icon: Castle,
                  title: "Ruiny zamku w Zawieprzycach",
                  desc: "Historyczne zabytki nad brzegiem rzeki",
                  color: "#d97706",
                },
                {
                  icon: Star,
                  title: "Dzika flora i fauna",
                  desc: "Bobry, rzadkie trawy i ptactwo wodne",
                  color: "#1e40af",
                },
              ].map((attraction, index) => (
                <motion.div
                  key={index}
                  className={styles.attractionItem}
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <attraction.icon className={styles.attractionIcon} style={{ color: attraction.color }} />
                  </motion.div>
                  <h4 className={styles.attractionTitle}>{attraction.title}</h4>
                  <p className={styles.attractionDescription}>{attraction.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wisła Section */}
      <section className={styles.wislaSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={styles.sectionTitle}>Spływy Wisłą</h2>
            <p className={styles.sectionDescription}>
              Majestatyczna, szeroka rzeka płynąca przez Janowiec, Kazimierz Dolny i Puławy. Komfortowy trawer doliną
              Wisły z widokami na historyczne miasta.
            </p>
          </motion.div>

          <motion.div
            className={styles.riverImageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className={styles.riverImagePlaceholder}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={styles.placeholderContent}>
                <Image src={"/images/rzeka-wisla.jpg"} width={1200} height={500} alt="Rzeka Wisła spływ kajakiem" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.wislaRoutesGrid}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Trasa Krótka (ok. 14 km)",
                desc: "Z Janowca, widok Zamku, Rezerwatu Krowia Wyspa. Idealna dla rodzin z dziećmi i początkujących.",
                price: "80-90 zł/osoba",
                placeholder: "Zdjęcie krótkiej trasy",
              },
              {
                title: "Trasa Długa (ok. 21 km)",
                desc: "Janowiec → Puławy – idealna na ½‑dniowy spływ. Dla bardziej doświadczonych kajakarzy.",
                price: "100-120 zł/osoba",
                placeholder: "Zdjęcie długiej trasy",
              },
            ].map((route, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className={styles.routeCard} style={{ height: 350 }}>
                  <CardHeader className={styles.routeCardHeader}>
                    <CardTitle className={styles.routeCardTitle}>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <MapPin className={styles.routeIcon} />
                      </motion.div>
                      {route.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={styles.routeCardContent}>
                    <p className={styles.routeDescription}>{route.desc}</p>
                    <div className={styles.routePrice}>
                      <strong>{route.price}</strong>
                    </div>
                    <Link href={"/#kontakt"} className={styles.routeLink}>
                      <motion.button
                        className={styles.routeButton}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        Zarezerwuj trasę
                      </motion.button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.benefitsSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className={styles.benefitsTitle}>Korzyści spływów Wisłą</h3>
            <motion.div
              className={styles.benefitsGrid}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                { icon: "🏞️", title: "Komfortowy trawer doliną Wisły", desc: "Spokojne wody idealne dla relaksu" },
                { icon: "🏰", title: "Widoki na Kazimierz Dolny", desc: "Unikalne perspektywy na zabytkowe miasto" },
                { icon: "🚗", title: "Łatwa organizacja logistyczna", desc: "Dogodny dojazd i parking" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className={styles.benefitItem}
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    className={styles.benefitIcon}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
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
            <h3 className={styles.contactTitle}>Skontaktuj się z nami</h3>
          </motion.div>

          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} style={{color: 'green'}}/>
              <div className={styles.contactDetails}>
                <a href="tel:+48668481266" className={styles.phoneLink}>
                  +48 668 481 266
                </a>
                <a href="tel:+48668480786" className={styles.phoneLink}>
                  +48 668 480 786
                </a>
              </div>
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <motion.div
            className={styles.ctaContent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 className={styles.ctaTitle} variants={fadeInUp}>
              Gotowy na przygodę?
            </motion.h2>
            <motion.p className={styles.ctaSubtitle} variants={fadeInUp}>
              Skontaktuj się z nami i zarezerwuj swój spływ już dziś!
            </motion.p>
            <motion.div className={styles.ctaButtons} variants={fadeInUp}>
              <Link href="/#kontakt">
                <motion.button
                  className={styles.ctaPrimaryButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Skontaktuj się z nami
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className={styles.ctaSecondaryButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Powrót do strony głównej
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TrasyClient
