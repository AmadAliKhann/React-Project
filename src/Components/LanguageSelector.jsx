import React from 'react';
import {useEffect} from 'react'
import {useTranslation} from "react-i18next"
import i18next from 'i18next';

function LanguageSelector() {
 const {i18n,t} = useTranslation(["meal"]);

 useEffect(()=>{
if(localStorage.getItem("i18nextLng")?.length >2){
    i18next.changeLanguage("en");
}
 },[]);
 const handleLanguageChange = (e) =>{
i18n.changeLanguage(e.target.value);
 }
  

  return (
    <div>
      <label>{t("language")} </label>
      <select value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}  >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
