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
              <Link href={"/#kontakt"}>
                <motion.button
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  🔹 Zarezerwuj spływ
                </motion.button>
              </Link>
              <Link href="/trasy">
                <motion.button
                  className={styles.secondaryButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  🔹 Sprawdź trasy na Wieprzu i Wiśle
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
            <div className={styles.carouselContainer}>
              <div className={styles.carousel}>
                {heroImages.map((image, index) => (
                  <div key={index} className={`${styles.carouselSlide} ${index === currentSlide ? styles.active : ""}`}>
                    <Image
                      src={image.src || "/placeholder.svg"}
                      width={1200}
                      height={400}
                      alt={image.alt}
                      className={styles.carouselImage}
                    />
                  </div>
                ))}
              </div>
              <button className={`${styles.carouselButton} ${styles.carouselButtonPrev}`} onClick={prevSlide}>
                <ChevronLeft size={24} />
              </button>
              <button className={`${styles.carouselButton} ${styles.carouselButtonNext}`} onClick={nextSlide}>
                <ChevronRight size={24} />
              </button>
              <div className={styles.carouselDots}>
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.carouselDot} ${index === currentSlide ? styles.active : ""}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
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
            <p className={styles.introText}>
              Z nami poznasz uroki Wieprza – rzeki o nieskażonej przyrodzie, skarpach i dolinach (np. Łęczna,
              Zawieprzyce, Lubartów), a także majestatycznej Wisły z widokiem na Janowiec, Kazimierz Dolny i Puławy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.sectionContainer}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={styles.sectionTitle}>Nasza Oferta</h2>
          </motion.div>

          <motion.div
            className={styles.servicesGrid}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className={`${styles.serviceCard} ${styles.serviceCardGreen}`}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceCardInner}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Users className={styles.serviceIcon} />
                    </motion.div>
                    <h3 className={styles.serviceTitle}>Spływy Grupowe</h3>
                    <p className={styles.serviceDescription}>
                      Spływy jednodniowe i kilkudniowe – minimum 8 osób, opcja mobilna. Trasy tematyczne: rodzinne,
                      szkolne, firmowe, integracyjne.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className={`${styles.serviceCard} ${styles.serviceCardBlue}`}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceCardInner}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Shield className={styles.serviceIcon} />
                    </motion.div>
                    <h3 className={styles.serviceTitle}>Profesjonalny Sprzęt</h3>
                    <p className={styles.serviceDescription}>
                      Kajaki jedno- i dwuosobowe, kapoki, wiosła, worki wodoszczelne. Wszystko w najwyższej jakości dla
                      Twojego bezpieczeństwa.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className={`${styles.serviceCard} ${styles.serviceCardOrange}`}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceCardInner}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Clock className={styles.serviceIcon} />
                    </motion.div>
                    <h3 className={styles.serviceTitle}>Usługi Dodatkowe</h3>
                    <p className={styles.serviceDescription}>
                      Transport sprzętu i uczestników, wypożyczenie przewodnika/WOPR, catering, ognisko, miejsca
                      noclegowe przy trasie.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                  <Phone className={styles.contactIcon} style={{color: 'green'}}/>
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
    </div>
  )
}

export default LandingPageClient
