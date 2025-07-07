import {CiMail} from "react-icons/ci";
import {LuNavigation} from "react-icons/lu";

const FlexWindContentSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto flex flex-col md:flex-row gap-16 items-center justify-center">
                <div className="w-full space-y-12 text-gray-700 dark:text-gray-300 shadow-2xl rounded-md p-6">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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