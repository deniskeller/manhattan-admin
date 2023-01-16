//@ts-nocheck
import {
  BaseAlert,
  BaseButtonApp,
  BaseCheckbox,
  BaseIcon,
  BaseInputApp,
  BaseInputFileApp,
  BaseRadioButton,
  BaseSelectApp,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import React, { useState } from 'react';
import s from './CreateProject.module.scss';
import Input from '@tw/components/Input/Input';
import { ALL_ICONS } from '@constants/icons';

const navbar_links = [
  'General',
  'Pipeline',
  'Payout',
  'Fund Expences',
  'Life Cycle',
  'Commitments',
  'Capital Calls (optional)',
  'Provisions',
  'Investment agreement',
  'Portfolio pictures',
];

const CreateProject = () => {
  const [isActive, setIsActive] = useState(0);

  const [value, setValue] = React.useState({
    some_text: '',
    dividend_payments: 'Upon expiration',
    files: [],
    title: 'Mr',
  });

  const setNewValue = (val: string | number | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const radio_items = [
    {
      value: 'yes',
      label: 'yes',
    },
    {
      value: 'no',
      label: 'no',
    },
  ];
  const [radioValue, setRadioValue] = React.useState('yes');

  const handleClickNavbar = (index: number) => {
    setIsActive(index);
    const element = document.getElementById(`section-${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className={s.CreateProject}>
        <div className={s.CreateProject_Header}>
          <BaseTitle type="app" className={s.CreateProject_Header_Title}>
            Create project
          </BaseTitle>
        </div>

        <div className={s.CreateProject_Content} id="section-1">
          <div className={s.CreateProject_Content_Main}>
            <div className={s.Form}>
              {/* 1 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>1. General</span>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    name="some_text"
                    placeholder="Project name"
                    label="Project name"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.ProjectName}
                  />

                  <div className={s.FoundedIn}>
                    <Input.Calendar
                      label={'Founded in'}
                      value={value.some_text}
                      calendarProps={{}}
                      valueCodeInitial={''}
                      variant={'default'}
                      message={''}
                      messageCode={''}
                      isErrorPhone={false}
                      isErrorCode={false}
                      onChange={(val: string) => setNewValue(val, 'birth_date')}
                    />
                  </div>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    name="some_text"
                    placeholder="Tagline"
                    label="Tagline"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Tagline}
                  />
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Project logo for dark theme</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputFileApp
                    type="image"
                    title="Drag file here to upload or browse"
                    types="jpg, jpeg, png"
                    files={value.files}
                    onChange={(val: any[]) => setNewValue(val, 'files')}
                  />
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Project logo for light theme</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputFileApp
                    type="image"
                    title="Drag file here to upload or browse"
                    types="jpg, jpeg, png"
                    files={value.files}
                    onChange={(val: any[]) => setNewValue(val, 'files')}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  {/* переделать текстареа */}
                  <BaseTextarea
                    name="message"
                    label="Discription"
                    placeholder="Discription"
                    type="text"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Discription}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseSelectApp
                    label="Market countries"
                    options={[
                      { value: 'mr', label: 'Mr.' },
                      { value: 'mrs', label: 'Mrs.' },
                      { value: 'ms', label: 'Ms.' },
                      { value: 'mss', label: 'Mss.' },
                    ]}
                    onChange={(val: string) => setNewValue(val, 'title')}
                    className={s.Select}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseSelectApp
                    label="Main tag"
                    options={[
                      { value: 'mr', label: 'Mr.' },
                      { value: 'mrs', label: 'Mrs.' },
                      { value: 'ms', label: 'Ms.' },
                      { value: 'mss', label: 'Mss.' },
                    ]}
                    onChange={(val: string) => setNewValue(val, 'title')}
                    className={`${s.Select} ${s.Halfwidth}`}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseSelectApp
                    label="Secondary tags"
                    options={[
                      { value: 'mr', label: 'Mr.' },
                      { value: 'mrs', label: 'Mrs.' },
                      { value: 'ms', label: 'Ms.' },
                      { value: 'mss', label: 'Mss.' },
                    ]}
                    onChange={(val: string) => setNewValue(val, 'title')}
                    className={s.Select}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="marker"
                    name="some_text"
                    placeholder="Company business address"
                    label="Company business address"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Fullwidth}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="marker"
                    name="some_text"
                    placeholder="Company office address"
                    label="Company office address"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Fullwidth}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="website"
                    name="some_text"
                    placeholder="Company website"
                    label="Company website"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Halfwidth}
                  />

                  <BaseInputApp
                    prefix="mail"
                    name="some_text"
                    placeholder="Company email"
                    label="Company email"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Company market cap"
                    label="Company market cap"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Halfwidth}
                  />

                  <BaseInputApp
                    prefix="percent"
                    name="some_text"
                    placeholder="ROI"
                    label="ROI"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Pitch</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputFileApp
                    title="Drag file here to upload or browse"
                    types=".odt, .doc, docx, .pdf, .jpg, jpeg, .png, .ppt, .odp, .pptx (max 3MB)"
                    files={value.files}
                    onChange={(val: any[]) => setNewValue(val, 'files')}
                  />
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p style={{ fontWeight: 600 }}>Valuation</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Valuation"
                    label="Valuation"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Fullwidth}
                  />
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Valuation partner logo</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputFileApp
                    type="image"
                    title="Drag file here to upload or browse"
                    types="jpg, jpeg, png"
                    files={value.files}
                    onChange={(val: any[]) => setNewValue(val, 'files')}
                  />
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Valuation statement</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputFileApp
                    title="Drag file here to upload or browse"
                    types="odt, doc, docx, pdf, jpg, jpeg, png, ppt, odp, pptx (max 3MB)"
                    files={value.files}
                    onChange={(val: any[]) => setNewValue(val, 'files')}
                  />
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p style={{ fontWeight: 600 }}>Targer raise</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Targer raise"
                    label="Targer raise"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={s.Fullwidth}
                  />
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-2"></div>

              {/* 2 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>2. Pipeline</span>
                  <span>
                    <p>Up to 5 milestones</p>
                  </span>
                </div>

                <div className={s.MilestoneItem}>
                  <div className={s.Form_Block_Subtitle}>
                    <p>Milestone 1</p>
                  </div>

                  <div className={s.Form_Block_Row}>
                    <BaseSelectApp
                      label="Quartal"
                      options={[
                        { value: 'quartal_1', label: 'Quartal 1' },
                        { value: 'quartal_2', label: 'Quartal 2' },
                        { value: 'quartal_3', label: 'Quartal 3' },
                        { value: 'quartal_4', label: 'Quartal 4' },
                      ]}
                      onChange={(val: string) => setNewValue(val, 'title')}
                      className={`${s.Halfwidth}`}
                    />

                    <BaseSelectApp
                      label="Year"
                      options={[
                        { value: '2020', label: '2020' },
                        { value: '2021', label: '2021' },
                        { value: '2022', label: '2022' },
                        { value: '2023', label: '2023' },
                      ]}
                      onChange={(val: string) => setNewValue(val, 'title')}
                      className={`${s.Halfwidth} ${s.SecondItem}`}
                    />
                  </div>

                  <div className={s.Form_Block_Row}>
                    {/* переделать текстареа */}
                    <BaseTextarea
                      name="message"
                      label="Discription"
                      placeholder="Discription"
                      type="text"
                      value={value.some_text}
                      onChange={(val: string) => setNewValue(val, 'some_text')}
                      className={s.Discription}
                    />
                  </div>

                  <div className={s.MilestoneItem_ButtonAdd}>
                    + Add milestone
                  </div>
                </div>

                <div className={s.MilestoneItem}>
                  <div className={s.Form_Block_Subtitle}>
                    <p>Milestone 2 </p>

                    <div className={s.MilestoneDelete}>
                      <div className={s.MilestoneDelete_Title}>
                        <span>Delete</span>
                      </div>

                      <BaseIcon
                        viewBox="0 0 21 21"
                        icon={ALL_ICONS.DELETE}
                        className={s.MilestoneDelete_Icon}
                      />
                    </div>
                  </div>

                  <div className={s.Form_Block_Row}>
                    <BaseSelectApp
                      label="Quartal"
                      options={[
                        { value: 'quartal_1', label: 'Quartal 1' },
                        { value: 'quartal_2', label: 'Quartal 2' },
                        { value: 'quartal_3', label: 'Quartal 3' },
                        { value: 'quartal_4', label: 'Quartal 4' },
                      ]}
                      onChange={(val: string) => setNewValue(val, 'title')}
                      className={`${s.Halfwidth}`}
                    />

                    <BaseSelectApp
                      label="Year"
                      options={[
                        { value: '2020', label: '2020' },
                        { value: '2021', label: '2021' },
                        { value: '2022', label: '2022' },
                        { value: '2023', label: '2023' },
                      ]}
                      onChange={(val: string) => setNewValue(val, 'title')}
                      className={`${s.Halfwidth} ${s.SecondItem}`}
                    />
                  </div>

                  <div className={s.Form_Block_Row}>
                    {/* переделать текстареа */}
                    <BaseTextarea
                      name="message"
                      label="Discription"
                      placeholder="Discription"
                      type="text"
                      value={value.some_text}
                      onChange={(val: string) => setNewValue(val, 'some_text')}
                      className={s.Discription}
                    />
                  </div>

                  <div className={s.MilestoneItem_ButtonAdd}>
                    + Add milestone
                  </div>
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-3"></div>

              {/* 3 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>3. Payout</span>
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Caption caption caption caption caption </p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    name="dividend_payments"
                    placeholder="Dividend payments"
                    label="Dividend payments"
                    value={value.dividend_payments}
                    disabled
                    onChange={(val: string) =>
                      setNewValue(val, 'dividend_payments')
                    }
                    className={`${s.Halfwidth}`}
                  />

                  <BaseInputApp
                    prefix="percent"
                    name="some_text"
                    placeholder="Dividend percentage"
                    label="Dividend percentage"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="percent"
                    name="some_text"
                    placeholder="Guaranteed savings"
                    label="Guaranteed savings"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth}`}
                  />

                  <BaseInputApp
                    prefix="percent"
                    name="some_text"
                    placeholder="Management fee"
                    label="Management fee"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-4"></div>

              {/* 4 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>4. Fund Expences</span>
                  <span>
                    <p>Total: $ –</p>
                  </span>
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Caption caption caption caption caption</p>
                </div>

                <div className={s.Form_Block_Grid}>
                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Office rent"
                    label="Office rent"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Salaries"
                    label="Salaries"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Tax"
                    label="Tax"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="IT expences"
                    label="IT expences"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Share capital"
                    label="Share capital"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Office equipment"
                    label="Office equipment"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Marketing"
                    label="Marketing"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Travel & Expences"
                    label="Travel & Expences"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Banking fees"
                    label="Banking fees"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Legal expences"
                    label="Legal expences"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Regulatory expances"
                    label="Regulatory expances"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-5"></div>

              {/* 5 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>5. Life Cycle</span>
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Caption caption caption caption caption</p>
                </div>

                <div className={s.Form_Block_Grid}>
                  {/* переделать на каунтеры */}
                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Office rent"
                    label="Office rent"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Salaries"
                    label="Salaries"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Salaries"
                    label="Salaries"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-6"></div>

              {/* 6 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>6. Commitments</span>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Min. investment amount"
                    label="Min. investment amount"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Max. investment amount"
                    label="Max. investment amount"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <div className={s.Fullwidth}>
                    <Input.Calendar
                      label={'Round period'}
                      value={value.some_text}
                      calendarProps={{}}
                      valueCodeInitial={''}
                      variant={'default'}
                      message={''}
                      messageCode={''}
                      isErrorPhone={false}
                      isErrorCode={false}
                      onChange={(val: string) => setNewValue(val, 'birth_date')}
                    />
                  </div>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseCheckbox
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className={s.Tabs_TabList_Checkbox}
                  >
                    Company shares instead of money
                  </BaseCheckbox>
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-7"></div>

              {/* 7 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>7. Capital Calls</span>
                  <span>
                    <p>(optional)</p>
                  </span>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Min. investment amount"
                    label="Min. investment amount"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth}`}
                  />

                  <BaseInputApp
                    prefix="dollar"
                    name="some_text"
                    placeholder="Max. investment amount"
                    label="Max. investment amount"
                    value={value.some_text}
                    onChange={(val: string) => setNewValue(val, 'some_text')}
                    className={`${s.Halfwidth} ${s.SecondItem}`}
                  />
                </div>

                <div className={s.Form_Block_Row}>
                  <div className={s.Fullwidth}>
                    <Input.Calendar
                      label={'Round period'}
                      value={value.some_text}
                      calendarProps={{}}
                      valueCodeInitial={''}
                      variant={'default'}
                      message={''}
                      messageCode={''}
                      isErrorPhone={false}
                      isErrorCode={false}
                      onChange={(val: string) => setNewValue(val, 'birth_date')}
                    />
                  </div>
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-8"></div>

              {/* 8 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>8. Provisions</span>
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Voting rights for investors when making decisions</p>
                </div>

                <div className={s.Form_Block_ChoiseOptions}>
                  {radio_items?.map((item) => {
                    return (
                      <BaseRadioButton
                        key={item.value}
                        value={item.value}
                        checked={radioValue === item.value}
                        onChange={() => setRadioValue(item.value)}
                        className={s.Form_Block_ChoiseOptions_Button}
                      >
                        {item.label}
                      </BaseRadioButton>
                    );
                  })}
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-9"></div>

              {/* 9 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>9. Investment agreement</span>
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Uploading an investment agreement</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputFileApp
                    title="Drag file here to upload or browse"
                    types=".odt, .doc, docx, .pdf, .jpg, jpeg, .png, .ppt, .odp, .pptx (max 3MB)"
                    files={value.files}
                    onChange={(val: any[]) => setNewValue(val, 'files')}
                  />
                </div>
              </div>

              {/* border */}
              <div className={s.Form_Border} id="section-10"></div>

              {/* 10 */}
              <div className={s.Form_Block}>
                <div className={s.Form_Block_Title}>
                  <span>10. Portfolio pictures</span>
                </div>

                <div className={s.Form_Block_Subtitle}>
                  <p>Upload your portfolio pictures (maximum 10)</p>
                </div>

                <div className={s.Form_Block_Row}>
                  <BaseInputFileApp
                    type="image"
                    title="Drag file here to upload or browse"
                    types="jpg, jpeg, png"
                    files={value.files}
                    multiple
                    onChange={(val: any[]) => setNewValue(val, 'files')}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* НАВБАР */}
          <div className={s.CreateProject_Content_Navbar}>
            <div className={s.Navbar}>
              <div className={s.Navbar_Header}>
                <BaseButtonApp
                  title="Archive"
                  type="secondary"
                  size="small"
                  className={s.Navbar_Header_Button}
                />

                <BaseButtonApp
                  title="Publish"
                  type="primary"
                  size="small"
                  className={s.Navbar_Header_Button}
                />
              </div>

              <ul className={s.Navbar_Content}>
                {navbar_links?.map((link, index) => {
                  return (
                    <li
                      className={`${s.Navbar_Content_Item} ${
                        isActive == index ? s.Active : ''
                      }`}
                      key={index}
                      onClick={() => handleClickNavbar(index)}
                    >
                      <div className={s.Navbar_Content_Item_Number}>
                        <span>{index + 1}</span>
                      </div>
                      <div className={s.Navbar_Content_Item_Name}>{link}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BaseAlert />
    </>
  );
};

export default CreateProject;
