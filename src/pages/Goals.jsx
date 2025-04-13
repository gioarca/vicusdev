import React from "react";
import { useTranslation } from "react-i18next";

function Goals() {
  const { t } = useTranslation(); // Inizializza useTranslation

  return (
    <div className="flex flex-col items-center text-left justify-center">
      <h1 className="text-2xl font-bold m-3">{t("goals_page.title")}</h1>

      <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 m-5">
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
          <img
            src="https://e4k4c4x9.delivery.rocketcdn.me/it/wp-content/uploads/sites/3/2019/03/SDG-icon-IT-RGB-08.jpg"
            alt=""
            width="200"
            className="flex flex-col items-center text-center m-auto"
          />
          <p className="m-3">{t("goals_page.goal_1")}</p>
        </div>
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
          <img
            src="https://e4k4c4x9.delivery.rocketcdn.me/it/wp-content/uploads/sites/3/2019/03/SDG-icon-IT-RGB-09.jpg"
            alt=""
            width="200"
            className="flex flex-col items-center text-center m-auto"
          />
          <p className="m-3">{t("goals_page.goal_2")}</p>
        </div>
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3c0TqKGHnyrptqP_NRiPY6_eESR-gFP_3Hg&s"
            alt="Obiettivo 10 - Ridurre le disuguaglianze"
            width="200"
            className="flex flex-col items-center text-center m-auto"
          />
          <div className="m-3">
            <p>{t("goals_page.goal_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
