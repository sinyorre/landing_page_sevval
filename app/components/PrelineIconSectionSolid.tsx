import React from 'react';
import {MdFamilyRestroom} from "react-icons/md";
import {GoLaw} from "react-icons/go";
import {RiGovernmentLine} from "react-icons/ri";
import {PiBuildingApartmentLight, PiMoney} from "react-icons/pi";
import {FaRegHandshake} from "react-icons/fa6";

const PrelineIconSectionSolid = () => {
    return (
        <>
            {/* Icon Blocks */}
            <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="grid items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="group flex flex-col justify-center items-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 md:p-7 b"
                        href="#"
                    >
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#6c4d31]">
                            <MdFamilyRestroom className="size-6 shrink-0 text-white"/>
                        </div>
                        <div className="mt-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
                                Aile Hukuku
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Aile hukuku, bireylerin aile içindeki hak ve sorumluluklarını düzenleyen, boşanma, velayet, nafaka gibi konuları ele alan hukuk dalıdır.
                            </p>
                        </div>
                    </a>
                    <a
                        className="group flex flex-col justify-center items-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 md:p-7 b"
                        href="#"
                    >
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#6c4d31]">
                            <GoLaw className="size-6 shrink-0 text-white"/>
                        </div>
                        <div className="mt-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
                                Ceza Hukuku
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Ceza hukuku, suçları tanımlayan, suçluları cezalandıran ve toplumun güvenliğini sağlamaya yönelik düzenlemeleri içeren hukuk dalıdır.
                            </p>
                        </div>
                    </a>
                    <a
                        className="group flex flex-col justify-center items-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 md:p-7 b"
                        href="#"
                    >
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#6c4d31]">
                            <RiGovernmentLine className="size-6 shrink-0 text-white"/>
                        </div>
                        <div className="mt-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
                                İdare Huku
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                İdare hukuku, devletin idari organlarının faaliyetlerini, kamu hizmetlerinin yürütülmesini ve bireylerin idareye karşı haklarını düzenleyen hukuk dalıdır.
                            </p>
                        </div>
                    </a>
                    <a
                        className="group flex flex-col justify-center items-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 md:p-7 b"
                        href="#"
                    >
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#6c4d31]">
                            <PiMoney className="size-6 shrink-0 text-white"/>
                        </div>
                        <div className="mt-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
                                Kira Hukuku
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Kira hukuku, kiracı ve kiralayan arasındaki ilişkiyi düzenleyen, kira sözleşmeleri, kiralama şartları, ödeme yükümlülükleri ve kiralanan mülkün kullanımı gibi konuları ele alan hukuk dalıdır.
                            </p>
                        </div>
                    </a>
                    <a
                        className="group flex flex-col justify-center items-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 md:p-7 b"
                        href="#"
                    >
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#6c4d31]">
                            <FaRegHandshake className="size-6 shrink-0 text-white"/>
                        </div>
                        <div className="mt-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
                                Ticaret Hukuku
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Ticaret hukuku, ticari işletmelerin faaliyetlerini, ticaret sözleşmelerini, şirket kuruluşlarını, ticari borç ve alacak ilişkilerini düzenleyen ve ticari faaliyetlerle ilgili tarafların hak ve yükümlülüklerini belirleyen hukuk dalıdır.
                            </p>
                        </div>
                    </a>
                    <a
                        className="group flex flex-col justify-center items-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 md:p-7 b"
                        href="#"
                    >
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#6c4d31]">
                            <PiBuildingApartmentLight className="size-6 shrink-0 text-white"/>
                        </div>
                        <div className="mt-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400">
                                Gayrimenkul Hukuku
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Gayrimenkul hukuku, taşınmaz mallarla ilgili hakları, alım-satım, kiralama, ipotek, inşaat ve mülkiyet gibi işlemleri düzenleyen hukuk dalıdır.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            {/* End Icon Blocks */}
        </>
    );
};

export default PrelineIconSectionSolid;
