import React from 'react';
import Image from "next/image";

const CustomUserProfile = () => {
    return (
        <>
            {/* Hero */}
            <div className="w-full mx-auto mt-5 p-4 shadow-md rounded-md">
                {/* Grid */}
                <div className="grid md:grid-cols-2 md:items-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/user_example.jpeg"
                            width={600}
                            height={800}
                            alt="Picture of the author"
                            className="rounded-md"
                        />
                    </div>
                    <div>
                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                            Avukat [Ad Soyad]

                            1990 yılında İstanbul’da doğan Avukat [Ad Soyad], hukuk eğitimini [Üniversite Adı] Hukuk
                            Fakültesi’nde başarıyla tamamlayarak 2013 yılında mezun olmuştur. Mezuniyetinin ardından,
                            Türkiye Barolar Birliği’ne bağlı olarak İstanbul Barosu’na kaydolan Avukat [Ad Soyad],
                            alanında uzmanlaşmak için pek çok önemli hukuk bürosunda deneyim kazanmış ve kendine özgü
                            başarılı bir kariyer oluşturmuştur.

                            İş hukuku, ticaret hukuku, gayrimenkul hukuku ve medeni hukuk gibi geniş bir yelpazede
                            uzmanlık kazanmış olan Avukat [Ad Soyad], müvekkillerine etkili ve çözüm odaklı bir hukuki
                            destek sunmaktadır. Özellikle şirketlere yönelik hukuki danışmanlık hizmetleri sunarak iş
                            dünyasında karşılaşılabilecek hukuki riskleri en aza indirgemek ve önleyici hukuk
                            uygulamaları geliştirmek konusunda büyük bir tecrübeye sahiptir. Ticari davalar, sözleşme
                            hazırlıkları, işçi-işveren ilişkileri ve icra takibi gibi alanlarda başarılı sonuçlar elde
                            ederek müvekkil memnuniyeti sağlamayı başarmıştır.

                            Hukuki bilgi ve becerilerini güncel tutmak adına ulusal ve uluslararası pek çok seminer ve
                            konferansa katılan Avukat [Ad Soyad], sürekli gelişimi ve eğitimi ilke edinmiştir. Aynı
                            zamanda, [Uzmanlık Alanı] üzerine çeşitli makaleler yayımlayarak hem meslektaşlarına hem de
                            hukuk alanına ilgi duyan kişilere katkı sağlamaktadır.

                            Müvekkil haklarını korumada titizlik gösteren Avukat [Ad Soyad], hukuki süreçlerde müvekkil
                            ile şeffaf bir iletişim içinde olarak güvenilir bir temsil sunar. Her davada etkin bir
                            strateji geliştiren Avukat [Ad Soyad], adaletin sağlanması noktasında etik değerlere bağlı
                            kalmaktadır. Kişisel olarak toplumsal sorumluluk projelerine gönüllü destek veren ve hukuk
                            alanındaki yeni nesillere ilham vermeyi hedefleyen Avukat [Ad Soyad], aynı zamanda çeşitli
                            sivil toplum kuruluşlarıyla iş birliği içerisinde çalışmaktadır.

                            Güçlü müzakere yeteneği, analitik düşünce becerisi ve ayrıntılara verdiği önemle fark
                            yaratan Avukat [Ad Soyad], kariyerine daha büyük başarılar katmayı ve müvekkil memnuniyetini
                            en üst düzeye çıkarmayı amaçlamaktadır.

                            Uzmanlık Alanları

                            İş Hukuku
                            Ticaret Hukuku
                            Gayrimenkul Hukuku
                            Aile Hukuku
                            Ceza Hukuku
                            İletişim
                            Telefon: [Telefon Numarası]
                            E-posta: [E-posta Adresi]
                            Adres: [Ofis Adresi]
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