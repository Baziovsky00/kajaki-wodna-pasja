import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function OffersPricing() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    }

    const staggerContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }


    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-4 text-center bg-gradient-to-r text-white" style={{ background: 'linear-gradient(135deg, #25c1ff 0%, #247dd1 100%' }}>
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Oferta</h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Zapraszamy na niezapomniane spływy kajakowe po dwóch wyjątkowych rzekach Lubelszczyzny: Wiśle oraz Wieprzu
                        (pradolina)
                    </p>
                </div>
            </section>

            {/* Main Offers */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-8xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Organizujemy</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <Card className="hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-200 rounded-t-lg relative">
                                <Image
                                    src={'/images/kajaki1.jpg'}
                                    alt="Wodna Pasja - Spływy jednodniowe i kilkudniowe"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <CardHeader className="text-center">
                                <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                <CardTitle className="text-lg">Spływy jednodniowe i kilkudniowe</CardTitle>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-200 rounded-t-lg relative">
                                <Image
                                    src={'/images/kajaki2.jpg'}
                                    alt="Wodna Pasja - panieńskie, kawalerskie, jubileuszowe"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <CardHeader className="text-center">
                                <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                                <CardTitle className="text-lg">Spływy okolicznościowe</CardTitle>
                                <CardDescription>panieńskie, kawalerskie, jubileuszowe</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-200 rounded-t-lg relative">
                                <Image
                                    src={'/images/kajaki10.jpg'}
                                    alt="Wodna Pasja - Spływy grupowe i integracyjne"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <CardHeader className="text-center">
                                <Users className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                                <CardTitle className="text-lg">Spływy grupowe i integracyjne</CardTitle>
                                <CardDescription>dla firm i szkół</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-200 rounded-t-lg relative">
                                <Image
                                    src={'/images/splyw-popoludniowo-wieczorny.jpeg'}
                                    alt="Wodna Pasja - Spływy indywidualne i rodzinne"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <CardHeader className="text-center">
                                <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                                <CardTitle className="text-lg">Spływy popołudniowo-wieczorne</CardTitle>
                                <CardDescription>Romantyczna randka na wodzie</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            {/* <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Cennik</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">Janowiec-Puławy</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-4">60 zł</div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">Lucimia-Puławy</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-4">75 zł</div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">Puławy-Dęblin</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-4">75 zł</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section> */}

            {/* Safety and Comfort */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Naszym priorytetem jest bezpieczeństwo i komfort
                    </h2>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {/* Equipment Block */}
                        <motion.div
                            className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Image
                                src="/images/kajaki8.jpg"
                                alt="Nowoczesne kajaki i kapoki"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                <div className="text-white space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">Sprzęt</h3>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 group/item">
                                            <div className="w-3 h-3 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 shadow-lg group-hover/item:bg-blue-300 transition-colors" />
                                            <span className="text-sm md:text-base leading-relaxed drop-shadow-md">
                                                Nowoczesne, płaskodenne kajaki dwuosobowe (możliwość dostawki dla dzieci do 5 lat)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3 group/item">
                                            <div className="w-3 h-3 bg-blue-400 rounded-full mt-1.5 flex-shrink-0 shadow-lg group-hover/item:bg-blue-300 transition-colors" />
                                            <span className="text-sm md:text-base leading-relaxed drop-shadow-md">
                                                Kapoki nowe, czyste i dopasowane do wagi – prane i dezynfekowane po każdym użyciu
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Subtle border highlight */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
                        </motion.div>

                        {/* Additional Services Block */}
                        <motion.div
                            className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Image
                                src="/images/ognisko.jpeg"
                                alt="Ogniska, kemping i catering"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                <div className="text-white space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">Dodatkowo możemy pomóc w</h3>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 group/item">
                                            <div className="w-3 h-3 bg-green-400 rounded-full mt-1.5 flex-shrink-0 shadow-lg group-hover/item:bg-green-300 transition-colors" />
                                            <span className="text-sm md:text-base leading-relaxed drop-shadow-md">Organizacji ognisk</span>
                                        </li>
                                        <li className="flex items-start gap-3 group/item">
                                            <div className="w-3 h-3 bg-green-400 rounded-full mt-1.5 flex-shrink-0 shadow-lg group-hover/item:bg-green-300 transition-colors" />
                                            <span className="text-sm md:text-base leading-relaxed drop-shadow-md">
                                                Możliwość kempingu na trasie
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3 group/item">
                                            <div className="w-3 h-3 bg-green-400 rounded-full mt-1.5 flex-shrink-0 shadow-lg group-hover/item:bg-green-300 transition-colors" />
                                            <span className="text-sm md:text-base leading-relaxed drop-shadow-md">
                                                Opcjonalnie Catering dopasowany do potrzeb uczestników
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Subtle border highlight */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
                        </motion.div>
                    </motion.div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-700">
                            Niezależnie od tego, czy szukasz ciszy i natury, czy dobrej zabawy z grupą – stworzymy spływ dopasowany do
                            Ciebie.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
