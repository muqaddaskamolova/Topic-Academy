import React from "react";
import Test1 from "../../assets/images/test1.svg";
import Test2 from "../../assets/images/test2.svg";
import Test3 from "../../assets/images/test3.svg";
import Test4 from "../../assets/images/test4.svg";
import Test5 from "../../assets/images/test5.svg";
import Test6 from "../../assets/images/test6.svg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="my-10" id="About">
      <h3 className="text-4xl text-center mb-20">
        {t("")} Nima uchun aynan TOPIK academy?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16">
        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img
            src={Test1}
            alt=""
            width={64}
            height={64}
            className="absolute top-[-35px] left-6"
          />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-xl font-bold">{t("")} Professional ustozlar</h5>
            <p>
              {t("")} Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo'lgan o'qituvchilar dars beradi
            </p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img
            src={Test2}
            alt=""
            width={64}
            height={64}
            className="absolute top-[-35px] left-6"
          />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-xl font-bold">{t("")} Bepul coworking zonalari</h5>
            <p>
              {t("")} Erkin dars qilish, networking va o'z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud
            </p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img
            src={Test3}
            alt=""
            width={64}
            height={64}
            className="absolute top-[-35px] left-6"
          />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-xl font-bold">{t("")} Haftalik tadbirlar</h5>
            <p>
              {t("")} TOPIC academy jamoasi o'quvchilari uchun doimiy ravishda qo'shimcha tadbirlar tashkil etiladi
            </p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img
            src={Test4}
            alt=""
            width={64}
            height={64}
            className="absolute top-[-35px] left-6"
          />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-xl font-bold">{t("")} Bepul sinov imtihonlari</h5>
            <p>
              {t("")} Har oy davomida tashkil etiladigan sinov imtihonlarida qatnashib o'z darajangizni bilib borasiz
            </p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img
            src={Test5}
            alt=""
            width={64}
            height={64}
            className="absolute top-[-35px] left-6"
          />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-xl font-bold">{t("")} Yordamchi kuratorlar</h5>
            <p>
              {t("")} Darslarni o'zlashtirishda qiyinchilik bo'lsa sizga yordam beradigan kuratoringiz bo'ladi
            </p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img
            src={Test6}
            alt=""
            width={64}
            height={64}
            className="absolute top-[-35px] left-6"
          />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-xl font-bold">{t("")} Konsultant hizmati</h5>
            <p>
              {t("")} Muvaffaqiyatli bitirgan talabalarimizga Janubiy Koreada o'qishi uchun viza olishda, universitet tanlash va grant yutishda yordam beramiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;