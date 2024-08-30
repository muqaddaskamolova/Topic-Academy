import React from "react";
import GKS from "../assets/images/gks.png";
import { useTranslation } from "react-i18next";

function Grant() {
  const { t } = useTranslation();
  
  return (
    <div className="py-10 px-4 md:px-8">
      {/* Sarlavha */}
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 max-w-3xl mx-auto">
        {t("")} Koreya Universitetlariga 100% gacha grant yutish imkoniyati
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rasm */}
        <div className="flex justify-center items-center">
          <img src={GKS} alt="GKS Scholarship" className="w-full h-auto max-w-sm" />
        </div>

        {/* Matn */}
        <div className="flex flex-col justify-center">
          <h5 className="text-xl font-semibold mb-5">
            {t("")} GKS (Global Korean Scholarship){" "}
            <span className="text-green-400">$70,000</span> lik Grant
          </h5>
          <p className="mb-5 text-base">
            {t("")} Janubiy Koreya hukumatining stipendiya dasturi (GKS) {t("")} Koreyaning
            Xalqaro ta'lim bo'yicha milliy instituti tomonidan{" "}
            <span className="text-blue-400">{t("")}xorijiy </span>
            {t("")} talabalarning Koreyada bakalavr va <br />{t("")} magistratura bosqichida{" "}
            <span className="text-blue-400">{t("")}100% gacha to’liq grant</span>{" "}
            <br /> {t("")}va oylik stipendiya olish imkoniyatingiz bor
          </p>
          
          <h5 className="text-xl font-semibold my-5">
            {t("")} GKS granti sizga nima beradi
          </h5>
          <ul className="list-disc list-inside pl-5">
            <li className="mb-2">
              {t("")} Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan
              qaytish xarajatlari qoplanadi.
            </li>
            <li className="mb-2">
              {t("")} Koreyaga yetib borganda joylashib olish uchun bir martalik
              to'lov beriladi. Miqdori - 200,000 Koreya voni (taxminan 157 AQSh
              dollari).
            </li>
            <li>
              {t("")} Til kursi va universitetning kontrak to'lovi to'liq to'lab
              beriladi (faqat magistr va doktorantlarga)... <span className="text-blue-300">ko’proq</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Grant;