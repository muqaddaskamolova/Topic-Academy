import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

function FAQ() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();

    const Bot_Token = '5451077302:AAFU0i-gDPDTG4_a0G-p9LS1beD5y_w-D4o';
    const chat_id = 966780181;
    const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phone').value;
    const MessageContent = `Name: ${name} \nPhoneNumber: ${phonenumber}`;

    axios.post(url, {
      chat_id: chat_id,
      text: MessageContent
    })
      .then((res) => {
        document.getElementById('myForm').reset();
        alert('You have sent the message successfully!');
      })
      .catch((err) => {
        alert('Something went wrong!');
        console.error('Something went wrong!', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-16" id="Questions">
      <h3 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-10">{t("")} Ko'p beriladigan savollar</h3>
      <ul className="max-w-3xl mx-auto">
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t("")} O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab topamanmi?</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t("")} O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab topamanmi?</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t("")} O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab topamanmi?</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t("")} O'quv materiallari bilan ta'minlaysizlarmi yoki o'zim izlab topamanmi?</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
      </ul>

      <div className="bg-gray-200 px-4 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-10 bg-opacity-70 rounded-2xl mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center items-start max-w-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold">{t("")} Savollaringiz qoldimi?</h2>
          <p className="text-base sm:text-lg">{t("")} Ma'lumotlaringizni qoldiring, siz bilan bog'lanib barcha savollaringizga javob beramiz.</p>
        </div>
        <form id="myForm" className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={SendMessage}>
          <input
            id="name"
            type="text"
            placeholder="Ismingiz"
            className="input input-bordered rounded-3xl input-primary w-full bg-green-400 bg-opacity-60"
          />
          <input
            id="phone"
            type="text"
            placeholder="+998 99-999-99-99"
            className="input input-bordered rounded-3xl input-primary w-full bg-green-400 bg-opacity-60"
          />
          <button
            type="submit"
            className="btn btn-success rounded-3xl text-white uppercase py-2 px-4 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? 'Yuborilmoqda...' : 'Savol berish'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FAQ;

