import {CiMail} from "react-icons/ci";
import {LuNavigation} from "react-icons/lu";

const FlexWindContentSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto flex flex-col md:flex-row gap-16 items-center justify-center">
                <div className="w-full space-y-12 text-gray-700 dark:text-gray-300 shadow-2xl rounded-md p-6">
                    <div className="grid gap-6 sm:grid-cols-3">
                        <a href="tel:+243" className="flex gap-x-6 items-center" rel="noreferer">
                        <span
                            className="p-3 md:p-3.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                            </svg>
                        </span>
                            <div className="space-y-0.5 flex flex-col flex-1">
                                <p className="text-foreground">İletişim Numarası</p>
                                <p className="font-semibold text-gray-900 dark:text-white text-lg">+90 543 171 2791</p>
                            </div>
                        </a>
                        <a href="mailto:" className="flex gap-x-6 items-center" rel="noreferer" target="_blank">
                        <span
                            className="p-3 md:p-3.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex w-max">
                            <CiMail className="w-6 h-6"/>
                        </span>
                            <div className="space-y-0.5 flex flex-col flex-1">
                                <p className="text-foreground">Eposta Adresi</p>
                                <p className="font-semibold text-gray-900 dark:text-white text-lg">sevval.kurular@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://maps.app.goo.gl/54NYbe4g2hRaA49X9" className="flex gap-x-6 items-center"
                           rel="noreferer" target="_blank">
                        <span
                            className="p-3 md:p-3.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex w-max">
                            <LuNavigation className="w-6 h-6"/>
                        </span>
                            <div className="space-y-0.5 flex flex-col flex-1">
                                <p className="text-foreground">Adres</p>
                                <p className="font-semibold text-gray-900 dark:text-white text-md">Kızılay Mahallesi GMK
                                    Bulvarı Fevzi Çakmak 1 Sokak No: 24/32 Çankaya/ANKARA</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FlexWindContentSection