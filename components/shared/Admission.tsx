import React from "react";

export const Admission: React.FC = () => {
  return (
    <section className="admission py-8 px-4 sm:px-10 md:px-20">
      <h2 className="text-3xl font-bold mb-4">
        ADMISSION / KUKUBALIWA
      </h2>

      <p className="mb-2">
        <strong>STANDARD TIME / SAA YA KAWAIDA:</strong><br/>
        Open Every Day 9:00am - 11:00pm <br/>
        Entry gates close 30 minutes prior to closing time.<br/>
        <em>Funguliwa kila siku kutoka 9:00am hadi 11:00pm. Malango yanafungwa dakika 30 kabla ya kufungwa.</em>
      </p>

      <p className="mb-4 font-semibold">
        Open all public holidays / Fungua siku zote za likizo za umma
      </p>

      <h3 className="text-xl font-semibold mb-2">ENTRANCE FEES / ADA YA KUKIINGIA</h3>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Adults / Watu wazima:</strong> 
          Weekends: ... <br/>
          Weekdays: ... <br/>
          (Ages 13 and above / Umri 13 na kuendelea)
        </li>
        <li>
          <strong>Children / Watoto:</strong> 
          0-3: FREE / BURE <br/>
          4-12: Weekends & PH: ... <br/>
          Weekdays: ...
        </li>
        <li><strong>Seniors / Wazee (65+):</strong> ...</li>
        <li><strong>Garden Society Members / Wanachama:</strong> FREE / BURE</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">ADMISSION REGULATIONS / SHERIA ZA KUKIINGIA</h3>
      <ol className="list-decimal ml-5 space-y-2">
        <li>Children under 13 must be accompanied by an adult. Teacher/guardian may sponsor five children. / Watoto chini ya miaka 13 lazima wawe na mzazi au mwalimu. Mzazi/mlezi anaweza kusimamia watoto 5.</li>
        <li>Bicycles, skates, musical groups, and picnics are not permitted. / Baiskeli, skates, makundi ya muziki, na picnic haziruhusiwi.</li>
        <li>Please remain on paved walks. / Tafadhali baki kwenye njia zilizopakwa bati.</li>
        <li>Be careful around water pools; water can be deep. / Kuwa makini karibu na mabwawa ya maji; maji yanaweza kuwa ya kina.</li>
        <li>Commercial/wedding photos are charged. Tripods only with commercial shoots. Book via reception. / Upigaji picha wa kibiashara au harusi unatozwa ada. Tripod inaruhusiwa kwa upigaji picha wa kibiashara tu. Fanya booking kupitia reception.</li>
        <li>Keep Gardens and Amusement Park clean. Dispose litter properly. / Saidia kudumisha bustani safi kwa kutupa takataka mahali sahihi.</li>
        <li>Facilities may be rented for events. Contact reception. / Vyombo vinaweza kukodishwa kwa hafla. Wasiliana na reception.</li>
        <li>Visitors not following regulations may be asked to leave without refund. / Wageni wasiofuata sheria wanaweza kuombwa kuondoka bila kurejeshewa ada.</li>
        <li>Info: +255 782 83 55 07 | info@chanikakijani.co.tz</li>
      </ol>
    </section>
  );
};
