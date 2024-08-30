import Marquee from "react-fast-marquee";
import Form from "../assets/images/forma2.png";
import { useTranslation } from "react-i18next";

function Aid() {
  const { t } = useTranslation();

  return (
    <div className="align-content mt-10 px-4 lg:px-0">
      {/* Sarlavha */}
      <h3 className="text-2xl lg:text-4xl font-semibold text-center mb-10 max-w-3xl mx-auto">
        {t("")}Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda
        yordam beramiz
      </h3>
      
      <div className="flex flex-col gap-5 sm:flex-row items-center">
        {/* Matn va tugma */}
        <div className="max-w-md mx-auto sm:mx-0">
          <h6 className="text-xl lg:text-2xl mb-5 lg:mb-10">
            <span className="text-accent">{t("")}TOPIK academy consulting</span>{" "}
            {t("")}jamoasi sizga universitet tanlash, visa olish va grant yutishingizda
            yaqindan ko’maklashadi
          </h6>
          <p className="text-base lg:text-lg mb-5">
            {t("")} Ko'proq ma'lumot olish uchun bepul konsultatsiyaga yoziling!
          </p>
          <button className="btn btn-accent text-white px-8 py-2 lg:px-10 lg:py-3">
            Ariza qoldirish
          </button>
        </div>

        {/* Marquee */}
        <div className="flex-1">
          <Marquee>
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Aid;