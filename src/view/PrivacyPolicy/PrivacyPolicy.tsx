/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './PrivacyPolicy.module.scss';
import { Header } from '@content/index';
import { BaseContainer, BaseTitle } from '@base/index';
import Image from 'next/image';
import Editor from "@content/Editor/Editor";
import {AboutUsPlugin} from "@content/Editor/plugins/AboutUs";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const PrivacyPolicy = () => {

  const id = "documentaboutus";
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});


  return (
    <>
      <div className={styles.HeaderOverlay}>
        <BaseContainer>
          <div className={styles.Header}>
            <Header>
              <BaseTitle>Privacy Policy</BaseTitle>
            </Header>
            <div className={styles.Header_Image}>
              <div className={styles.Img}>
                <Image
                  src="/images/image/gear_bg.png"
                  layout="fill"
                  alt={'Image'}
                  priority
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>

      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Content}>
            {/*<DocumentAboutUs />*/}
            <div>
              <Editor
                onSave={
                  (value)=>{
                    saveEditor({
                      cmsObjectEntity: {
                        key: id,
                        value
                      }
                    })
                  }
                }
                initialValue={data?.value}
                pluginsList={[AboutUsPlugin]}/>
            </div>

            <div className={styles.Content_Terms}>
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Description}>
                  Last updated: 13/05/2022
                </div>

                <div className={styles.Terms_Item_Description}>
                  Introduction Manhattan VC Holding LLC respects your privacy
                  and is committed to protecting your personal data. This
                  privacy policy will inform you as to how we look after your
                  personal data when you visit our websites
                  (https://www.manisland.com/, https://dashboard.manisland.com/)
                  (regardless of where you visit it from) and tell you about
                  your privacy rights and how the law protects you. This privacy
                  policy is provided in a layered format so you can click
                  through to the specific areas set out below. Please also use
                  the Glossary to understand the meaning of some of the terms
                  used in this privacy policy
                </div>
              </div>

              <div className="Table_Wrapper">
                <div className="Table PrivacyPolicyTable">
                  {/* 1 столб */}
                  <div className="Table__head">
                    <span>Purpose/Activity</span>
                  </div>
                  <div className="Table__col">
                    <span>To register you as a new customer</span>
                  </div>
                  <div className="Table__col">
                    <span>
                      To process and deliver services to you including: <br />
                      (a) Manage payments, fees and charges <br /> (b) Collect
                      and recover money owed to us
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      To manage our relationship with you which will include:{' '}
                      <br /> (a) Notifying you about changes to our terms or
                      privacy policy <b></b>
                      (b) Asking you to leave are view or take a survey <br />
                      (c) Processing and evaluating your job application
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>To enable you to complete a survey</span>
                  </div>
                  <div className="Table__col">
                    <span>
                      To administer and protect our business and this website
                      (including troubleshooting, data analysis, testing, system
                      maintenance, fraud detection and prevention, support,
                      reporting, and hosting of data, and for compliance
                      purposes, including enforcing our Terms and Conditions or
                      other legal rights, or as may be required by applicable
                      laws and regulations or requested by any judicial process
                      or governmental agency)
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      To deliver relevant website content and advertisements to
                      you and measure or understand the effectiveness of the
                      advertising we serve to you
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      To use data analytics to improve our website,
                      products/services, marketing, customer relationships and
                      experiences
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      To make suggestions andrecommendations to you about goods
                      or services that may be ofinterest to you
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      To provide services to an underlying investor on behalf of
                      a Sponsor
                    </span>
                  </div>
                  {/* 2столб */}
                  <div className="Table__head">
                    <span>Type of data</span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br /> (b) Contact
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br />
                      (b) Contact <br />
                      (c) Financial <br />
                      (d) Transaction <br />
                      (e) Marketing and Communications
                      <br />
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br />
                      (b) Contact <br />
                      (c) Profile <br />
                      (d) Marketing and Communications <br />
                      (e) Career
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br />
                      (b) Contact <br />
                      (c) Profile <br />
                      (d) Usage <br />
                      (e) Marketing and Communications
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br />
                      (b) Contact <br />
                      (c) Technical <br />
                      (d) Profile <br />
                      (e) Usage <br />
                      (f) Career
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br />
                      (b) Contact <br />
                      (c) Profile <br />
                      (d) Usage <br />
                      (e) Marketing and Communications <br />
                      (f) Technical
                      <br /> (g) Career
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Technical <br />
                      (b) Usage
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br />
                      (b) Contact <br />
                      (c) Technical <br />
                      (d) Usage <br />
                      (e) Profile <br />
                      (f) Marketing and Communications
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Identity <br />
                      (b) Contact <br />
                      (c) Technical <br />
                      (d) Usage <br />
                      (e) Profile
                    </span>
                  </div>
                  {/* 3столб */}
                  <div className="Table__head">
                    <span>
                      Lawful basis for processing including basis of legitimate
                      interest
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>Performance of a contract with you</span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Performance of acontract with you
                      <br /> (b) Necessary for ourlegitimate interests (to
                      recover debts due to us)
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Performance of a contract with you <br />
                      (b) Necessary to comply with a legal obligation <br />
                      (c) Necessary for our legitimate interests (to keep our
                      records updated and to study how customers use our
                      products/services)
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Performance of a contract with you <br />
                      (b) Necessary for our legitimate interests (to study how
                      customers use our products/services, to develop them and
                      grow our business)
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Necessary for our legitimate interests (for running
                      our business, provision of administration and IT services,
                      network security, to prevent fraud and in the context of a
                      business reorganisation or group restructuring exercise)
                      <br />
                      (b) Necessary to comply with a legal obligation
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      Necessary for ourlegitimate interests (to study how
                      customers use ourproducts/services, to develop them, to
                      grow our business and toinform our marketing strategy)
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      Necessary for our legitimate interests (to define types of
                      customers for our products and services, to keep our
                      website updated and relevant, to develop our business and
                      to inform our marketing strategy)
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      Necessary for ourlegitimate interests (to develop our
                      products/services and grow ourbusiness)
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      (a) Necessary for our legitimate interests (for running
                      our business, provision of administration and IT services,
                      network security, to prevent fraud and in the context of a
                      business reorganisation or group restructuring exercise)
                      <br />
                      (b) Necessary to comply with a legal obligation
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.Terms_Item}>
                {/* загловок */}
                <div className={styles.Terms_Item_Title}>
                  Important information and who we are
                </div>

                {/* если условие */}
                <div className={styles.Terms_Item_Description_Condition}>
                  {/* список условий */}
                  <ul className={styles.Condition_List}>
                    {/* елемент условия */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок элемента условия */}
                      <div className={styles.Condition_List_Item_Title}>
                        Purpose of this privacy policy
                      </div>
                      {/* список условия */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          This privacy policy aims to give you information on
                          how Vauban Technologies Limited collects and processes
                          your personal data through your use of this and our
                          other websites, including any data you may provide
                          through this website. It is important that you read
                          this privacy policy together with any other privacy
                          policy or fair processing policy we may provide on
                          specific occasions when we are collecting or
                          processing personal data about you so that you are
                          fully aware of how and why we are using your data.
                          This privacy policy supplements other notices and
                          privacy policies and is not intended to override them.
                        </li>
                      </ul>
                    </li>
                    {/* елемент условия с заголовком и с подсписком */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок подсписка */}
                      <div className={styles.Condition_List_Item_Title}>
                        Controller
                      </div>
                      {/* подсписок */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Manhattan VC Holding LLC is the controller and
                          responsible for your personal data(collectively
                          referred to as "Company", "we", "us" or "our" in this
                          privacy policy), except where we are acting as data
                          process or for Sponsors (as defined below). We have
                          appointed a data privacy manager who is responsible
                          for overseeing questions in relation to this privacy
                          policy. If you have any questions about this privacy
                          policy, including any requests to exercise your legal
                          rights, please contact the data privacy manager using
                          the details set out below.
                        </li>
                      </ul>
                    </li>

                    <li className={styles.Condition_List_Item}>
                      <div className={styles.Condition_List_Item_Title}>
                        Contact details
                      </div>

                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          If you have any questions about this privacy policy or
                          our privacy practices, please contact our data privacy
                          manager in the following ways:
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Full name of legal entity: Manhattan VC Holding LLC{' '}
                          <br />
                          Email address: info@manisland.com <br />
                          Postal address: 1330 6th Avenue, New York, Manhattan,
                          10019, United States of America <br />
                        </li>
                      </ul>
                    </li>

                    <li className={styles.Condition_List_Item}>
                      <div className={styles.Condition_List_Item_Title}>
                        Changes to the privacy policy and your duty to inform us
                        of changes
                      </div>

                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          We keep our privacy policy under regular review. We
                          will post any adjustments to our privacy policy on
                          this page, and the revised version will be effective
                          when it is posted. If we materially change the ways in
                          which we use or share personal information previously
                          collected from you through our website, we will notify
                          you through the website, by email, or other
                          communication. Historic versions can be obtained by
                          contacting us. It is important that the personal data
                          we hold about you is accurate and current. Please keep
                          us informed if your personal data changes during your
                          relationship with us.
                        </li>
                      </ul>
                    </li>

                    <li className={styles.Condition_List_Item}>
                      <div className={styles.Condition_List_Item_Title}>
                        Third-party links{' '}
                      </div>

                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          This website may include links to third-party
                          websites, plug-ins and applications. Clicking on those
                          links or enabling those connections may allow third
                          parties to collect or share data about you. We do not
                          control these third-party websites and are not
                          responsible for their privacy statements. When you
                          leave our website, we encourage you to read the
                          privacy policy of every website you visit.
                        </li>
                      </ul>
                    </li>

                    <li className={styles.Condition_List_Item}>
                      <div className={styles.Condition_List_Item_Title}>
                        Confidentiality
                      </div>

                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          By registering with Vauban, or otherwise using the
                          Platform or the Services or viewing Content made
                          available through the Platform or the Services in any
                          way, you may be exposed to Sensitive Information. You
                          shall maintain Sensitive Information in confidence.
                          You may not distribute or republish, or permit or
                          cause any third party to distribute or republish, any
                          information you acquire through the Platform or the
                          Services via an Internet website or otherwise,
                          including Sensitive Information. You may not use
                          Sensitive Information for any reason other than your
                          evaluation of a particular investment opportunity
                          unless approved in advance in writing by Manhattan VC
                          Holding
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  The data we collect about you
                </div>

                <div className={styles.Terms_Item_Description}>
                  Personal data, or personal information, means any information
                  about an individual from which that person can be identified.
                  It does not include data where the identity has been removed
                  (anonymous data). <br /> We may collect, use, store and
                  transfer different kinds of personal data about you which we
                  have grouped together as follows:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Identity Data includes first name, maiden name, last name,
                    username or similar identifier, marital status, title, date
                    of birth and gender.
                  </li>
                  <li className={styles.List_Item}>
                    Contact Data includes billing address, delivery address,
                    email address and telephone numbers.
                  </li>
                  <li className={styles.List_Item}>
                    Financial Data includes bank account and payment card
                    details.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Transaction Data includes details about payments to and from
                    you and other details of products and services you have
                    purchased from us. Technical Data includes internet protocol
                    (IP) address, your login data, browser type and version,
                    time zone setting and location (inferred from your IP
                    address), browser plug-in types and versions, operating
                    system and platform, and other technology on the devices you
                    use to access this website.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Profile Data includes your username and password, purchases
                    or orders made by you, your interests, preferences, feedback
                    and survey responses.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Usage Data includes information about how you use our
                    website, products and services.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Marketing and Communications Data includes your preferences
                    in receiving marketing from us and our third parties and
                    your communication preferences.
                  </li>
                  <li className={styles.List_Item}>
                    Career Data includes contact and resume information if you
                    decide that you wish to apply for a job with us. We will
                    collect the information you choose to provide, such as your
                    education and employment experience. You may also apply
                    through LinkedIn or Facebook. If you do so, we will collect
                    the information you make available to us on LinkedIn or
                    Facebook.
                  </li>
                </ul>

                <div className={styles.Terms_Item_Description}>
                  We also collect, use and share Aggregated Data such as
                  statistical or demographic data for any purpose. Aggregated
                  Data could be derived from your personal data but is not
                  considered personal data in law as this data will not directly
                  or indirectly reveal your identity. For example, we may
                  aggregate your Usage Data to calculate the percentage of users
                  accessing a specific website feature. However, if we combine
                  or connect Aggregated Data with your personal data so that it
                  can directly or indirectly identify you, we treat the combined
                  data as personal data which will be used in accordance with
                  this privacy policy.
                </div>

                <div className={styles.Terms_Item_Description}>
                  We do not collect any Special Categories of Personal Data
                  about you (this includes details about your race or ethnicity,
                  religious or philosophical beliefs, sex life, sexual
                  orientation, political opinions, trade union membership,
                  information about your health, and genetic and bio-metric
                  data). Nor do we collect any information about criminal
                  convictions and offences.
                </div>
              </div>
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Confidentiality:</div>

                <div className={styles.Terms_Item_Description}>
                  Except in exceptional circumstances, every attempt will be
                  made to ensure that both the complainant and Manhattan VC
                  Holding maintain confidentiality. However the circumstances
                  giving rise to the complaint may be such that it may not be
                  possible to maintain confidentiality (with each complaint
                  judged on its own facts). Should this be the case, the
                  situation will be explained to the complainant.
                </div>
              </div>
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  If you fail to provide personal data
                </div>

                <div className={styles.Terms_Item_Description}>
                  Where we need to collect personal data by law, or under the
                  terms of a contract we have with you, and you fail to provide
                  that data when requested, we may not be able to perform the
                  contract we have or are trying to enter into with you (for
                  example, to provide you with goods or services). In this case,
                  we may have to cancel a product or service you have with us
                  but we will notify you if this is the case at the time.
                </div>
              </div>
              <div className={styles.Terms_Item}>
                {/* загловок */}
                <div className={styles.Terms_Item_Title}>
                  How is your personal data collected?
                </div>

                {/* если условие */}
                <div className={styles.Terms_Item_Description_Condition}>
                  {/* список условий */}
                  <ul className={styles.Condition_List}>
                    {/* елемент условия */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок элемента условия */}
                      <div className={styles.Condition_List_Item_Title}>
                        We use different methods to collect data from and about
                        you including:
                      </div>
                      {/* список условия */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Direct interactions. You may give us your Identity,
                          Contact and Financial Data by filling in forms or by
                          corresponding with us by post, phone, email or
                          otherwise. This includes personal data you provide
                          when you:
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          apply for our products or services{' '}
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          create an account on our website
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          subscribe to our service or publications
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          request marketing to be sent to you
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          recording of calls or interactions with users for the
                          purposes of regulatory compliance or training
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          enter a survey{' '}
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          give us feedback or contact us
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Automated technologies or interactions. As you
                          interact with our website, we will automatically
                          collect Technical Data about your equipment, browsing
                          actions and patterns. We collect this personal data by
                          using cookies, server logs and other similar
                          technologies. We may also receive Technical Data about
                          you if you visit other websites employing our cookies.
                          Please see our Cookie Policy for further details
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Third parties or publicly available sources. We will
                          receive personal data about you from various third
                          parties and public sources as set out below:
                        </li>
                      </ul>
                    </li>
                    {/* елемент условия с заголовком и с подсписком */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок подсписка */}
                      <div className={styles.Condition_List_Item_Title}>
                        Technical Data from the following parties:
                      </div>
                      {/* подсписок */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Analytics providers such as Google based outside the
                          United States - You can learn more about Google’s
                          practices by visiting
                          https://www.google.com/policies/privacy/partners/;
                          Advertising networks based inside or outside the
                          United States - Some of our advertising partners are
                          members of the Network Advertising Initiative
                          (https://optout.networkadvertising.org) or the Digital
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Advertising Alliance (https://optout.aboutads.info).
                          If you do not wish to receive personalized ads, please
                          visit their opt-out pages to learn about how you may
                          opt out of receiving web-based personalized ads from
                          member companies. You can access any settings offered
                          by your mobile operating system to limit ad tracking,
                          or you can install the AppChoices mobile app to learn
                          more about how you may opt out of personalized ads in
                          mobile apps.; and
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Search information providers based inside or outside
                          the United States.
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Contact, Financial and Transaction Data from providers
                          of technical, payment and delivery services based
                          inside or outside the United States.
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Identity and Contact Data from data brokers or
                          aggregators based inside or outside the United States.{' '}
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Identity and Contact Data from publicly available
                          sources.
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Provided by Sponsors.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  How we use your personal data
                </div>

                <div className={styles.Terms_Item_Description}>
                  We will only use your personal data when the law allows us to.
                  Most commonly, we will use your personal data in the following
                  circumstances:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Where we need to perform the contract we are about to enter
                    into or have entered into with you.
                  </li>
                  <li className={styles.List_Item}>
                    Where it is necessary for our legitimate interests (or those
                    of a third party) and your interests and fundamental rights
                    do not override those interests.
                  </li>
                  <li className={styles.List_Item}>
                    Where we need to comply with a legal obligation.
                  </li>
                </ul>

                <div className={styles.Terms_Item_Description}>
                  See below to find out more about the types of lawful basis
                  that we will rely on to process your personal data. Generally,
                  we do not rely on consent as a legal basis for processing your
                  personal data although we will get your consent before sending
                  third-party direct marketing communications to you via email
                  or text message. You have the right to withdraw consent to
                  marketing at any time by contacting us
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Purposes for which we will use your personal data
                </div>

                <div className={styles.Terms_Item_Description}>
                  We have set out below, in a table format, a description of all
                  the ways we plan to use your personal data, and which of the
                  legal bases we rely on to do so. We have also identified what
                  our legitimate interests are where appropriate. Note that we
                  may process your personal data for more than one lawful ground
                  depending on the specific purpose for which we are using your
                  data. Please contact us if you need details about the specific
                  legal ground we are relying onto process your personal data
                  where more than one ground has been set out in the table
                  below.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Marketing</div>

                <div className={styles.Terms_Item_Description}>
                  We strive to provide you with choices regarding certain
                  personal data uses, particularly around marketing and
                  advertising.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Promotional offers from us
                </div>

                <div className={styles.Terms_Item_Description}>
                  We may use your Identity, Contact, Technical, Usage and
                  Profile Data to form a view on what we think you may want or
                  need, or what may be of interest to you. This is how we decide
                  which products, services and offers may be relevant for you
                  (i.e. marketing). You will receive marketing communications
                  from us if you have requested information from us or purchased
                  services from us and you have not opted out of receiving that
                  marketing.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Third-party marketing
                </div>

                <div className={styles.Terms_Item_Description}>
                  We will get your express opt-in consent before we share your
                  personal data with any third party for marketing purposes.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Opting out</div>

                <div className={styles.Terms_Item_Description}>
                  You can ask us or third parties to stop sending you marketing
                  messages at any time by following the opt-out links on any
                  marketing message sent to you or by contacting us at any time
                </div>

                <div className={styles.Terms_Item_Description}>
                  Where you opt-out of receiving these marketing messages, this
                  will not apply to personal data provided to us as a result of
                  a product/service purchase.
                </div>

                <div className={styles.Terms_Item_Description}>
                  There is no accepted standard on how to respond to Do Not
                  Track signals, and we do not respond to such signals.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Cookies</div>

                <div className={styles.Terms_Item_Description}>
                  You can set your browser to refuse all or some browser
                  cookies, or to alert you when websites set or access cookies.
                  If you disable or refuse cookies, please note that some parts
                  of this website may become inaccessible or not function
                  properly. For more information about the cookies we use,
                  please see our Cookie Policy.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Change of purpose</div>

                <div className={styles.Terms_Item_Description}>
                  We will only use your personal data for the purposes for which
                  we collected it, unless we reasonably consider that we need to
                  use it for another reason and that reason is compatible with
                  the original purpose. If you wish to get an explanation as to
                  how the processing for the new purpose is compatible with the
                  original purpose, please contact us.{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  If we need to use your personal data for an unrelated purpose,
                  we will notify you and we will explain the legal basis which
                  allows us to do so.
                </div>

                <div className={styles.Terms_Item_Description}>
                  Please note that we may process your personal data without
                  your knowledge or consent, in compliance with the above rules,
                  where this is required or permitted by law.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Disclosures of your personal data
                </div>

                <div className={styles.Terms_Item_Description}>
                  We may share your personal data with the parties set out below
                  for the purposes set out in the table above.
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    External Third Parties as set out in the Glossary.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Specific third parties listed in the table above; with your
                    approval on a case by case basis this may include Sponsors –
                    a “Sponsor” is a fund manager, alternative investment
                    manager, deal manager or co-manager that engages the Company
                    to provide a technological platform for the Sponsor’s
                    investors to onboard and access information about the
                    Sponsor’s performance.
                  </li>
                  <li className={styles.List_Item}>
                    Third parties to whom we may choose to sell, transfer or
                    merge parts of our business or our assets. Alternatively, we
                    may seek to acquire other businesses or merge with them. If
                    a change happens to our business, then the new owners may
                    use your personal data in the same way as set out in this
                    privacy policy.
                  </li>
                </ul>

                <div className={styles.Terms_Item_Description}>
                  We require all third parties to respect the security of your
                  personal data and to treat it in accordance with the law. We
                  do not allow our third-party service providers to use your
                  personal data for their own purposes and only permit them to
                  process your personal data for specified purposes and in
                  accordance with our instructions.
                </div>
                <div className={styles.Terms_Item_Description}>
                  We may access, preserve, and disclose your information if we
                  believe doing so is required or appropriate to: (a) comply
                  with law enforcement requests and legal process, such as a
                  court order or subpoena; (b) respond to your requests; or (c)
                  protect your, our, or others’ rights, property, or safety. For
                  the avoidance of doubt, the disclosure of your information may
                  occur if you post any objectionable content on or through the
                  website.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  International transfers
                </div>

                <div className={styles.Terms_Item_Description}>
                  Many of our external third parties are based outside the EEA
                  so their processing of your personal data will involve a
                  transfer of data outside the EEA.
                </div>
                <div className={styles.Terms_Item_Description}>
                  Whenever we transfer your personal data out of the EEA, we
                  ensure a similar degree of protection is afforded to it by
                  ensuring at least one of the following safeguards is
                  implemented:
                </div>
                <div className={styles.Terms_Item_Description}>
                  We will only transfer your personal data to countries that
                  have been deemed to provide an adequate level of protection
                  for personal data by the European Commission. For further
                  details, see European Commission: Adequacy of the protection
                  of personal data in non-EU countries.{' '}
                </div>
                <div className={styles.Terms_Item_Description}>
                  Where we use certain service providers, we may use specific
                  contracts approved by the European Commission which give
                  personal data the same protection it has in Europe. For
                  further details, see European Commission: Model contracts for
                  the transfer of personal data to third countries.
                </div>
                <div className={styles.Terms_Item_Description}>
                  Please contact us if you want further information on the
                  specific mechanism used by us when transferring your personal
                  data out of the EEA.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Data security</div>

                <div className={styles.Terms_Item_Description}>
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorised way, altered or disclosed. In
                  addition, we limit access to your personal data to those
                  employees, agents, contractors and other third parties who
                  have a business need to know. They are required to process
                  your personal data only on our instructions and are subject to
                  a duty of confidentiality.
                </div>
                <div className={styles.Terms_Item_Description}>
                  We have put in place procedures to deal with any suspected
                  personal data breach and will notify you and any applicable
                  regulator of a breach where we are legally required to do so.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Data retention</div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  How long will you use my personal data for?
                </div>

                <div className={styles.Terms_Item_Description}>
                  We will only retain your personal data for as long as
                  reasonably necessary to fulfil the purposes we collected it
                  for, including for the purposes of satisfying any legal,
                  regulatory, tax, accounting or reporting requirements. We may
                  retain your personal data for a longer period in the event of
                  a complaint or if we reasonably believe there is a prospect of
                  litigation in respect to our relationship with you.{' '}
                </div>
                <div className={styles.Terms_Item_Description}>
                  To determine the appropriate retention period for personal
                  data, we consider the amount, nature and sensitivity of the
                  personal data, the potential risk of harm from unauthorised
                  use or disclosure of your personal data, the purposes for
                  which we process your personal data and whether we can achieve
                  those purposes through other means, and the applicable legal,
                  regulatory, tax, accounting or other requirements.
                </div>
                <div className={styles.Terms_Item_Description}>
                  Details of retention periods for different aspects of your
                  personal data are available in our retention policy which you
                  can request from us by contacting us. In some circumstances
                  you can ask us to delete your data.
                </div>
                <div className={styles.Terms_Item_Description}>
                  In some circumstances we will anonymise your personal data (so
                  that it can no longer be associated with you) for research or
                  statistical purposes, in which case we may use this
                  information indefinitely without further notice to you.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Children’s Privacy
                </div>

                <div className={styles.Terms_Item_Description}>
                  We do not knowingly collect, maintain, or use personal
                  information from children under 13 years of age, and no part
                  of our website is directed to children. If you learn that a
                  child has provided us with personal information in violation
                  of this Privacy Policy, then you may alert us at
                  info@manisland.com.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Your legal rights</div>

                <div className={styles.Terms_Item_Description}>
                  Under certain circumstances, you have rights under data
                  protection laws in relation to your personal data. See below
                  for more information about our legal rights.
                </div>
                <div className={styles.Terms_Item_Description}>
                  If you wish to exercise any of the rights set out in this
                  document, please contact us.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  No fee usually required
                </div>

                <div className={styles.Terms_Item_Description}>
                  You will not have to pay a fee to access your personal data
                  (or to exercise any of the other rights). However, we may
                  charge a reasonable fee if your request is clearly unfounded,
                  repetitive or excessive. Alternatively, we could refuse to
                  comply with your request in these circumstances.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  What we may need from you
                </div>

                <div className={styles.Terms_Item_Description}>
                  We may need to request specific information from you to help
                  us confirm your identity and ensure your right to access your
                  personal data (or to exercise any of your other rights). This
                  is a security measure to ensure that personal data is not
                  disclosed to any person who has no right to receive it. We may
                  also contact you to ask you for further information in
                  relation to your request to speed up our response. Time limit
                  to respond
                </div>
                <div className={styles.Terms_Item_Description}>
                  We try to respond to all legitimate requests within one month.
                  Occasionally it could take us longer than a month if your
                  request is particularly complex or you have made a number of
                  requests. In this case, we will notify you and keep you
                  updated.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Glossary</div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Lawful basis</div>

                <div className={styles.Terms_Item_Description}>
                  Legitimate Interest means the interest of our business in
                  conducting and managing our business to enable us to give you
                  the best service/product and the best and most secure
                  experience. We make sure we consider and balance any potential
                  impact on you (both positive and negative) and your rights
                  before we process your personal data for our legitimate
                  interests. We do not use your personal data for activities
                  where our interests are overridden by the impact on you
                  (unless we have your consent or are otherwise required or
                  permitted to by law). You can obtain further information about
                  how we assess our legitimate interests against any potential
                  impact on you in respect of specific activities by contacting
                  us.
                </div>
                <div className={styles.Terms_Item_Description}>
                  Performance of Contract means processing your data where it is
                  necessary for the performance of a contract to which you are a
                  party or to take steps at your request before entering into
                  such a contract.
                </div>
                <div className={styles.Terms_Item_Description}>
                  Comply with a legal obligation means processing your personal
                  data where it is necessary for compliance with a legal
                  obligation that we are subject to.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Third parties</div>

                <div className={styles.Terms_Item_Description}>
                  External Third Parties{' '}
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Service providers acting as processors based in the US who
                    provide IT and system administration services.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Professional advisers acting as processors or joint
                    controllers including lawyers, bankers, auditors and
                    insurers based in the US or Europe, who provide consultancy,
                    banking, legal, insurance and accounting services.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Government authorities acting as processors or joint
                    controllers based in the United States who require reporting
                    of processing activities in certain circumstances.
                  </li>
                </ul>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Your legal rights</div>
                <div className={styles.Terms_Item_Description}>
                  You have the right to:
                </div>
                <div className={styles.Terms_Item_Description_Condition}>
                  {/* список условий */}
                  <ul className={styles.Condition_List}>
                    {/* елемент условия с заголовком и с подсписком */}
                    <li className={styles.Condition_List_Item}>
                      {/* подсписок */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Request access to your personal data (commonly known
                          as a "data subject access request"). This enables you
                          to receive a copy of the personal data we hold about
                          you and to check that we are lawfully process in git.
                        </li>

                        <li className={styles.Condition_List_Item_List_Item}>
                          Request correction of the personal data that we hold
                          about you. This enables you to have any incomplete or
                          inaccurate data we hold about you corrected, though we
                          may need to verify the accuracy of the new data you
                          provide to us.{' '}
                        </li>

                        <li className={styles.Condition_List_Item_List_Item}>
                          Request erasure of your personal data. This enables
                          you to ask us to delete or remove personal data where
                          there is no good reason for us continuing to process
                          it. You also have the right to ask us to delete or
                          remove your personal data where you have successfully
                          exercised your right to object to processing (see
                          below), where we may have processed your information
                          unlawfully or where we are required to erase your
                          personal data to comply with local law. Note, however,
                          that we may not always be able to comply with your
                          request of erasure for specific legal reasons which
                          will be notified to you, if applicable,at the time of
                          your request.{' '}
                        </li>

                        <li className={styles.Condition_List_Item_List_Item}>
                          Object to processing of your personal data where we
                          are relying on a legitimate interest (or those of a
                          third party) and there is something about your
                          particular situation which makes you want to object to
                          processing on this ground as you feel it impacts on
                          your fundamental rights and freedoms. You also have
                          the right to object where we are processing your
                          personal data for direct marketing purposes. In some
                          cases, we may demonstrate that we have compelling
                          legitimate grounds to process your information which
                          override your rights and freedoms.
                        </li>

                        <li className={styles.Condition_List_Item_List_Item}>
                          <div className={styles.Title}>
                            Request restriction of processing of your personal
                            data. This enables you to ask us to suspend the
                            processing of your personal data in the following
                            scenarios:
                          </div>
                          <ul className={styles.List}>
                            <li className={styles.Item}>
                              If you want us to establish the data's accuracy.
                            </li>
                            <li className={styles.Item}>
                              Where our use of the data is unlawful but you do
                              not want us to erase it.
                            </li>
                            <li className={styles.Item}>
                              Where you need us to hold the data even if we no
                              longer require it as you need it to establish,
                              exercise or defend legal claims.
                            </li>
                            <li className={styles.Item}>
                              You have objected to our use of your data but we
                              need to verify whether we have overriding
                              legitimate grounds to use it.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <br />

                <div className={styles.Terms_Item_Description}>
                  Request the transfer of your personal data to you or to a
                  third party. We will provide to you, or a third party you have
                  chosen, your personal data in a structured,commonly used,
                  machine-readable format. Note that this right only applies to
                  automated information which you initially provided consent for
                  us to use or where we used the information to perform a
                  contract with you.
                </div>

                <div className={styles.Terms_Item_Description}>
                  Withdraw consent at any time where we are relying on consent
                  to process your personal data. However, this will not affect
                  the lawfulness of any processing carried out before you
                  withdraw your consent. If you withdraw your consent, we may
                  not be able to provide certain products or services to you. We
                  will advise you if this is the case at the time you withdraw
                  your consent.
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
