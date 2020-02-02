import React from 'react'
import Tariffi from '../Tariffi/Tariffi';

export default function TariffsItem() {
    
    const tariffs = [
        { title: "Везде онлайн ", hit:true, price: 500, priceValue:'₽', forMuch:"/месяц", hit:true,internetTraffic:40,volium:"GB",text:"+безлимитные",tariffLink:"https://msk.tele2.ru/tariff/everywhere-online",minutes:500,time:"минут",limit: "безлимитный на Tele2 России",massage:50,sms:"SMS", socialIcon: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005','https://msk.tele2.ru/api/media/asset?mediaId=m220001','https://msk.tele2.ru/api/media/asset?mediaId=m220003','https://msk.tele2.ru/api/media/asset?mediaId=m220006','https://msk.tele2.ru/api/media/asset?mediaId=m220004',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1990041','https://msk.tele2.ru/api/media/asset?mediaId=m1680033'], socialUnlim: true},
        { title: "Мой онлайн ", price: 400, priceValue:'₽', forMuch:"/месяц", internetTraffic:15, volium:"GB",text:"+безлимитные",tariffLink:"" ,minutes:500,time:"минут",limit: "безлимитный на Tele2 России" ,message: false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png", socialIcon: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005','https://msk.tele2.ru/api/media/asset?mediaId=m220001','https://msk.tele2.ru/api/media/asset?mediaId=m220003','https://msk.tele2.ru/api/media/asset?mediaId=m220006','https://msk.tele2.ru/api/media/asset?mediaId=m220004',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1990041','https://msk.tele2.ru/api/media/asset?mediaId=m1680033'], socialUnlim: true},
        { title: "Мой онлайн +", price: 700,forMuch:"/месяц", internetTraffic:30, volium:"GB",text:"+безлимитные",tariffLink:"",minutes:800,time:"минут" ,limit: "безлимитный на Tele2 России",message: false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png", socialIcon: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005','https://msk.tele2.ru/api/media/asset?mediaId=m220001','https://msk.tele2.ru/api/media/asset?mediaId=m220003','https://msk.tele2.ru/api/media/asset?mediaId=m220006','https://msk.tele2.ru/api/media/asset?mediaId=m220004',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1990041','https://msk.tele2.ru/api/media/asset?mediaId=m1680033'], socialUnlim: true},
        { title: "Мой разговор", price: 200, priceValue:'₽', forMuch:"/месяц",internetTraffic:2,volium:"GB",text:false,tariffLink:"",minutes:200,time:"минут" ,limit: "безлимитный на Tele2 России",message: false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png"},
        { title: "Мой Tele2", price: 7, priceValue:'₽', forMuch: "/день",volium:false,text:false,tariffLink:"",minutes:false,time:false, limit: "безлимитный на Tele2 России",message: false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png"},
        { title: "Безлимит ",  price: 650,priceValue:'₽', forMuch:"/месяц",volium:"Безлимитный интернет", tariffLink:"", limit: "безлимитный на Tele2 России",minutes:500,time:"минут",massage:50, sms:"SMS"},
        { title: "Премиум ",  price: 1500,priceValue:'₽', forMuch:"/месяц", internetTraffic:50,volium:"GB",tariffLink:"", limit: "безлимитный на Tele2 России",minutes:2000,time:"минут",massage:500, sms:"SMS"},
        { title: "Классический ", text:"Без абанентской платы", price:false,  volium:false, tariffLink:"", limit: false,minutes:false, time:false, sms:false,icon:"https://www.insofta.com/tml12/symbol-duo-icons/preview/options.png"},
        { title: "Интернет для устройств",  text:"Без абанентской платы", price:false, tariffLink:"", volium:false, limit: false,minutes:false ,time:false,message: false, sms:false},
        { title: "Интеренет для вещей",  price: 100, priceValue:'₽', forMuch:"/месяц", internetTraffic:300,volium:"GB", tariffLink:"", limit: false, minutes:30,time:"минут",massage:100, sms:"SMS"},
    ];  
    const tariff = tariffs.map(p=>({
      ...p,

    }))
    
    return (
        <div>
           <center> <div className="tarrifs-name"><h1>Тарифы</h1></div></center>
            {tariff.map(o => <Tariffi tariff = {o}/>)}
        </div>
    )
}
