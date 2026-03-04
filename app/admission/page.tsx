export default function Page() {
  return (
    <section className="flex flex-col gap-10 py-10 px-4 sm:px-8 md:px-14">

      {/* TITLE */}
      <section className="space-y-2">
        <h2 className="text-neutral-700 text-3xl md:text-4xl font-bold tracking-tight">
          Admission Information
        </h2>
        <h3 className="text-primary text-3xl md:text-4xl font-bold tracking-tight">
          Chanika Kijani Botanical Garden
        </h3>
      </section>

      {/* OPENING HOURS */}
      <section className="bg-primary/10 rounded-lg p-6 space-y-3">
        <h3 className="text-primary text-xl md:text-2xl font-bold">
          Opening Hours
        </h3>

        <p className="text-neutral-700 leading-relaxed">
          The garden is open daily from <strong>9:00 AM to 11:00 PM</strong>.
          Entry gates close <strong>30 minutes before closing time</strong>.
        </p>

        <p className="font-semibold text-neutral-800">
          Open during all public holidays.
        </p>
      </section>

      {/* ENTRANCE FEES */}
      <section className="bg-primary/10 rounded-lg p-6 space-y-4">
        <h3 className="text-primary text-xl md:text-2xl font-bold">
          Entrance Fees
        </h3>

        <ul className="space-y-3 text-neutral-700 leading-relaxed">
          <li>
            <strong>Adults (Ages 13 and above)</strong><br />
            Weekends: ... <br />
            Weekdays: ...
          </li>

          <li>
            <strong>Children</strong><br />
            Ages 0–3: FREE <br />
            Ages 4–12 (Weekends & Public Holidays): ... <br />
            Weekdays: ...
          </li>

          <li>
            <strong>Seniors (65 and above):</strong> ...
          </li>

          <li>
            <strong>Garden Society Members:</strong> FREE
          </li>
        </ul>
      </section>

      {/* REGULATIONS */}
      <section className="bg-primary/10 rounded-lg p-6 space-y-5">
        <h3 className="text-primary text-xl md:text-2xl font-bold">
          Admission Regulations
        </h3>

        <ol className="list-decimal ml-5 space-y-3 text-neutral-700 leading-relaxed">
          <li>
            Children under the age of 13 must be accompanied by an adult.
            A teacher, parent, or guardian may supervise up to five children.
          </li>

          <li>
            Bicycles, skates, musical groups, and picnics are not permitted
            inside the garden.
          </li>

          <li>
            Visitors are kindly requested to remain on paved walkways at all times.
          </li>

          <li>
            Please exercise caution around water pools as some areas may be deep.
          </li>

          <li>
            Commercial and wedding photography require prior booking and fees.
            Tripods are allowed only for approved commercial shoots.
          </li>

          <li>
            Help us maintain cleanliness by disposing of litter responsibly.
          </li>

          <li>
            Facilities are available for private events including weddings,
            receptions, functions, and celebrations. Please contact reception.
          </li>

          <li>
            Visitors who fail to follow regulations may be asked to leave
            without refund.
          </li>

          <li>
            For inquiries:<br />
            📞 +255 782 83 55 07 <br />
            📧 info@chanikakijani.co.tz
          </li>
        </ol>
      </section>

    </section>
  );
}