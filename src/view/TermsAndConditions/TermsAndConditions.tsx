import React from 'react';
import styles from './TermsAndConditions.module.scss';
import { Header } from '@content/index';
import { BaseContainer, BaseTitle } from '@base/index';
import Image from 'next/image';
import Editor from "@content/Editor/Editor";
import {AboutUsPlugin} from "@content/Editor/plugins/AboutUs";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const TermsAndConditions = () => {
  const id = "documentaboutus";
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});
  return (
    <>
      <div className={styles.HeaderOverlay}>
        <BaseContainer>
          <div className={styles.Header}>
            <Header>
              <BaseTitle>TERMS & CONDITIONS</BaseTitle>
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
              {/* 1 */}
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  There are other terms that may apply to you
                </div>

                <div className={styles.Terms_Item_Description}>
                  These terms of use refer to the following additional terms,
                  which also apply to your use of our site:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Our Privacy Policy. See further under How we may use your
                    personal information.
                  </li>
                  <li className={styles.List_Item}>
                    Our Complaints Policy. See further under Complaints Policy
                  </li>
                </ul>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  We may make changes to these terms
                </div>

                <div className={styles.Terms_Item_Description}>
                  We amend these terms from time to time. Every time you wish to
                  use our site, please check these terms to ensure you
                  understand the terms that apply at that time.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  We may make changes to our site{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  We may update and change our site from time to time to reflect
                  changes to our products, our services, our users` needs and
                  our business priorities.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  We may suspend or withdraw our site{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  Our site is made available free of charge. We do not guarantee
                  that our site, or any content on it, will always be available
                  or be uninterrupted. We may suspend or withdraw or restrict
                  the availability of all or any part of our site for business
                  and operational reasons. We will try to give you reasonable
                  notice of any suspension or withdrawal.
                </div>
                <div className={styles.Terms_Item_Description}>
                  You are also responsible for ensuring that all persons who
                  access our site through your internet connection are aware of
                  these terms of use and other applicable terms and conditions,
                  and that they comply with them.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  We may transfer this agreement to someone else{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  We may transfer our rights and obligations under these terms
                  to another organisation. We will always tell you in writing if
                  this happens and we will ensure that the transfer will not
                  affect your rights under the contract.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Our site is only for users in the USA{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  Our site is directed to people residing in the United States.
                  We do not represent that content available on or through our
                  site is appropriate for use or available in other locations.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  You must keep your account details safe{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  If you choose, or you are provided with, a user identification
                  code, password or any other piece of information as part of
                  our security procedures, you must treat such information as
                  confidential. You must not disclose it to any third party. We
                  have the right to disable any user identification code or
                  password, whether chosen by you or allocated by us, at any
                  time, if in our reasonable opinion you have failed to comply
                  with any of the provisions of these terms of use. If you know
                  or suspect that anyone other than you knows your user
                  identification code or password, you must promptly notify us
                  at info@manisland.com.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  How you may use material on our site{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  We are the owner or the licensee of all intellectual property
                  rights in our site, and in the material published on it. Those
                  works are protected by copyright laws and treaties around the
                  world. All such rights are reserved. You may print off one
                  copy, and may download extracts, of any page(s) from our site
                  for your personal use and you may draw the attention of others
                  within your organisation to content posted on our site. You
                  must not modify the paper or digital copies of any materials
                  you have printed off or downloaded in any way, and you must
                  not use any illustrations, photographs, video or audio
                  sequences or any graphics separately from any accompanying
                  text. Our status (and that of any identified contributors) as
                  the authors of content on our site must always be
                  acknowledged. You must not use any part of the content on our
                  site for commercial purposes without obtaining a licence to do
                  so from us or our licensors. If you print off, copy or
                  download any part of our site in breach of these terms of use,
                  your right to use our site will cease immediately and you
                  must, at our option, return or destroy any copies of the
                  materials you have made.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Do not rely on information on this site{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  The content on our site is provided for general information
                  only. It is not intended to amount to advice on which you
                  should rely. You must obtain professional or specialist advice
                  before taking, or refraining from, any action on the basis of
                  the content on our site. Although we make reasonable efforts
                  to update the information on our site, we make no
                  representations, warranties or guarantees, whether express or
                  implied, that the content on our site is accurate, complete or
                  up to date.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  We are not responsible for websites we link to{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  Where our site contains links to other sites and resources
                  provided by third parties, these links are provided for your
                  information only. Such links should not be interpreted as
                  approval by us of those linked websites or information you may
                  obtain from them. We have no control over the contents of
                  those sites or resources.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  User-generated content is not approved by us{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  This website may include information and materials uploaded by
                  other users of the site. This information and these materials
                  have not been verified or approved by us. The views expressed
                  by other users on our site do not represent our views or
                  values.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  How to complain about content uploaded by other users{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  If you wish to complain about content uploaded by other users,
                  please contact us on info@manisland.com.
                </div>
              </div>

              {/* 2 */}
              <div className={styles.Terms_Item}>
                {/* загловок */}
                <div className={styles.Terms_Item_Title}>
                  Our responsibility for loss or damage suffered by you
                </div>
                {/* описание */}
                <div className={styles.Terms_Item_Description}>
                  If you wish to complain about content uploaded by other users,
                  please contact us on info@manisland.com.
                </div>
                {/* если условие */}
                <div className={styles.Terms_Item_Description_Condition}>
                  {/* список условий */}
                  <ul className={styles.Condition_List}>
                    {/* елемент условия */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок элемента условия */}
                      <div className={styles.Condition_List_Item_Title}>
                        Whether you are a consumer or a business user:
                      </div>
                      {/* список условия */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          We do not exclude or limit in any way our liability to
                          you where it would be unlawful to do so. This includes
                          liability for death or personal injury caused by our
                          negligence or the negligence of our employees, agents
                          or subcontractors and for fraud or fraudulent
                          misrepresentation.
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Different limitations and exclusions of liability will
                          apply to liability arising as a result of the supply
                          of any products or services to you, which will be set
                          out in our Engagement Letter with clients.
                        </li>
                      </ul>
                    </li>
                    {/* елемент условия с заголовком и с подсписком */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок подсписка */}
                      <div className={styles.Condition_List_Item_Title}>
                        If you are a business user:
                      </div>
                      {/* подсписок */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          We exclude all implied conditions, warranties,
                          representations or other terms that may apply to our
                          site or any content on it.
                        </li>

                        <li className={styles.Condition_List_Item_List_Item}>
                          <div className={styles.Title}>
                            We will not be liable to you for any loss or damage,
                            whether in contract, tort (including negligence),
                            breach of statutory duty, or otherwise, even if
                            foreseeable, arising under or in connection with:
                          </div>
                          <ul className={styles.List}>
                            <li className={styles.Item}>
                              use of, or inability to use, our site; or
                            </li>
                            <li className={styles.Item}>
                              use of or reliance on any content displayed on our
                              site.
                            </li>
                            <li className={styles.Item}>
                              In particular, we will not be liable for:
                            </li>
                            <li className={styles.Item}>
                              loss of profits, sales, business, or revenue;
                            </li>
                            <li className={styles.Item}>
                              business interruption; loss of anticipated
                              savings;
                            </li>
                            <li className={styles.Item}>
                              loss of business opportunity, goodwill or
                              reputation; or
                            </li>
                            <li className={styles.Item}>
                              any indirect or consequential loss or damage.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className={styles.Condition_List_Item}>
                      <div className={styles.Condition_List_Item_Title}>
                        If you are a consumer user:
                      </div>

                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Please note that we only provide our site for domestic
                          and private use. You agree not to use our site for any
                          commercial or business purposes, and we have no
                          liability to you for any loss of profit, loss of
                          business, business interruption, or loss of business
                          opportunity.
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          If defective digital content that we have supplied,
                          damages a device or digital content belonging to you
                          and this is caused by our failure to use reasonable
                          care and skill, we will either repair the damage or
                          pay you compensation.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Our Privacy Policy. See further under How we may use your
                    personal information.
                  </li>
                  <li className={styles.List_Item}>
                    Our Complaints Policy. See further under Complaints Policy
                  </li>
                </ul> */}
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  How we may use your personal information{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  We will only use your personal information as set out in our
                  Privacy Policy.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Uploading content to our site{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  Whenever you make use of a feature that allows you to upload
                  content to our site, or to make contact with other users of
                  our site, you must comply with the terms set out in the
                  “Prohibited uses” below. You warrant that any such
                  contribution does meet those standards, and you will be liable
                  to us and indemnify us for any breach of that warranty. This
                  means you will be responsible for any loss or damage we suffer
                  as a result of your breach of warranty. Any content you upload
                  to our site will be considered non-confidential and
                  non-proprietary. You retain all of your ownership rights in
                  your content, but you are required to grant us and other users
                  of our site a limited licence to use, store and copy that
                  content and to distribute and make it available to third
                  parties. We also have the right to disclose your identity to
                  any third party who is claiming that any content posted or
                  uploaded by you to our site constitutes a violation of their
                  intellectual property rights, or of their right to privacy.
                  You are solely responsible for securing and backing up your
                  content. We do not store terrorist content.{' '}
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Rights you are giving us to use material you upload{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  When you upload or post content to our site, you grant us the
                  following rights to use that content: a worldwide,
                  non-exclusive, royalty-free, transferable licence to use,
                  reproduce, distribute, prepare derivative works of, display,
                  and perform that user-generated content in connection with the
                  service provided by the website and across different media
                  including to promote the site or the service forever; a
                  worldwide, non-exclusive, royalty-free, transferable licence
                  for other users, partners or advertisers to use the content in
                  accordance with the functionality of the site forever.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  We are not responsible for viruses and you must not introduce
                  them{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  We do not guarantee that our site will be secure or free from
                  bugs or viruses. You are responsible for configuring your
                  information technology, computer programmes and platform to
                  access our site. You should use your own virus protection
                  software. You must not misuse our site by knowingly
                  introducing viruses, trojans, worms, logic bombs or other
                  material that is malicious or technologically harmful. You
                  must not attempt to gain unauthorised access to our site, the
                  server on which our site is stored or any server, computer or
                  database connected to our site. You must not attack our site
                  via a denial-of-service attack or a distributed denial-of
                  service attack.By breaching this provision, you would commit a
                  criminal offence under the Computer Misuse Act 1990. We will
                  report any such breach to the relevant law enforcement
                  authorities and we will co-operate with those authorities by
                  disclosing your identity to them. In the event of such a
                  breach, your right to use our site will cease immediately.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Rules about linking to our site{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  You may link to our homepage, provided you do so in a way that
                  is fair and legal and does not damage our reputation or take
                  advantage of it. You must not establish a link in such a way
                  as to suggest any form of association, approval or endorsement
                  on our part where none exists. You must not establish a link
                  to our site in any website that is not owned by you. Our site
                  must not be framed on any other site, nor may you create a
                  link to any part of our site other than the home page. We
                  reserve the right to withdraw linking permission without
                  notice. If you wish to link to or make any use of content on
                  our site other than that set out above,please contact
                  info@manisland.com.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Our trade marks </div>

                <div className={styles.Terms_Item_Description}>
                  Manhattan VC Holding containers are trademarks of Manhattan VC
                  Holding LLC. You are not permitted to use them without our
                  approval, unless they are part of material you are using as
                  expressly permitted by us.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Prohibited uses</div>

                <div className={styles.Terms_Item_Description}>
                  You may use our site only for lawful purposes. You may not use
                  our site:{' '}
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    In any way that breaches any applicable local, national or
                    international law or regulation.
                  </li>
                  <li className={styles.List_Item}>
                    In any way that is unlawful or fraudulent or has any
                    unlawful or fraudulent purpose or effect.
                  </li>
                  <li className={styles.List_Item}>
                    For the purpose of harming or attempting to harm minors in
                    any way.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    To bully, insult, intimidate or humiliate any person.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    To send, knowingly receive, upload, download, use or re-use
                    any material unless expressly permitted (e.g. by signing our
                    engagement letter).{' '}
                  </li>
                  <li className={styles.List_Item}>
                    To transmit, or procure the sending of, any unsolicited or
                    unauthorised advertising or promotional material or any
                    other form of similar solicitation (spam).
                  </li>
                  <li className={styles.List_Item}>
                    To knowingly transmit any data, send or upload any material
                    that contains viruses, Trojan horses, worms, time-bombs,
                    keystroke loggers, spyware, adware or any other harmful
                    programs or similar computer code designed to adversely
                    affect the operation of any computer software or hardware.
                  </li>
                </ul>

                <div className={styles.Terms_Item_Description}>
                  You may use our site only for lawful purposes. You may not use
                  our site:
                </div>

                {/* сюда */}
                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Not to reproduce, duplicate, copy or re-sell any part of our
                    site in contravention of these terms of website use.
                  </li>
                  <li className={styles.List_Item}>
                    <div className={styles.List_Item_Title}>
                      Not to access without authority, interfere with, damage or
                      disrupt:
                    </div>
                    <ul className={styles.Terms_Item_DescriptionList}>
                      <li className={styles.List_Item}>
                        any part of our site;
                      </li>
                      <li className={styles.List_Item}>
                        any equipment or network on which our site is stored;
                      </li>
                      <li className={styles.List_Item}>
                        any software used in the provision of our site; or
                      </li>
                      <li className={styles.List_Item}>
                        any equipment or network or software owned or used by
                        any third party.
                      </li>
                      <li className={styles.List_Item}>
                        use of or reliance on any content displayed on our site.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Breach of this policy
                </div>

                <div className={styles.Terms_Item_Description}>
                  When we consider that a breach of these terms has occurred, we
                  may take such action as we deem appropriate. Failure to comply
                  with these terms may result in our taking all or any of the
                  following actions:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Immediate, temporary or permanent withdrawal of your right
                    to use our site.
                  </li>
                  <li className={styles.List_Item}>
                    Immediate, temporary or permanent removal of any
                    Contribution uploaded by you to our site.
                  </li>
                  <li className={styles.List_Item}>
                    Issue of a warning to you.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Legal proceedings against you for reimbursement of all costs
                    on an indemnity basis (including, but not limited to,
                    reasonable administrative and legal costs) resulting from
                    the breach.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Further legal action against you.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Disclosure of such information to law enforcement
                    authorities as we reasonably feel is necessary or as
                    required by law.{' '}
                  </li>
                </ul>

                <div className={styles.Terms_Item_Description}>
                  We exclude our liability for all action we may take in
                  response to breaches of these terms.The actions we may take
                  are not limited to those described above, and we may take any
                  other action we reasonably deem appropriate.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  How this contract can be transferred{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  We can transfer our rights and obligations under these terms
                  to any third party, provided thisdoes not adversely affect
                  your rights under these terms.
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>
                  Which country&apos;s laws apply to any disputes?{' '}
                </div>

                <div className={styles.Terms_Item_Description}>
                  If you are a consumer,please note that these terms of use,
                  their subject matter and their formation, are governed by US
                  law. You and we both agree that the courts of US, state of New
                  York will have exclusive jurisdiction. If you are a
                  business,these terms of use, their subject matter and their
                  formation (and any non-contractual disputes or claims) are
                  governed by US law. We both agree to the exclusive
                  jurisdiction of the courts of United States.
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default TermsAndConditions;
