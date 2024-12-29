import React from 'react';
import Image from "next/image";

const CustomUserProfile = () => {
    return (
        <>
            {/* Hero */}
            <div className="w-full mx-auto mt-5 p-4">
                {/* Grid */}
                <div className="grid md:grid-cols-2 md:items-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/unnamed-removebg.png"
                            width={600}
                            height={800}
                            alt="Picture of the author"
                            className="rounded-md"
                        />
                    </div>
                    <div>
                        <h1 className="mt-3 text-4xl text-gray-800 dark:text-neutral-400 font-bold">Avukat Şevval
                            Kurular</h1>
                        <h2 className="mt-3 text-base text-gray-800 dark:text-neutral-400 italic">Liberta Avukatlık ve
                            Arabuluculuk Bürosu</h2>

                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 text-justify">
                            Ben <span className="font-bold">Şevval Kurular</span>, 5 Mayıs 1995 doğumluyum ve 2017 yılında Gazi Üniversitesi Hukuk
                            Fakültesi’nden mezun oldum. Hukuk dünyasına olan ilgim, beni her zaman insan haklarını
                            savunmaya, adaletin sağlanmasına katkıda bulunmaya ve müvekkillerimin haklarını en güçlü
                            şekilde savunmaya yönlendirdi. Bu tutkumla 2018 yılında Ankara Barosu’na bağlı olarak yasal
                            stajımı tamamladım. Staj döneminde edindiğim deneyimler, beni mesleki anlamda derinlemesine
                            bir anlayışla donattı ve profesyonel kariyerimin temellerini attı.
                        </p>

                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 text-justify">
                            2018-2022 yılları arasında çalıştığım hukuk bürosunda, gayrimenkul hukuku, idare hukuku,
                            icra hukuku ve medeni hukuk alanlarında yönetici avukat olarak görev yaptım. Bu dönemde,
                            özellikle mülk sahipleri, kiracılar, şirketler ve kamu kuruluşlarıyla yapılan anlaşmalarda,
                            karmaşık hukuki meselelerin çözümü konusunda kapsamlı bir bilgi ve tecrübe kazandım. İcra ve
                            iflas hukuku süreçleri, hem alacaklılar hem de borçlular için adaletin sağlanmasında ne
                            kadar kritik bir rol oynadığını bana daha da net bir şekilde gösterdi.
                        </p>

                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 text-justify">
                            Bu birikim ve deneyimle 2022 yılında kendi ofisimi kurarak bağımsız bir şekilde
                            çalışmalarımı sürdürmeye başladım. Şu anda hukuki hizmetlerimi, özellikle kira hukuku, idare
                            hukuku, aile hukuku ve arabuluculuk alanlarında sunmaktayım. Kira hukuku alanında, kiracı ve
                            mal sahipleri arasında yaşanan anlaşmazlıkların çözümünde, her iki tarafın haklarını dengeli
                            ve adil bir şekilde savunarak, sorunsuz bir çözüm süreci yaratmayı hedefliyorum. İdare
                            hukuku alanında, kamu ve özel sektör arasındaki ilişkilerde yaşanan hukuki meseleleri
                            çözerek, müvekkillerimin en iyi sonuçları almasını sağlıyorum.
                        </p>

                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 text-justify">
                            Aile hukuku da benim için büyük bir öneme sahiptir. Aile içi ilişkilerde, duygusal ve maddi
                            bağların kesilmesi, ayrıcalıklı bir hassasiyet gerektirir. Bu alandaki davalarımda,
                            müvekkillerime empatiyle yaklaşarak, en doğru çözümü bulmak için çalışıyorum. Ayrıca,
                            arabuluculuk alanında da aktif olarak yer almakta, taraflar arasında anlaşmazlıkların daha
                            hızlı ve dostane yollarla çözülmesine katkı sağlamaktayım.
                        </p>

                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 text-justify">
                            Hukuki süreçlerin karmaşıklığı, her zaman doğru stratejilerin ve uzmanlığın gerekliliğini
                            ortaya koymaktadır. Ben de bu anlayışla, müvekkillerimin her birine özel çözümler sunmak
                            için titizlikle çalışıyor ve her bir davada en iyi sonuçları almak adına özveriyle mücadele
                            ediyorum.
                        </p>

                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 text-justify">
                            Mesleki sorumluluğumun farkında olarak, her bir müvekkilime saygı, güven ve şeffaflık
                            ilkelerine dayalı bir hizmet sunmayı amaçlıyorum. Her durumda, müvekkillerimin haklarını en
                            güçlü şekilde savunmak, onları doğru bir şekilde yönlendirmek ve hukuki süreçlerinde
                            yanlarında olmak en büyük önceliğimdir. Hukuk büromda, her bir müvekkilime, onların
                            ihtiyaçlarına göre kişiye özel hukuki çözümler sunarak, adaletin sağlanmasına katkıda
                            bulunuyorum.
                        </p>

                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 text-justify">
                            Amacım, profesyonellikten ödün vermeden, her bir müvekkilimin hukuki süreçlerinde doğru
                            bilgi ve en etkili çözüm önerileriyle yanlarında olmak, hukuki meselelerini başarıyla
                            sonuçlandırmaktır.
                        </p>
                    </div>
                </div>
                {/* End Grid */}
            </div>
            {/* End Hero */}
        </>
    );
};

export default CustomUserProfile;