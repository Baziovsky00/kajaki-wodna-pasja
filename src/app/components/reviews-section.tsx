"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import styles from "@/app/page.module.css"

// Animation variants matching your existing ones
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
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

// Sample reviews data - replace with your actual Google Reviews
const reviews = [
    {
        id: 1,
        name: "Kacper Mrowiec",
        rating: 5,
        date: "2 tygodnie temu",
        text: "Świetna przygoda na Wieprzu! Kajaki w doskonałym stanie, bardzo mili i pomocni Właściciele. Wszystko zorganizowane sprawnie i bez stresu. Idealny sposób na relaks w pięknych okolicznościach przyrody. Gorąco polecam!",
        avatar: "KM",
    },
    {
        id: 2,
        name: "Ola Klimek",
        rating: 5,
        date: "1 miesiąc temu",
        text: "Super przygoda, dobra organizacja, sprzęt nowy i czysty, ładna trasa, a po dotarciu na metę ognisko z kiełbaskami. Polecam gorąco! 😊",
        avatar: "OK",
    },
    {
        id: 3,
        name: "Marta Ojdana",
        rating: 5,
        date: "3 tygodnie temu",
        text: "Świetna zabawa i relaks na wodzie! Wodna Pasja – Kajaki to fantastyczne miejsce na aktywny wypoczynek! Kajaki w doskonałym stanie, czyste i wygodne. Obsługa bardzo miła, pomocna i dobrze zorganizowana wszystko przebiegało sprawnie . Trasa spokojna, piękne widoki .Na pewno wrócimy! Z całego serca polecam każdemu, kto chce spędzić czas w naturze i dobrze się bawić!",
        avatar: "KW",
    },
    {
        id: 4,
        name: "Piotr Zieliński",
        rating: 5,
        date: "2 miesiące temu",
        text: "Profesjonalne podejście do klienta, doskonała znajomość tras i bezpieczeństwo na pierwszym miejscu. Spływ grupowy dla naszej firmy był strzałem w dziesiątkę!",
        avatar: "PZ",
    },
    {
        id: 5,
        name: "Agnieszka Stepniak-Łuczywek",
        rating: 5,
        date: "1 miesiąc temu",
        text: "Serdecznie polecam te firmę. Super nowe czyste kajaki, wspaniała obsługa. Świetne centy, a na koniec spływu mieliśmy zorganizowane ognisko.",
        avatar: "ASŁ",
    },
    {
        id: 6,
        name: "Kamila Kobiałka",
        rating: 5,
        date: "3 tygodnie temu",
        text: "Gorąco polecamy! Właściciele przygotowali wszystko na tip top. To był nasz pierwszy spływ i na pewno nie ostatni. Nowe kajaki, wyposażone w dodatkowe miejsce dla dziecka. Spędziliśmy rodzinny czas w pieknych okolicznościach przyrody.",
        avatar: "KK",
    },
]

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
            ))}
        </div>
    )
}

const ReviewsSection = () => {
    return (
        <section
            className={styles.services}
            style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)" }}
        >
            <div className={styles.sectionContainer}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className={styles.sectionTitle}>Opinie Naszych Klientów</h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="flex items-center gap-1">
                            <StarRating rating={5} />
                            <span className="text-lg font-semibold text-gray-700 ml-2">5.0</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">Oparte na 127 opiniach Google</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.servicesGrid}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {reviews.map((review) => (
                        <motion.div key={review.id} variants={scaleIn}>
                            <Card className={`${styles.serviceCard} h-full`} style={{ borderLeft: "4px solid #1e40af" }}>
                                <CardContent className={styles.serviceCardContent}>
                                    <div className="space-y-4">
                                        {/* Header with avatar and info */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                                {review.avatar}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-gray-900 truncate">{review.name}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <StarRating rating={review.rating} />
                                                    {/* <span className="text-sm text-gray-500">{review.date}</span> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quote icon */}
                                        <Quote className="w-6 h-6 text-blue-500 opacity-50" />

                                        {/* Review text */}
                                        <p className="text-gray-700 leading-relaxed text-sm">{review.text}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Google Reviews CTA */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    <motion.a
                        href="https://www.google.com/maps/place/Wodna+Pasja+-+Kajaki/@51.3635873,21.9967359,17z/data=!3m1!4b1!4m6!3m5!1s0x7d3ebec33104419:0xdac1ae61e27a7fc!8m2!3d51.363584!4d21.9993108!16s%2Fg%2F11y4tfmg92?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.primaryButton} inline-block`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        📍 Zobacz wszystkie opinie na Google Maps
                    </motion.a>
                    <p className="text-gray-600 mt-3 text-sm">Podziel się swoją opinią o naszych spływach kajakowych!</p>
                </motion.div>
            </div>
        </section>
    )
}

export default ReviewsSection
