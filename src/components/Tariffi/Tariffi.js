import React from 'react'

export default function Tariffi({tariff}) {
 
 let hit = '';

 tariff.hit ? hit = 'hit' : hit = 'nothit';
    return (
        <div>
       
         <div className="container">
<div className="hidden-xs">
    <table className="table">
        <tbody>
<tr>
   <td className={hit}><span className="title" >{tariff.title}</span>
    <div className="price">
        <div>
             <span>{tariff.price}</span>
            <div className="price-value">
                 <span className="value">{tariff.priceValue}</span>
                  <span className="per-value">  
                     <span>{tariff.forMuch}</span>
                 </span>
        </div>
    </div>
</div>
 <a href={tariff.tariffLink} className="box-link"></a>
         </td>
         <td className="price-td">

<div>
    <div className="tariff-info-item">
        <span className="sku-value">
            <span>{tariff.internetTraffic}</span>
            <span>{tariff.volium}</span>
        </span>
    </div>
        <div className="preamble-grouped-services">
            <div className="preamble-text graphical">{tariff.text}</div>
            <div className="service-icon">
                {tariff.socialUnlim && tariff.socialIcon.map(o => <img src={o}/>)}
            </div>
        </div>
</div>
        </td>
        <td className="price-td">

<div>
    <div className="tariff-info-item">
        <span className="sku-value">
            <span>{tariff.minutes !== 0 && tariff.minutes}</span>
            <span>{tariff.time !== 0 && tariff.time }</span>
        </span>
    </div>
       <div className="tariff-info-item">
    <div className="group-title">{tariff.limit !== 0 && tariff.limit}</div>
       </div>    
</div>
        </td>
      
        <td className="price-td">

<div>
    <div className="tariff-info-item">
        <span className="sku-value">
            <span>{tariff.massage !== 0 && tariff.massage}</span>
            <span>{tariff.sms}</span>
        </span>
    </div>
       
</div>
        </td> 
        <td class="buttons-td">
            <div class="btns-rows">
                <div class="sim-btn-wrapper">
                    <a class="btn btn-small" id="shopButtons_SimBuyButton_prodVezdeOnlineMSK_062019-21">
                        <span>Купить SIM</span>
                    </a>
                </div>
            </div>
        </td>  
</tr></tbody>
</table>


</div>
</div>

        </div>  
    )
}