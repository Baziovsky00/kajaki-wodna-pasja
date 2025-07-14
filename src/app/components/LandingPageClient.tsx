"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Users, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import ReviewsSection from "./reviews-section"
import styles from "@/app/page.module.css";
import Image from "next/image"
import OffersPricing from "./offers-pricing"
import CallIcon from "./CallIcon"

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
      staggerChildren: 0.2,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const LandingPageClient = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = [
    { src: "/images/kajaki3.jpg", alt: "Spływy kajakowe wisła oraz wieprz" },
    { src: "/images/kajaki2.jpg", alt: "Kajaki na rzece Wieprz" },
    { src: "/images/kajaki1.jpg", alt: "Grupa kajakarzy na Wiśle" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className={styles.container}>
      <Navigation />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
              Odkryj uroki Wieprza i Wisły z Wodną Pasją!
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
              Spływy kajakowe i wypożyczalnia sprzętu – Parchatka (okolice Kazimierza Dolnego i Puław)
            </motion.p>
            <motion.div className={styles.heroButtons} variants={fadeInUp}>
              <Link href={"/trasy-wieprz"}>
                <motion.button
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Sprawdź trasy na Wieprzu
                </motion.button>
              </Link>
              <Link href="/trasy-wisla">
                <motion.button
                  className={styles.secondaryButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Sprawdź trasy na Wiśle
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

            <motion.div
            className={styles.heroImageContainer}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
            <div className={styles.videoContainer}>
              <video
              className={styles.heroVideo}
              src="/baner_video.mp4"
              width={1200}
              height={400}
              autoPlay={false}
              loop
              playsInline
              controls
              poster="/images/kajaki3.jpg"
              style={{ width: "100%", maxHeight: "630px", borderRadius: "1rem", objectFit: "cover" }}
              />
            </div>
            </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.introduction}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.introContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={'/images/wodnapasja_baner.jpg'} width={800} height={400} alt="Wodna Pasja - spływy kajakowe" />
            <p className={styles.introText}>
              <b>Wodna Pasja</b> – <b>Kajaki</b> to rodzinna wypożyczalnia sprzętu kajakowego działająca na dwóch najpiękniejszych rzekach Lubelszczyzny – <b>Wiśle</b> oraz <b>Wieprzu (pradolina)</b>.
              Nasza przygoda z kajakami zaczęła się z miłości do natury i potrzeby spokoju, jaki daje czas spędzony na wodzie. Z czasem ta pasja przerodziła się w coś więcej – <b>w Wodną Pasję</b>, którą chcemy dzielić z Wami.
              Naszym celem jest nie tylko zapewnienie profesjonalnego sprzętu i bezpieczeństwa, ale przede wszystkim <b>tworzenie wyjątkowych wspomnień w otoczeniu dzikiej przyrody Lubelszczyzny</b>.
              Wierzymy, że każdy powinien choć raz spojrzeć na świat z perspektywy kajaka – powoli płynąc po rzece, zanurzyć się w ciszy, odkrywać nowe miejsca i na chwilę zostawić codzienność za sobą.
              Dołącz do nas i poczuj, jak smakuje prawdziwa wodna przygoda!

            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <OffersPricing />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={styles.sectionTitle}>Galeria</h2>
          </motion.div>

          <motion.div
            className={styles.galleryGrid}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                className={styles.galleryItem}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className={styles.galleryPlaceholder}>
                  <div className={styles.placeholderContent}>
                    <Image
                      src={`/images/kajaki${i}.jpg`}
                      width={450}
                      height={500}
                      alt={i % 2 == 0 ? "Wisła spływy kajakowe" : "Wieprz spływy kajakowe"}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className={styles.contact}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Kontakt</h2>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactInfoTitle}>Informacje kontaktowe</h3>
              <div className={styles.contactInfoList}>
                <motion.div
                  className={styles.contactInfoItem}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <MapPin className={styles.contactIcon} />
                  <div className={styles.contactInfoText}>
                    <p className={styles.contactInfoName}>Wodna Pasja – Kajaki</p>
                    <p className={styles.contactInfoDetail}>Właściciel: Dariusz Marchocki</p>
                    <p className={styles.contactInfoDetail}>Parchatka 21, 24‑120 Parchatka k. Kazimierza Dolnego</p>
                  </div>
                </motion.div>

                <motion.div
                  className={styles.contactInfoItem}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Phone className={styles.contactIcon} style={{ color: 'green' }} />
                  <div className={styles.contactInfoText}>
                    <a href="tel:+48668481266" className={styles.phoneLink}>
                      <p className={styles.contactInfoDetail}>+48 668 481 266</p>
                    </a>
                    <a href="tel:+48668480786" className={styles.phoneLink}>
                      <p className={styles.contactInfoDetail}>+48 668 480 786</p>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className={styles.contactInfoItem}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail className={styles.contactIcon} />
                  <a href="mailto:wodnapasja.kajaki@gmail.com" className={styles.emailLink}>
                    <p className={styles.contactInfoDetail}>wodnapasja.kajaki@gmail.com</p>
                  </a>
                </motion.div>
              </div>

              <div className={styles.operatingHours}>
                <p className={styles.operatingHoursText}>
                  <strong>Działamy:</strong> sezonowo – wiosna–lato, oferty na długi weekendy (Czerwiec), Dzień Dziecka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CallIcon />
    </div>
  )
}

export default LandingPageClient
