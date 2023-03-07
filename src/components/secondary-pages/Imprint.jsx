import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { goToTopOfPage } from '../../util/goToTopPge';

function Imprint() {
  const impressum = useRef(null);
  const privacy = useRef(null);
  const shipping = useRef(null);
  const cancellation = useRef(null);
  const tAndC = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <main className="imprint_background_container">
      <section className="imprint_content_container">
        <header className="imprint_heading">IMPRINT</header>

        <div className="imprint_button_container">
          <Link
            to=""
            onClick={() => scrollToSection(impressum)}
            aria-label="Link to Impressum Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">IMPRESSUM</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(privacy)}
            aria-label="Link to Privacy Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">PRIVACY</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(shipping)}
            aria-label="Link to Shipping Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">SHIPPING</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(cancellation)}
            aria-label="Link to Cancellation Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">CANCELLATION</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(tAndC)}
            aria-label="Link to T & C Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">T & C</button>
          </Link>
        </div>
        <div className="imprint_home_button_container">
          <Link
            onClick={goToTopOfPage}
            aria-label="Home button from Imprint"
            to="/"
            className="button_link"
          >
            <button className="button_phone_footer">HOME</button>
          </Link>
        </div>
        <section ref={impressum} className="imprint_section_container">
          <p className="imprint_text_container">
            INFORMATION ACCORDING TO § 5 TMG <br /> BOHEMIAN KIDS CAFE <br />
            University street 18 04109, Leipzig <br /> Inh. Michael Schroeter
            <br />
            Tax number : GB 316 216 628
          </p>
          <p className="imprint_text_container">
            CONTACT : <br />
            E-Mail: info@bohemiankidscafe.de <br /> Homepage:
            bohemiankidscafe.de <br />
            tel. 0341 24782405
          </p>
          <p className="imprint_text_container">
            RESPONSIBLE FOR EDITORIAL CONTENT: <br /> Michael Schroeter <br />{' '}
            University street 18 <br /> 04109, Leipzig
          </p>
          <p className="imprint_text_container">DISCLAIMER</p>
          <p className="imprint_text_container">
            LIABILITY FOR THE CONTENT OF OUR WEBSITES <br />
            According To § 7 Abs.1 German Telemedia act (TMG), I am, as a
            service provider to our own content on these pages under the General
            laws responsible. According to §§ 8 to 10 of the TMG, I don't have a
            monitor as a service provider, however, the duty of the transmitted
            or stored third-party information or to search for Clues to illegal
            activity. Legal obligations for the removal or blocking of any
            content or information or to blocking of possibilities of use of our
            website are exempt. A liability may, however, only from the time of
            the occurrence to which I have received by a breach of law As soon
            as I learn of a violation of law in the context of my web pages,
            I'll remove the content immediately.
          </p>
          <p className="imprint_text_container">
            LIABILITY FOR LINKS <br />
            This Internet site contains Links to external Websites of third
            parties. I expressly point out that I have no control over the
            content of these Websites. For the content of these websites can I
            apply accordingly, no liability or guarantee. Responsible with their
            respective providers or operators. I have reviewed these pages at
            the time of linking for possible violations of the law, and no
            illegal content was found. A permanent control of the linked pages
            is, however, not possible. A Review can only take place if there are
            concrete indications of a violation of the law. I know of a
            violation of the law on the linked websites, I will remove the
            respective Link immediately to my Website.
          </p>
          <p className="imprint_text_container">
            COPYRIGHT <br />
            For my website content and works published in the German law will
            apply. Any duplication, processing, dissemination and exploitation
            requires the written consent of its respective author or Creator.
            Downloads and copies of these pages are only for private,
            non-commercial use is permitted. My sites may have content that was
            not created by the operator itself. In this content, third-party
            copyrights have been observed. Content in which third parties have
            copyright are marked accordingly. On my web pages are still a breach
            of copyright, please let me know. I will remove the content
            immediately from my websites. Notes on data protection .
          </p>
        </section>
        <section className="imprint_section_container">
          <p className="imprint_text_container">
            GENERAL <br />
            Terms and conditions <br />
            Conditions of contract in the context of sales contracts, the other
            on the platform www.bohemiankidscafe.de between Bohemian Kids Cafe
            Michael Schroeter University street 18 04109 Leipzig – in the
            Following, a "seller" and in § 2 of these terms and conditions
            referred to users of this platform in the Following
            "customer/customer" – will be closed.
          </p>
          <p className="imprint_text_container">
            § 1 scope of application For the business relationship between the
            seller and the customer, the following terms and conditions apply at
            the time the order is placed. Deviating conditions of the customer
            are not recognized, unless the seller expressly agrees to their
            validity in writing. The present General terms and conditions apply
            to customers who are consumers within the meaning of § 13 of the
            German civil code (hereinafter referred to as the consumer), or an
            entrepreneur within the meaning of § 14 of the German civil code
            (hereinafter referred to as contractor), unless specific provisions
            are to be found only on the legal relationship with a consumer or
            business application. A consumer within the meaning of § 13 BGB is
            any natural Person who concludes a legal transaction for purposes
            which can predominantly neither their commercial nor their
            independent professional activity. Entrepreneurs in the meaning of §
            14 BGB is any natural or legal Person or a legal partnership, in
            concluding a legal transaction, acts in exercise of its commercial
            or independent professional activities. A legal partnership is a
            partnership that is equipped with the ability to acquire rights and
            incur liabilities.
          </p>
          <p className="imprint_text_container">
            § 2 offer, conclusion, storage of the contract 2.1. The Online Shop
            of illustrated Goods are not a binding offer by the seller for the
            conclusion of a purchase contract. Rather, they include only the
            call to the customer to make a contract offer to the seller. 2.2. To
            order, their correction and issue of the binding contractual offer
            by the customer, the following three technical steps are required:
            When the customer has found the desired product, he can set this by
            Clicking on the button "add To cart" non-binding in the shopping
            cart. The content of the shopping cart, the customer may at any time
            by Clicking the "shopping cart"icon or the alert that "view cart".
            The Goods, the customer can remove any from the cart by pressing the
            next to the product Button "Icon-cross". The order can be cancelled
            at any time. If the customer wants to buy the Goods will need to
            click the bottom right find "checkout" Button. The customer must be
            following to enter his / her personal data for contract processing
            is necessary (see data protection), specify the desired payment and
            the acceptance of the terms and conditions to confirm. Finally, the
            input data Were (as well as personal information, payment method,
            etc.) will be displayed once again. The customer then has to correct
            his input by Clicking on the button "Remove" to or edit the number.
            The customer by clicking on the button "Buy Now" and the sending of
            the personal data of a binding offer in the virtual "shopping cart"
            contained in the Goods to the seller. 2.3. The seller will inform
            the customer immediately about the access of his order by E-Mail.
            This "order confirmation" with the subject "Bohemian Kids Cafe: New
            order" is confirmed, no acceptance of the offer, so that not a
            contract of sale is concluded. It is only used for the fulfillment
            of legal obligations. 2.4. A purchase contract is concluded when the
            seller accepts the offer of the customer within 2 working days by
            E-Mail, telephone, postal mail or by delivering the goods to be
            binding. Otherwise, the offer is rejected and the customer is no
            longer bound by it. 2.5. The seller reserves the right to limit the
            quantity on a budget usual amount. 2.6. The text of the contract
            will be stored by the seller and may no longer be available after
            the conclusion of the ordering process. Should the customer want to
            document his order data, you should copy the customer before
            submitting the binding order, print or otherwise save. The seller
            shall, however, at the latest at the time of delivery of the goods,
            a contract confirmation, in which the contract is content to play.
            2.7. The contract is concluded in the English language.
          </p>
          <p className="imprint_text_container">
            § 3 Delivery, Availability Of Goods, Payment Modalities 1. Delivery
            times provided by us are calculated from the date of our order
            confirmation (§ 2 2.4 of these terms), prior payment of the purchase
            price provided. The period of delivery begins, when paying by credit
            card or PayPal on the day after issuing the payment order to the
            transferring credit Institute, or, when using other payment methods,
            on the day after the conclusion of the contract, and ends with the
            expiry of the last day of the period. The last day of the period
            falls on a Saturday, Sunday or a public holiday delivery nationally
            recognized, the next working day takes the place of such a day. 2.
            The customer in the order designated product is only temporarily
            unavailable, the provider informs the customer of this immediately.
            3. The following are delivery restrictions: The vendor shall deliver
            only to customers who have their habitual residence (invoice
            address) in one of the following countries and in the same country
            of the delivery address: Germany, can specify. 4. The customer can
            make the payment by "credit card" and "PayPal". 5. The payment of
            the purchase price is immediately due with contract. The due date of
            the payment is determined by the calendar, the customer will be due
            to Failure to observe the deadline is in default.
          </p>
          <p className="imprint_text_container">
            § 4 prices and shipping costs 1. The prices include the legal VAT
            and are expressed in EURO. With the exception of shipping and
            packaging section 4.2 cost (.) as well as the method of
            payment-related costs, there is no additional price components for
            deliveries in Germany. In the event of deliveries outside of
            Germany, duties, customs fees, and import sales taxes will be due.
            These costs are to be borne by the customer. The customer
            indemnifies the seller from any claims in respect of these costs.
            For the correct customs clearance of the goods and any costs
            incurred, the customer is responsible. 2. The prices indicated do
            not include shipping and packaging costs. Details of the shipping
            and packaging costs in the context of the specific presentation of
            the goods during the ordering process or under "shipping/delivery".
            These costs are charged to the customer, unless otherwise agreed or
            otherwise stated in the relevant statutory provisions. 3. The
            customer has to bear in case of cancellation, the direct costs of
            returning the goods.
          </p>
          <p className="imprint_text_container">
            § 5 warranty 1. The provider is liable for defects in accordance
            with the applicable statutory provisions, in particular §§ 434 et
            seq. of the German civil code. Compared to entrepreneurs, the
            warranty period for goods delivered by the supplier is 12 months.
          </p>
          <p className="imprint_text_container">
            § 6 final provisions 1. On all contracts between the supplier and
            the customer, the laws of the Federal Republic of Germany under
            exclusion of the UN sales law and private international law. 2. If
            the customer is a merchant, a legal entity of public Law or a
            public-law special Fund, the place of jurisdiction for all disputes
            from contractual relationships between the customer and the provider
            is the seat of the provider.
          </p>
        </section>
        <section ref={privacy} className="imprint_section_container">
          <p className="imprint_text_container">
            {' '}
            PRIVACY POLICY This privacy statement explains the type, scope and
            purpose of the processing of personal data (hereinafter "data")
            within our online offer and the associated websites, functions and
            contents as well as external online presences, e.g. our Social Media
            Profiles (hereinafter collectively referred to as "online offer").
            With regard to the terminology used, e.g. "processing" or
            "responsible", we refer to the definitions in article 4 of the data
            protection basic regulation (DSGVO). Responsible Michael Schroeter
            Bohemian Kids Cafe University street 18 04109 Leipzig Germany
            E-Mailadresse: info@bohemiankidscafe.de Director: Schroeter, Michael
            Link to imprint: https://www.bohemiankidscafe.de/impressum/
          </p>
          <p className="imprint_text_container">
            Types of processed data: – Inventory data (e.g., names, addresses).
            – Contact details (e.g., E-Mail, telephone numbers). – Content data
            (e.g. text input, photographs, Videos). – Usage data (e.g. websites
            visited, interest in content, access times). – Meta/communication
            data (e.g. device information, IP addresses). Categories of affected
            persons Visitors and users of the online offer (Hereinafter we refer
            to the affected persons collectively to as "users"). The purpose of
            the processing – Provision of the online offer, its functions and
            contents. – Answering contact requests and communicating with users.
            – Safety measures. – Reach Measurement/Marketing
          </p>
          <p className="imprint_text_container">
            Used Terminology "Personal data" is any information relating to an
            identified or identifiable natural Person (hereinafter "data
            subject"); an identifiable natural Person is considered to be,
            directly or indirectly, in particular by means of assignment to an
            identifier such as a name, an identification number, to location
            data, to identify an Online identifier (e.g. Cookie) or to one or
            more specific characteristics can be, the expression of the
            physical, physiological, genetic, mental, economic, cultural or
            social identity of this natural Person. "Processing" is any with or
            without the aid of automated processes executed transaction or any
            such series in connection with personal data. The term goes far and
            includes virtually every handling of data. "Pseudonymisation" means
            the processing of personal data in such a manner that the personal
            data can no longer be assigned without the involvement of additional
            information specific to the Person concerned, provided that such
            additional information is kept separately and technical and
            organizational measures are subject to ensuring that the personal
            data are not attributed to an identified or identifiable natural
            Person. "Profiling" means any kind of automated processing of
            personal data, which consists of, these personal data will be used
            to evaluate certain personal aspects relating to a natural Person,
            in particular aspects relating to work performance, economic
            situation, health, personal preferences, interests, reliability,
            behavior, location or change of location to analyze this natural
            Person or to predict. As a "responsible person" means the natural or
            legal Person, public authority, Agency or other body which alone or
            jointly with others determines the purposes and means of the
            processing of personal data. "Processor" means a natural or legal
            Person, public authority, Agency or other body which processes
            personal data on behalf of the controller.
          </p>
          <p className="imprint_text_container">
            Relevant Legal Bases In accordance with the provisions of article 13
            DSGVO we inform you about the legal basis of our data processing.
            Unless the legal basis in the data protection is mentioned
            Declaration, the following applies: The legal basis for obtaining
            consent, art. 6, Para. 1 lit. a and article 7 DSGVO, the legal basis
            for the processing for the fulfilment of our services and
            implementation of contractual measures as well as responding to
            requests art. 6, Para. 1 lit. b DSGVO, the legal basis for
            processing to fulfill our legal obligations art. 6, Para. 1 lit. c
            DSGVO, and the legal basis for processing to protect our legitimate
            interests is article 6 Para. 1 lit. f DSGVO. In the event that the
            vital interests of the data subject or of another natural Person
            make the processing of personal data necessary, article 6, Para. 1
            lit. d DSGVO as legal basis. Security measures We meet in accordance
            with the provisions of article 32 DSGVO, taking into account the
            State of the art, the costs of implementation and the nature, scope,
            circumstances and purposes of the processing and the different
            likelihood and Severity of the risk to the rights and freedoms of
            natural persons, and appropriate technical and organizational
            measures to ensure that the risk adequate level of protection. The
            measures include in particular the securing of confidentiality,
            integrity and availability of data by controlling the physical
            access to the data, as well as the respective access, entry,
            transmission, the securing of availability and its separation.
            Furthermore, we have established procedures to ensure that users '
            rights, deletion of data and reaction to endangerment of the data.
            In addition, we take into account the protection of personal data
            already in the development, or selection of Hardware, Software and
            procedures, according to the principle of data protection by
            technology design and by privacy-friendly default settings (article
            25 DSGVO). Cooperation with contract processors and third parties If
            we reveal our processing of data in relation to other persons and
            companies (contract processors or third parties), you grant to
            transmit, or you otherwise have access to the data, this is done
            only on the basis of a legal permission (eg if a Transmission of the
            data to third parties, as to payment service providers, pursuant to
            art. Art. 6, Para. 1 lit. b DSGVO for contract fulfilment is
            necessary consent), you have a legal obligation provides for this or
            on the basis of our legitimate interests (e.g. when using agents,
            web hosts, etc.). Insofar as we Commission third parties with the
            processing of data on the basis of a so-called "order processing
            contract", this is done on the basis of article 28 DSGVO. Transfers
            to third countries If we process data in a third country (i.e.
            outside the European Union (EU) or the European economic area (EEA))
            or if this occurs in the context of the use of third-party services
            or disclosure or Transmission of data to third parties, this only
            takes place if it occurs for the fulfilment of our (pre)contractual
            obligations, on the basis of your consent, on the basis of a legal
            obligation or on the basis of our legitimate interests. Subject to
            legal or contractual permissions, we process or leave the data in a
            third country only in the Presence of the special requirements of
            article 44 et seq. DSGVO to process the information. That is, the
            processing is e.g. on the basis of special guarantees, such as the
            officially recognised determination of the EU level of data
            protection (e.g. for the USA through the "Privacy Shield") or
            compliance with officially recognized special contractual
            obligations (so-called "standard contractual clauses"). Rights of
            persons concerned You have the right to request confirmation as to
            whether data to be processed and to request information about these
            data as well as further information and a copy of the data in
            accordance with article 15 DSGVO. You have accordingly. Article 16
            DSGVO the right to demand the completion of data concerning you or
            the rectification of the inaccurate data. You have to request in
            accordance with the provisions of article 17 DSGVO the right to that
            relevant data be deleted immediately or, alternatively, in
            accordance with the provisions of article 18 DSGVO to a restriction
            of the processing of the data. You have the right to request that
            the data which you have provided to us to obtain, in accordance with
            article 20 DSGVO and to demand their Transmission to other
            Responsible persons. You also have the gem. Article 77 DSGVO the
            right to file a complaint with the competent Supervisory authority
            to submit. Right of withdrawal You have the right to consent
            according to. Article 7, Para. To call 3 DSGVO with effect for the
            future Right of objection You can object to the future processing of
            their data, in accordance with article 21 DSGVO at any time. The
            objection may in particular be made against processing for direct
            marketing purposes.
          </p>
          <p className="imprint_text_container">
            Cookies and right of objection in direct advertising "Cookies" means
            small files which are stored on computers of the users. Within the
            Cookies, different information can be stored. A Cookie is primarily
            used, and the details of a user (or the device is stored on the
            Cookie) during or at the store after his visit within an online
            offer. As a temporary Cookies, or "Session Cookies" or "transient
            Cookies", are Cookies which are deleted after a user leaves an
            online offer and the Browser closes. In such a Cookie may be stored,
            for example, the contents of a shopping cart in an online shop or a
            Login Status. As "permanent" or "persistent" Cookies are referred
            to, which remain after the browser is closed. So, for example, the
            Login can be saved if users visit it after several days. Can also be
            stored in such a Cookie the interests of users used for range
            measurement or marketing purposes. As a "Third-Party cookies" are
            Cookies which are offered by other providers other than the person
            who manages the online offer (otherwise, if they are only its
            Cookies, one speaks of "First-Party Cookies"). We can use temporary
            and permanent Cookies and clarify this in the context of our privacy
            policy. If the user does not want Cookies to be stored on your
            computer, you will be asked to deactivate the corresponding Option
            in the system settings of your browser. Stored Cookies can be
            deleted in the system settings of the browser. The exclusion of
            Cookies can lead to functional restrictions of this online offer. A
            General objection against the use of the for the purposes of online
            marketing, Cookies may be in a variety of services, especially in
            the case of tracking, via the US site
            http://www.aboutads.info/choices/ or the EU website
            http://www.youronlinechoices.com/ be explained. Furthermore, the
            storage of Cookies can be achieved by means of a shutdown in the
            settings of your browser. Please note that, not all functions of
            this online offer can be used.
          </p>
          <p className="imprint_text_container">
            Deletion of data The processed data will be deleted, in accordance
            with articles 17 and 18 DSGVO or their processing restricted. Unless
            in the context of this data protection Declaration explicitly
            stated, are no more deleted data stored with us, as soon as you are
            for the purposes required, and the deletion of no legal storage
            obligations to the contrary. If the data are not deleted because
            they are required for other and legally permissible purposes,
            restrict their processing. That is, the data will be blocked and not
            for other purposes. This applies, for example for data that must be
            retained for commercial or tax law reasons. According to legal
            requirements in Germany, the storage, in particular for 10 years
            according to §§ 147 Abs. 1 AO, 257 Abs. 1 No. 1 and 4, Abs. 4 HGB
            (books, records, management reports, accounting documents, trading
            books, for taxation of relevant documents, etc.), and 6 years
            according to § 257 Abs. 1 no. 2 and 3, Para. 4 HGB (commercial
            letters). According to legal regulations in Austria the storage
            takes place especially for 7 J according to § 132 Abs. 1 BAO
            (accounting documents, receipts/invoices, accounts, receipts,
            business papers, statement of receipts and expenditures, etc.), for
            22 years in connection with land and for 10 years for documents in
            connection with electronically provided services,
            telecommunications, broadcasting and television services provided to
            non - entrepreneurs in EU member States and for which the
            Mini-One-Stop-Shop (MOSS) in the claim is taken.
          </p>
          <p className="imprint_text_container">
            Agency services We process the data of our customers to include in
            the frame of our contractual services which conceptual and strategic
            consulting, campaign planning, Software and design
            development/consulting or maintenance, implementation of campaigns
            and processes/ Handling, server administration, data analysis/
            consultation services and training services. In this case we process
            inventory data (e.g., customer master data, such as names or
            addresses), contact data (e.g., E-Mail, telephone numbers), content
            data (e.g. text input, photographs, Videos), contract data (e.g.,
            subject matter of the contract, duration), payment data (e.g. Bank
            details, payment history), usage and metadata (e.g., in the context
            of evaluation and success measuring of marketing measures). Special
            categories of personal data we process not generally, except if
            these components are of a commissioned processing. Concerned include
            our customers, prospects and their customers, users, website
            visitors or employees as well as third parties. The purpose of the
            processing is the provision of contract services, billing and our
            customer service. The legal bases of the processing result from art.
            6, Para. 1 lit. b DSGVO (contractual services), art. 6, Para. 1 lit.
            f DSGVO (analysis, statistics, optimisation, security measures). We
            process data for the justification and fulfilment of contractual
            services and indicate the necessity of their indication. A
            disclosure to External only if it is in the context of a job. In the
            processing of the us in the framework of a contract given data, we
            act in accordance with the instructions of the Client and the legal
            requirements of a contract-processing pursuant to art. Article 28
            DSGVO and process the data to any other, as the order intended
            purposes. We delete the data after expiry of statutory warranty and
            comparable obligations. the necessity of the storage of the data is
            checked every three years; in the case of statutory archiving
            obligations, the deletion takes place after its expiry (6 years,
            pursuant to art. § 257 Abs. 1 HGB, 10 J, in accordance. § 147 Abs. 1
            AO). In the case of data put in the context of the contract by the
            Contracting authority openly, we will delete the data in accordance
            with the requirements of the order, in principle after the end of
            the contract.
          </p>
          <p className="imprint_text_container">
            Administration, Financial Accounting, Office Organization, Contact
            Management We process data in the context of administrative tasks
            and organization of our company, financial accounting and compliance
            with legal obligations, such as archiving. Here, we process the same
            data that we process in the framework of the provision of our
            contractual services. The processing bases are art. 6, Para. 1 lit.
            C. DSGVO, art. 6, Para. 1 lit. f. DSGVO. From the processing of
            customers, prospective customers, business partners and website
            visitors are affected. The purpose and our interest in the
            processing lies in Administration, financial accounting, office
            organisation, archiving of data, i.e. tasks which serve the
            maintenance of our business activities, perception of our tasks and
            provision of our services. The deletion of the data regarding
            contractual services and contractual communication corresponds to
            the in these processing activities mentioned information. We
            disclose or transmit data to the financial administration,
            consultants, such as tax accountants or auditors, and other fee
            offices and payment service providers. We also store on the basis of
            our business interests of suppliers, organisers and other business
            partners, e.g. for later contact. This majority of company-related
            data that we store, in principle, permanently.
          </p>
          <p className="imprint_text_container">
            Business analysis and market research Our business economically, to
            be able to market trends, wishes of the Contracting parties and
            users, we analyze the data available to us on business transactions,
            contracts, inquiries, etc., We process stock data, communication
            data, contract data, payment data, usage data, metadata on the basis
            of article 6 Para. 1 lit. f. DSGVO, wherein the affected persons
            contractual partners, interested parties, customers, visitors and
            users of our online offer. The analyses are carried out for the
            purpose of economic evaluations, marketing and market research. In
            doing so, we can take into account the Profiles of the registered
            users with data, e.g. the services used,. The analyzes serve us to
            increase the user-friendliness, the optimization of our offer and
            the business Economics. The analyses serve us and are not disclosed
            externally unless it is anonymous analyses with summarized values.
            If these analyses or Profiles are personal, they will be deleted
            upon termination of the user or anonymized, otherwise after two
            years from conclusion of the contract. In addition, the total will
            be created economic analyses and General trend provisions anonymous.
          </p>
          <p className="imprint_text_container">
            Comments and contributions If users leave comments or other
            contributions, can be Abs, your IP addresses on the basis of our
            legitimate interests within the meaning of article 6. 1 lit. f.
            DSGVO be stored for 7 days. This is for our safety, if someone in
            comments and contributions illegal content leaves (insults,
            forbidden political Propaganda, etc.). In this case we can be
            prosecuted for the comment or contribution and are therefore
            interested in the identity of the author. Furthermore, we reserve
            the right, on the basis of our legitimate interests pursuant to art.
            Art. 6, Para. 1 lit. f. DSGVO to process the information of users
            for the purpose of spam detection. On the same legal basis, we
            reserve the right to store, in the case of surveys, the IP addresses
            of the users for the duration of and to the use of Cookies, to avoid
            multiple votes. In the framework of the comments and contributions
            of the specified data will be stored by us to the contradiction of
            the user permanently.
          </p>
          <p className="imprint_text_container">
            Call of Emojis and Smilies Within our WordPress Blogs graphical
            emoticons (or smileys), i.e., are small graphic files that Express
            feelings that are obtained from external servers. Here, the provider
            of the Server, the IP collect addresses of the users. This is
            necessary so that the Emojie files can be sent to the Browser of the
            user. The Emojie Service is the Automattic Inc., 60 29th Street
            #343, San Francisco, CA 94110, USA. Data protection notes from
            Automattic: https://automattic.com/privacy/ . The used
            Server-Domains are s.w.org and twemoji.maxcdn.com which is, to our
            knowledge, according to the so-called Content Delivery Networks,
            i.e. Server, the only serve as a fast and secure Transmission of
            files and the user's personal data will be deleted after
            Transmission. The use of Emojis is carried out on the basis of our
            legitimate interest, i.e. interest in an attractive design of our
            online offer ACC. Art. 6, Para. 1 lit. f. DSGVO.
          </p>
          <p className="imprint_text_container">
            Contact When contacting us (e.g. via contact form, E-Mail, telephone
            or via social media) the information of the user for processing the
            contact request and their processing ACC. Art. 6, Para. 1 lit. b.
            (in the context of contractual/pre-contractual relationships), art.
            6, Para. 1 lit. f. (other requests) are processed DSGVO.. and The
            details of the users can be stored in a Customer Relationship
            Management System ("CRM System") or comparable request organization.
            We delete the requests if they are necessary. We check the necessity
            every two years; Furthermore, the legal archiving obligations apply.
          </p>
          <p className="imprint_text_container">
            Newsletter With the following information, we will inform you about
            the contents of our newsletter as well as the registration, shipping
            and statistical evaluation procedures and your rights of appeal to.
            By subscribing to our Newsletter, you agree to the receipt and the
            described procedures. Content of the newsletter: We send
            newsletters, E-Mails and further electronic notifications with
            promotional information (hereinafter "Newsletter") only with the
            consent of the recipients or a legal permission. Provided that, in
            the context of a registration for the Newsletter, whose contents are
            concretely described, they are for the consent of the users
            significantly. Incidentally, our newsletters contain information
            about our services and us. The Double-Opt-In and logging:
            registration for our Newsletter takes place in a so-called
            Double-Opt-In procedure. This means you will receive after the
            registration, an E-Mail to confirm your registration asked. This
            confirmation is necessary so that nobody can register with strangers
            E-mail addresses. The registrations for the Newsletter are logged in
            order to be able to sign-in process according to the legal
            requirements to prove. For this purpose, the storage of the login
            and confirmation time and the IP address. Similarly, the Changes of
            the shipping service provider stored data is logged. Credentials: To
            sign up for the Newsletter, it is sufficient if you specify your
            E-mail address. Optionally, we ask for a name, for the purpose of
            personal address in the newsletter stated. The shipping of the
            newsletter and the connected success measurement take place based on
            a consent of the recipients ACC. Art. 6, Para. 1 lit. a, article 7
            DSGVO in conjunction with § 7 Abs. 2 no. 3 UWG or if consent is not
            required, on the basis of our legitimate interests in direct
            marketing pursuant to art. Art. 6, Para. 1 lt. f. DSGVO I. V. m. § 7
            Abs. 3 UWG. The logging of the registration process is carried out
            on the basis of our legitimate interests pursuant to art. Art. 6,
            Para. 1 lit. f DSGVO. Our interest focuses on the use of a
            user-friendly and secure newsletter system that serves both our
            business interests and the expectations of users and also the proof
            of consent is allowed. Termination/revocation – you may terminate
            the receipt of our newsletter at any time your consent is revoked. A
            Link to the cancellation of the newsletter is available at the end
            of each newsletter. We can use the term save E-mail addresses of up
            to three years on the basis of our legitimate interests before we
            delete them to be able to a previously given consent prove. The
            processing of these data is limited to the purpose of a possible
            defence against claims. An individual application for cancellation
            is possible at any time, provided that at the same time the former
            Existence of a consent is confirmed.
          </p>
          <p className="imprint_text_container">
            Newsletter – Mailchimp The dispatch of the Newsletter takes place
            via the dispatch service provider "MailChimp", a newsletter shipping
            platform of the US provider Rocket Science Group, LLC, 675 Ponce De
            Leon Ave NE #5000, Atlanta, GA 30308, USA. The data protection
            regulations of the shipping service provider can be viewed here:
            https://mailchimp.com/legal/privacy/ . The Rocket Science Group LLC
            d/b/a MailChimp is under the Privacy-Shield-agreement-certified and
            offers a guarantee to the European level of data protection to
            comply with (
            https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active
            ). The shipping provider is a gem on the basis of our legitimate
            interests. Art. 6, Para. 1 lit. f. DSGVO and a contract processing
            agreement ACC. Article 28 Para. 3 S. 1 DSGVO used. The shipping
            service provider may use the data of the recipients in pseudonymous
            Form, i.e. without assignment to a user, to optimize or improve its
            own Services, e.g. for technical optimization of the dispatch and
            the presentation of newsletters or for statistical purposes. The
            shipping service provider does not use the data of our newsletter
            recipients, however, to write to itself or to the data to third
            parties.
          </p>
          <p className="imprint_text_container">
            Newsletter – Success Measurement The newsletters contain a so-called
            "web-beacon", i.e. a pixel-sized file that is retrieved when Opening
            the newsletter from our Server, or if we use a delivery service from
            the Server. As part of this retrieval, technical information is
            collected, such as information about the Browser and your System, as
            well as your IP address and time of retrieval. This information is
            used for technical improvement of the Services on the basis of the
            technical data or the target groups and their reading behaviour on
            the basis of polling places (with the help of the IP address can be
            determined) or the access times. Belongs to the statistical surveys
            to determine whether the newsletters are opened, when they are
            opened and which Links will be clicked as well. This information can
            be assigned for technical reasons, the individual newsletter
            recipients. However, it is neither our endeavor nor, if used, to
            observe the transit service provider, individual users. The
            evaluations serve us much more to recognize the reading habits of
            our users and our content to you or to send different contents
            according to the interests of our users. A separate revocation of
            the performance measurement is unfortunately not possible, in this
            case the entire newsletter to cancel the subscription.
          </p>
          <p className="imprint_text_container">
            Hosting and E-Mail We used a Hosting service to serve the provision
            of the following services: infrastructure and platform services,
            computing capacity, storage space and database services, E-Mail
            delivery, security services and technical maintenance services that
            we use for the purpose of operating this online offer. Here we, or
            our hosting provider process inventory data, contact data, content
            data, contract data, usage data, Meta and communication data of
            customers, interested parties and visitors to this online offer on
            the basis of our legitimate interests in an efficient and secure
            provision of this online offer ACC. Art. 6, Para. 1 lit. f DSGVO I.
            V. m. article 28 DSGVO (conclusion of order processing contract).
          </p>
          <p className="imprint_text_container">
            Collection of access data and Logfiles We, or our hosting provider,
            collects on the basis of our legitimate interests within the meaning
            of article 6 Para. 1 lit. f. DSGVO data on every access to the
            Server on which this service is located (so called Server log
            files). The access data includes Name of the retrieved web page,
            file, date and time of the retrieval, transferred data volume,
            message of successful retrieval, browser type and Version, the
            operating system of the user, Referrer URL (the previously visited
            page), IP address and the requesting Provider. Logfile information
            is for safety reasons (e.g. for the investigation of abuse or acts),
            was for a maximum period of 7 days saved and then deleted. Data
            whose further retention is, for purposes of proof required, are
            excluded until the final clarification of the respective incident of
            the deletion. Online presences in social media We maintain online
            presences within social networks and platforms, with the active
            customers, interested parties and users and to them there about our
            services, inform and communicate. We point out that data of the
            users outside the area of the European Union can be processed. This
            may result to the users of the risks, because, for example, could be
            made more difficult the enforcement of the rights of the users. With
            regard to US providers certified under the Privacy Shield, we point
            out that they are committed to the data protection standards of the
            EU to comply with. Furthermore, the data of users in a rule, for
            market research and promotional purposes. So, for example, from the
            user behaviour and the resulting interests of the users, usage
            profiles are created. The usage profiles can in turn be used to show
            both within and outside of the advertising platforms to switch to
            corresponding presumably to the interests of the user. For these
            purposes, stored in a rule, Cookies on the computers of the users,
            in which the user behavior and the interests of the users are
            stored. Further, in the use of data profiles are saved regardless of
            the users used devices (in particular if the users are members of
            the respective platforms and these are logged in). The processing of
            the personal data of the users is based on our legitimate interests
            in an effective Information of users and communication with users in
            accordance. Art. 6, Para. 1 lit. f. DSGVO. If the users are asked by
            the respective providers consent for the processing of the data
            (i.e. your consent, for example via the Tick of a checkbox or
            confirming a button), the legal basis for the processing art. 6,
            Para. 1 lit. a. a, article 7 DSGVO. For a detailed description of
            the respective processing operations and the options to object
            (Opt-Out), we refer to the following linked information of the
            providers. Also, in the case of requests for information and the
            assertion of user rights, we point out that these can be effectively
            made in the vendors claim. Only the providers have access to the
            data of the users and can directly take appropriate measures and
            information. If you still need help, then you can contact us. –
            Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
            Harbour, Dublin 2, Irland) – Datenschutzerklärung:
            https://www.facebook.com/about/privacy/ , Opt-Out:
            https://www.facebook.com/settings?tab=ads und
            http://www.youronlinechoices.com , Privacy Shield:
            https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
            . – Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA) – Datenschutzerklärung:
            https://policies.google.com/privacy , Opt-Out:
            https://adssettings.google.com/authenticated , Privacy Shield:
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
            . – Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA,
            94025, USA) – Datenschutzerklärung/ Opt-Out:
            http://instagram.com/about/legal/privacy/ . – Pinterest (Pinterest
            Inc., 635 High Street, Palo Alto, CA, 94301, USA) – privacy
            statement/ Opt-Out: https://about.pinterest.com/de/privacy-policy .
            – LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin
            2, Ireland) – privacy policy
            https://www.linkedin.com/legal/privacy-policy , Opt-Out:
            https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
            , Privacy Shield:
            https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active
            . – Xing (XING AG, dammtorstraße 29-32, 20354 Hamburg, Germany) –
            privacy policy/ Opt-Out:
            https://privacy.xing.com/de/datenschutzerklaerung . Integration of
            services and contents of third parties We put within our online
            offer on the basis of our legitimate interests (i.e. interest in the
            analysis, optimization and economic operation of our online offer
            within the meaning of article 6 Para. 1 lit. f. DSGVO) content or
            service offers from third parties to their content and Services,
            such as Videos or fonts to integrate types (hereinafter referred to
            as “content”). This always presupposes that the third-party
            providers of this content perceive the IP address of the users,
            since they could not send the IP address of the content to their
            Browser. The IP address for the representation of this content. We
            strive to use only such content whose respective providers use the
            IP address only for distributing the content. Third-party providers
            may also use so-called Pixel Tags (invisible graphics, also known as
            "Web Beacons") for statistical or marketing purposes. The "Pixel
            Tags" information, such as visitor traffic on the pages of this
            Website evaluated. The pseudonymous information may also be Cookies
            on the device of the user is stored and, among other things,
            technical information about the Browser and operating system,
            referring websites, visiting time as well as further information on
            use of our online offer, as well as with such information from other
            sources to be connected. Typekit fonts from Adobe We set on the
            basis of our legitimate interests (i.e. interest in the analysis,
            optimization and economic operation of our online offer within the
            meaning of article 6 Para. 1 lit. f. DSGVO) external "Typekit"fonts
            of the provider Adobe Systems Software Ireland Limited, 4-6
            Riverwalk, Citywest Business Campus, Dublin 24, Republic of Ireland.
            Adobe is certified under the Privacy Shield agreement and thus
            provides a guarantee to comply with European data protection law
            (https://www.privacyshield.gov/participant?id=a2zt0000000TNo9AAG&status=Active).
            Instagram Within our online offer functions and contents of the
            service Instagram may be offered by the Instagram Inc., 1601 Willow
            Road, Menlo Park, CA, 94025, USA, are integrated. To do this, e.g.
            content such as images, Videos, or texts and buttons with which
            users of any content from this online offering within Instagram can
            share. If the users are members of the platform Instagram, Instagram
            can assign the call of the above contents and functions to the
            profiles of the users. Privacy policy of Instagram:
            http://instagram.com/about/legal/privacy/ . Pinterest Within our
            online offer functions and contents of the service can Pinterest,
            provided by Pinterest Inc., 635 High Street, Palo Alto, CA, 94301,
            USA, are integrated. To do this, e.g. content such as images,
            Videos, or texts and buttons with which users of any content from
            this online offer within Pinterest share. If the users are members
            of the platform Pinterest, Pinterest can assign the call of the
            above contents and functions to the profiles of the users. Privacy
            policy of Pinterest: https://about.pinterest.com/de/privacy-policy .
          </p>
        </section>
        <section ref={shipping} className="imprint_section_container">
          <p className="imprint_text_container">
            SHIPPING AND DELIVERY We ship only in Germany. The delivery is
            carried out only in Leipzig. Should you still order from abroad
            want, please contact us directly by e-Mail info@bohemiankidscafe.de
            and tell us which products do you like to have and in which country
            you get it delivered to. We will get back to you in a timely manner.
          </p>
          <p className="imprint_text_container">
            Delivery in Leipzig We exclusively supply the Leipzig city area. The
            goods will be delivered within 5 days. A delivery on a specific day
            is possible by arrangement. All orders ship with a flat rate of 3,9
            € for the delivery service. Cake deliveries with 4,9€ per delivery
            will be calculated.
          </p>
          <p className="imprint_text_container">
            Shipping costs and suppliers The shipping costs per order 6,90 €
            gross and include the packaging and shipping within Germany. The
            goods will, by default, shipped via the provider "DHL". For special
            sizes or supply shortages, we are soft on adequate Alternative
            delivery company.
          </p>
          <p className="imprint_text_container">
            Packaging All packages are carefully and shipping Packed by us.
            Delivery times Orders will be packaged within 2 days and shipped.
            This refers to Monday to Friday. The delivery time by Deutsche Post
            and DHL within Germany is 1-3 working days. To Christmas, holidays
            or other social events (carnival, ...) it will take slightly longer.
            Should there be a delay in delivery, we will inform (to the extent
            possible) you immediately by E-Mail.
          </p>
          <p className="imprint_text_container">
            Pick-up at our BK Cafe in Leipzig, Germany You should have the
            Option to "pick-up", decided to return your order after the payment
            in the Shop. You can pick up your Goods during business Hours in the
            University road 18, 04109 Leipzig, Germany.
          </p>
          <p className="imprint_text_container">
            Damaged packaging and goods Should be damaged during the delivery,
            the packaging is visible, then give it to the package offered prior
            to the adoption again. If that's not possible, documenting the still
            closed and damaged package photographically and put you in touch
            with us. We check the goods before shipment, exactly, should be once
            a product is in perfect condition, and sit down immediately in touch
            with us. After that, the package frankiere please be sufficient and
            we will refund you the value you put in Porto, or charge it with
            your new order.
          </p>
          <p className="imprint_text_container">
            Return If you don't like a product, it is a pity, but not to change.
            You have 14 days the item purchased to be returned and the purchase
            of the contract to call. The returned goods should be unused and in
            perfect condition so we can resell. The postage for the return you
            have to wear. "Freight collect" skillful shipments will not be
            accepted by us. Please allow 7-10 days processing time of your
            return.
          </p>
        </section>
        <section ref={cancellation} className="imprint_section_container">
          <p className="imprint_text_container">
            CANCELLATION POLICY Right of withdrawal You have the right to cancel
            within fourteen days without giving a reason this contract. The
            revocation period is fourteen days from the day on which you or a
            third party named by you, who is not the carrier, the Goods have
            taken possession or has. In order to exercise your right of
            cancellation, you must inform us (Michael Schroeter, Bohemian Kids
            Cafe, University road 18, 04109 Leipzig, Germany ) by means of a
            clear statement (e.g. a letter sent by Post or E-Mail) of your
            decision to withdraw from this contract,. You can use the attached
            sample revocation form, which however is not mandatory. To meet the
            cancellation deadline, it is sufficient that you send the
            notification about the exercise of the revocation right before the
            expiry of the revocation period.
          </p>
          <p className="imprint_text_container">
            Consequences of the revocation If you revoke this contract, we have
            you all payments that we have received from you, including the costs
            (with the exception of additional costs, which arise from the fact
            that you have chosen another kind of delivery than the offered by
            us, cheapest standard delivery), immediately and at the latest
            within fourteen days from the day on which to repay, on which the
            notification of your revocation of this contract was received by us
            for delivery. For this repayment, we will use the same means of
            payment as you used for the initial transaction, unless you have
            expressly agreed otherwise; in no case will you be charged fees for
            this repayment. We can refuse the repayment until we have received
            the Goods back again or until you have provided proof that you have
            sent back the Goods, whichever is the earlier point in time. You
            shall return the Goods immediately and in any case at the latest
            within fourteen days from the day on which you notify us of the
            cancellation of this contract to us or to pass. The deadline is met
            if you send back the Goods before the expiry of the period of
            fourteen days. You will bear the direct cost of returning the Goods.
            You have to pay for a possible loss in value of the Goods if this
            loss in value is attributable to establish the nature,
            characteristics and functioning of the Goods which is not necessary
            in dealing with them.{' '}
          </p>
          <p className="imprint_text_container">
            Sample Revocation Form (If you intend to revoke the contract, then
            please fill out this form and send it back to us.) – To Michael
            Schroeter Bohemian Kids Cafe University street 18 04109 Leipzig –
            Hereby give notice(s) I/we (*) from my/us (*) concluded contract for
            the purchase of the following Goods (*)/ the provision of the
            following service (*) – Ordered on (*)/received on (*) – Name of the
            consumer(s) – Address of the consumer(s) – Signature of the
            consumer(s) (only for notification on paper) Date ___________ (*)
            Delete as appropriate.
          </p>
        </section>
        <section ref={tAndC} className="imprint_section_container"></section>
        <div className="imprint_button_container">
          <Link
            to=""
            onClick={() => scrollToSection(impressum)}
            aria-label="Link to Impressum Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">IMPRESSUM</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(privacy)}
            aria-label="Link to Privacy Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">PRIVACY</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(shipping)}
            aria-label="Link to Shipping Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">SHIPPING</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(cancellation)}
            aria-label="Link to Cancellation Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">CANCELLATION</button>
          </Link>
          <Link
            to=""
            onClick={() => scrollToSection(tAndC)}
            aria-label="Link to T & C Section"
            className="button_link"
          >
            <button className="imprint_medium_nav_button">T & C</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Imprint;
