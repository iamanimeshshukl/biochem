import React from "react";

const Guidline = () => {
  return (
    <div className="p-6 m-6 bg-gray-50 text-gray-800">
      {/* General Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">General</h1>
        <p className="text-lg leading-relaxed">
          Participation is open to individuals engaged in cross-disciplinary research and
          development, teaching, consultancy, planning, business, and other related areas
          within biochemical, biorefineries, energy, biotechnology, and environmental fields
          focused on bioprocess development. Plenary and invited presentations will be made
          by the experts (by invitation only). Contributory participants are invited to submit
          abstracts for oral presentations and poster presentations.
        </p>
      </section>

      {/* Guidelines for Abstract Submission */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Guidelines for Abstract Submission</h2>
        <p className="text-lg leading-relaxed">
          We invite you to submit an abstract of your original research for consideration as
          an oral or poster presentation at BIO-METACON-2025. The abstract should be
          submitted by the presenting author, who will be notified of its acceptance following
          the evaluation process. Details on abstract preparation and submission can be found
          <a href="#" className="text-blue-500 hover:underline"> here</a>.
        </p>
      </section>

      {/* Guidelines for Poster Presentation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Guidelines for Poster Presentation</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>
            Prepare your poster according to the poster template given
            <a href="#" className="text-blue-500 hover:underline"> here</a>.
          </li>
          <li>
            Each poster will be assigned a poster number which will be shown on the poster board.
          </li>
          <li>
            Presenting authors should remain near their poster during the poster session to
            interact with delegates and juries.
          </li>
          <li>
            During the poster session, you should be prepared to give a 3-4 minute summary
            about your project. Be sure to ask your audience if they have questions or
            comments at the end. You might also consider having a brief handout to share.
          </li>
        </ul>
      </section>

      {/* Guidelines for Oral Presentation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Guidelines for Oral Presentation</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>
            Prepare your presentation according to the PowerPoint template given
            <a href="#" className="text-blue-500 hover:underline"> here</a>.
          </li>
        </ul>
      </section>

      {/* Guidelines for Full Paper Submission */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Guidelines for Full Paper Submission</h2>
        <p className="text-lg leading-relaxed">
          Work presented in the conference will be eligible for submission to the special
          issues of the selected journals, which will be reviewed following the standard peer
          review process of the journal. Mere acceptance of the abstract in the conference
          will not qualify the manuscript for publication in these journals. Each registered
          delegate will be eligible to submit one manuscript to the journal of his/her choice.
        </p>
      </section>

      {/* Awards Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Awards</h2>
        <p className="text-lg leading-relaxed">
          Outstanding oral and poster presentations will be conferred with Best Oral and
          Poster Awards.
        </p>
      </section>

      {/* Scientific Program */}
      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Scientific Program</h2>
        <p className="text-lg leading-relaxed">
          The scientific program will include plenary and invited lectures by peers (by
          invitation only) as well as contributory (i) oral and (ii) poster presentations. Each
          oral and poster presentation will be evaluated, and the scores will be considered in
          determining the Best Paper Awards.
        </p>
      </section>
    </div>
  );
};

export default Guidline;