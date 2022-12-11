import React from 'react';
import styles from './ComplaintsPolicy.module.scss';
import { Header } from '@content/index';
import { BaseContainer, BaseTitle } from '@base/index';
import Image from 'next/image';
import {AboutUsPlugin} from "@content/Editor/plugins/AboutUs";
import Editor from "@content/Editor/Editor";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const ComplaintsPolicy = () => {
  const id = "documentaboutus";
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});

  return (
    <>
      <div className={styles.HeaderOverlay}>
        <BaseContainer>
          <div className={styles.Header}>
            <Header>
              <BaseTitle>Complaints Policy</BaseTitle>
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
                <div className={styles.Terms_Item_Title}>Introduction</div>

                <div className={styles.Terms_Item_Description}>
                  Manhattan VC Holding LLC (“Manhattan VC Holding”) is committed
                  to providing a quality service and working in an open and
                  accountable way that builds trust and respect. One of the ways
                  in which we can continue to improve our service is by
                  listening and responding to the views of our clients and
                  stakeholders, and in particular by responding positively to
                  complaints, and by putting mistakes right.
                </div>

                <div className={styles.Terms_Item_Description}>
                  Therefore we aim to ensure that:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    making a complaint is as easy as possible
                  </li>
                  <li className={styles.List_Item}>
                    we welcome compliments, feedback and suggestions
                  </li>
                  <li className={styles.List_Item}>
                    we treat a complaint as a clear expression of
                    dissatisfaction with our service which calls for an
                    immediate response
                  </li>
                  <li className={styles.List_Item}>
                    we deal with it promptly, politely and, when appropriate,
                    confidentially
                  </li>
                  <li className={styles.List_Item}>
                    we respond in the right way - for example, with an
                    explanation, or an apology where we have got things wrong,
                    or information on any action taken etc.
                  </li>
                  <li className={styles.List_Item}>
                    we learn from complaints, use them to improve our service,
                    and review annually our complaints policy and procedures We
                    recognise that many concerns will be raised informally, and
                    dealt with quickly. Our aims are to:
                  </li>
                  <li className={styles.List_Item}>
                    resolve informal concerns quickly
                  </li>
                  <li className={styles.List_Item}>keep matters low-key</li>
                  <li className={styles.List_Item}>
                    enable mediation between the complainant and the individual
                    to whom the complaint has been referred This policy ensures
                    that we provide guidelines for dealing with complaints from
                    members of the public about our services, facilities and
                    staff
                  </li>
                </ul>
              </div>
              {/* 2 */}
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Definitions </div>

                <div className={styles.Terms_Item_Description}>
                  A complaint is defined as any expression of dissatisfaction,
                  however, it is expressed. This would include complaints
                  expressed face to face, via a phone call, in writing, via
                  email or any other method. All staff should have sufficient
                  knowledge to be able to identify an “expression of
                  dissatisfaction” even when the word “complain” or “complaint”
                  is not used.
                </div>

                <div className={styles.Terms_Item_Description}>
                  A complaint covered by this Policy can be distinguished from:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>staff grievances</li>
                  <li className={styles.List_Item}>
                    responses to requests for feedback about the standard of our
                    service provision
                  </li>
                  <li className={styles.List_Item}>
                    reports of problems or wrongdoing merely intended to bring a
                    problem to our notice with no expectation of a response
                  </li>
                  <li className={styles.List_Item}>service requests</li>
                  <li className={styles.List_Item}>requests for information</li>
                </ul>
              </div>
              {/* 3 */}
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Scope</div>

                <div className={styles.Terms_Item_Description}>
                  This policy applies to all staff receiving or managing
                  complaints from our clients, their related parties and any
                  member of the public made to or about us, regarding our
                  products, services, staff and complaint handling.
                </div>
              </div>
              {/* 4 */}
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Complaints</div>

                <div className={styles.Terms_Item_Description}>
                  The formal complaints procedure is intended to ensure that all
                  complaints are handled fairly, consistently and wherever
                  possible, resolved to the complainant&apos;s satisfaction.
                </div>
              </div>
              {/* 5 */}
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Responsibilities</div>

                <div className={styles.Terms_Item_Description}>
                  Manisland’s responsibility will be to:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    acknowledge the formal complaint in writing;
                  </li>
                  <li className={styles.List_Item}>
                    Explain the complaints process;
                  </li>
                  <li className={styles.List_Item}>
                    respond within a stated period of time;
                  </li>
                  <li className={styles.List_Item}>
                    Inform the complainant of the progress of the complaint and
                    reasons for any delay
                  </li>
                  <li className={styles.List_Item}>
                    Inform the complainant of the possible or likely outcome of
                    their complaint.
                  </li>
                </ul>
              </div>
              {/* 6 */}
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
              {/* 7 */}
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Title}>Record keeping:</div>

                <div className={styles.Terms_Item_Description}>
                  Details and documents relating to customer complaints will be
                  retained for a period of 5 years from the date the complaint
                  has been resolved
                </div>
              </div>
              {/* 8 */}
              <div className={styles.Terms_Item}>
                {/* загловок */}
                <div className={styles.Terms_Item_Title}>
                  Complaints Procedure:
                </div>
                {/* описание */}
                <div className={styles.Terms_Item_Description}>
                  Written records must be made by Vauban at each stage of the
                  procedure
                </div>
                {/* если условие */}
                <div className={styles.Terms_Item_Description_Condition}>
                  {/* список условий */}
                  <ul className={styles.Condition_List}>
                    {/* елемент условия */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок элемента условия */}
                      <div className={styles.Condition_List_Item_Title}>
                        Stage 1
                      </div>
                      {/* список условия */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          In the first instance, staff member(s) must establish
                          the seriousness of the complaint. An informal approach
                          is appropriate when it can be achieved. If concerns
                          cannot be satisfactorily resolved informally, then the
                          formal complaints procedure should be followed.
                        </li>
                      </ul>
                    </li>
                    {/* елемент условия с заголовком и с подсписком */}
                    <li className={styles.Condition_List_Item}>
                      {/* заголовок подсписка */}
                      <div className={styles.Condition_List_Item_Title}>
                        Stage 2
                      </div>
                      {/* подсписок */}
                      <ul className={styles.Condition_List_Item_List}>
                        <li className={styles.Condition_List_Item_List_Item}>
                          <div className={styles.Title}>
                            If the complaint cannot be resolved informally, the
                            complainant should be advised that a formal
                            complaint may be made and the following procedure
                            should be explained to them. It may sometimes be
                            appropriate for a different member of staff,
                            preferably a member of the compliance team, to make
                            this explanation.
                          </div>
                          <ul className={styles.List}>
                            <li className={styles.Item}>
                              A formal complaint can be made either verbally or
                              in writing. If in writing the attached form should
                              be used. If verbally, a statement should be taken
                              by the team member or management team.
                            </li>
                            <li className={styles.Item}>
                              Upon receiving the complaint, the complainant will
                              be contacted within 24 hours, confirming the
                              complaint is being considered and advising when a
                              response can be expected.
                            </li>
                            <li className={styles.Item}>
                              In all cases, the complaint must be passed on to
                              the Team Lead. In the event of a complaint about
                              the Team Lead the complaint should be passed to
                              the The COO, and if the complaint is about the COO
                              this must be passed on to the CEO
                            </li>
                            <li className={styles.Item}>
                              One of the above will investigate the complaint.
                              Any conclusions reached should be discussed with
                              the staff member involved and their Line Manager.
                            </li>
                            <li className={styles.Item}>
                              Complaints must be resolved by the end of 15
                              business days following receipt of the complaint.
                              However in exceptional circumstances, where
                              Manhattan VC Holding is unable to issue a final
                              response within the 15 days of receipt, Manhattan
                              VC Holding will issue a holding response
                              including:
                            </li>
                            <li className={styles.Item}>
                              The reasons for the delays in resolving the
                              complaint
                            </li>
                            <li className={styles.Item}>
                              A deadline in which Manhattan VC Holding will aim
                              to issue the final response. This must be no later
                              than 35 business days from the date of receipt.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className={styles.Condition_List_Item}>
                      <div className={styles.Condition_List_Item_Title}>
                        Stage 3
                      </div>

                      <ul
                        className={styles.Condition_List_Item_List}
                        style={{ listStyle: 'auto' }}
                      >
                        <li className={styles.Condition_List_Item_List_Item}>
                          If the complainant is not satisfied with the above
                          decision, then a sub-group of the Board will be
                          convened.
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          The sub-group will examine the complaint and may wish
                          to carry out further interviews, examine files /
                          notes. They will respond within four weeks in writing
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          When a final response has been given it will either:
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Accept the complaint, and where appropriate, offer
                          redress or remedial action;
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Offer redress or remedial action without accepting the
                          complaint; or
                        </li>
                        <li className={styles.Condition_List_Item_List_Item}>
                          Reject the complaint and give reasons for doing so.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ComplaintsPolicy;
