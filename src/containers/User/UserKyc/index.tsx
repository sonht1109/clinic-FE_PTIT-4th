/*
 *
 * UserKyc
 * make by phamthainb
 */

import React, { memo, useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
// import reducersUserKyc from './store/reducers';
import WrapUserKyc from './style';
import { ILink } from 'components/Breadcum';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import API_URL from 'api/url';
// import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
// import { userKyc } from './store/selecters';
import { useForm } from 'react-hook-form';
import kycCompleted from 'assets/images/kyc-complete.png';
import emtpyIdcard from 'assets/images/empty-idcard.png';
import { FaRegMap, FaTh, FaUser } from 'react-icons/fa';
import Input from 'components/Input';
import { BiWorld } from 'react-icons/bi';
import { AiFillFileText } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import Button from 'components/Button';
import { RiUpload2Line } from 'react-icons/ri';
import { Alert } from 'components/Alert';
import { requestToken } from 'api/axios';
import { getStatusAccount } from './store/actions';
import reducersUserKyc from './store/reducers';
import { userKyc } from './store/selecters';

interface Props {}

const breadcumLinks: ILink[] = [
  {
    name: 'Trang chủ',
  },
  {
    name: 'Quản lý thông tin',
  },
  {
    name: 'Xác minh danh tính (KYC)',
  },
];

const nationCollection = [
  { name: 'Albania', code: 'AL' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: 'AQ' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas (the)', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia (Plurinational State of)', code: 'BO' },
  { name: 'Bonaire, Sint Eustatius and Saba', code: 'BQ' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Bouvet Island', code: 'BV' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Indian Ocean Territory (the)', code: 'IO' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cabo Verde', code: 'CV' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cayman Islands (the)', code: 'KY' },
  { name: 'Central African Republic (the)', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Christmas Island', code: 'CX' },
  { name: 'Cocos (Keeling) Islands (the)', code: 'CC' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros (the)', code: 'KM' },
  { name: 'Congo (the Democratic Republic of the)', code: 'CD' },
  { name: 'Congo (the)', code: 'CG' },
  { name: 'Cook Islands (the)', code: 'CK' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Curaçao', code: 'CW' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czechia', code: 'CZ' },
  { name: "Côte d'Ivoire", code: 'CI' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic (the)', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Eswatini', code: 'SZ' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Falkland Islands (the) [Malvinas]', code: 'FK' },
  { name: 'Faroe Islands (the)', code: 'FO' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'French Guiana', code: 'GF' },
  { name: 'French Polynesia', code: 'PF' },
  { name: 'French Southern Territories (the)', code: 'TF' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia (the)', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Gibraltar', code: 'GI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guadeloupe', code: 'GP' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Heard Island and McDonald Islands', code: 'HM' },
  { name: 'Holy See (the)', code: 'VA' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hong Kong', code: 'HK' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran (Islamic Republic of)', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Isle of Man', code: 'IM' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jersey', code: 'JE' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: "Korea (the Democratic People's Republic of)", code: 'KP' },
  { name: 'Korea (the Republic of)', code: 'KR' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: "Lao People's Democratic Republic (the)", code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macao', code: 'MO' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands (the)', code: 'MH' },
  { name: 'Martinique', code: 'MQ' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mayotte', code: 'YT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia (Federated States of)', code: 'FM' },
  { name: 'Moldova (the Republic of)', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montenegro', code: 'ME' },
  { name: 'Montserrat', code: 'MS' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands (the)', code: 'NL' },
  { name: 'New Caledonia', code: 'NC' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger (the)', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Niue', code: 'NU' },
  { name: 'Norfolk Island', code: 'NF' },
  { name: 'Northern Mariana Islands (the)', code: 'MP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palau', code: 'PW' },
  { name: 'Palestine, State of', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines (the)', code: 'PH' },
  { name: 'Pitcairn', code: 'PN' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Republic of North Macedonia', code: 'MK' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russian Federation (the)', code: 'RU' },
  { name: 'Rwanda', code: 'RW' },
  { name: 'Réunion', code: 'RE' },
  { name: 'Saint Barthélemy', code: 'BL' },
  { name: 'Saint Helena, Ascension and Tristan da Cunha', code: 'SH' },
  { name: 'Saint Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Martin (French part)', code: 'MF' },
  { name: 'Saint Pierre and Miquelon', code: 'PM' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia', code: 'RS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Sint Maarten (Dutch part)', code: 'SX' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
  { name: 'South Sudan', code: 'SS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan (the)', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Svalbard and Jan Mayen', code: 'SJ' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syrian Arab Republic', code: 'SY' },
  { name: 'Taiwan (Province of China)', code: 'TW' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania, United Republic of', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Timor-Leste', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tokelau', code: 'TK' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands (the)', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates (the)', code: 'AE' },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland (the)',
    code: 'GB',
  },
  { name: 'United States Minor Outlying Islands (the)', code: 'UM' },
  { name: 'United States of America (the)', code: 'US' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela (Bolivarian Republic of)', code: 'VE' },
  { name: 'Viet Nam', code: 'VN' },
  { name: 'Virgin Islands (British)', code: 'VG' },
  { name: 'Virgin Islands (U.S.)', code: 'VI' },
  { name: 'Wallis and Futuna', code: 'WF' },
  { name: 'Western Sahara', code: 'EH' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' },
];
const optionsNation: any[] = [];
for (let i = 0; i < nationCollection.length; i++) {
  optionsNation.push({
    value: nationCollection[i].name,
    label: nationCollection[i].name,
  });
}

const optionsType = [
  { value: 'passport', label: 'Hộ chiếu' },
  { value: 'cmnd', label: 'CMND' },
  { value: 'gplx', label: 'Giấy phép lái xe' },
  { value: 'cccd', label: 'Căn cước công dân' },
];

type Inputs = {
  name: string;
  idNumber: string;
  address: string;
  job: string;
};
// ----- file
var _validFileExtensions = ['.jpg', '.jpeg', '.bmp', '.gif', '.png'];

function Validate(e: any) {
  var sFileName = e.target.value;
  if (sFileName.length > 0) {
    var blnValid = false;
    for (var j = 0; j < _validFileExtensions.length; j++) {
      var sCurExtension = _validFileExtensions[j];
      if (
        sFileName
          .substr(sFileName.length - sCurExtension.length, sCurExtension.length)
          .toLowerCase() === sCurExtension.toLowerCase()
      ) {
        blnValid = true;
        break;
      }
    }
    return blnValid;
  }
}

const readURL = (input: any, setFileImagesSrc: any) => {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (event: any) {
      setFileImagesSrc(event.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
};

const isFile = (event: any, setFile: any, setFileImagesSrc: any) => {
  if (Validate(event)) {
    var files = event.target.files[0];
    readURL(event.target, setFileImagesSrc);
    setFile(files);
    Alert({ name: 'Chọn ảnh thành công', icon: 'success' });
  } else {
    Alert({
      name: 'Phải là file ảnh (jpg, jpeg, .gif, .png, .bmp)',
      icon: 'error',
    });
  }
};
// eslint-disable-next-line
function UserKyc({}: Props) {
  useInjectReducer('UserKyc', reducersUserKyc);
  // const intl = useIntl();
  const dispatch = useDispatch();
  const { statusAccount } = useSelector(userKyc);
  const [nation, setNation] = useState<any>({
    value: '',
    label: 'Chọn quốc gia',
  });

  const [type, setType] = useState<any>({
    value: '',
    label: 'Chọn loại giấy tờ',
  });
  const [img1, setImg1] = useState<any>('');
  const [img2, setImg2] = useState<any>('');
  const [img3, setImg3] = useState<any>('');
  const [imageSrc1, setImagesSrc1] = useState<any>('');
  const [imageSrc2, setImagesSrc2] = useState<any>('');
  const [imageSrc3, setImagesSrc3] = useState<any>('');
  // const [toggleModal, setToggleModal] = useState<boolean>(false);

  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const nameWatch = watch('name');
  const idNumberWatch = watch('idNumber');
  const addressWatch = watch('address');
  const jobWatch = watch('job');
  const onSubmit = (value: Inputs) => {
    const { name, idNumber, address, job } = value;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('idNumber', idNumber);
    formData.append('idType', type.value);
    formData.append('address', address);
    formData.append('country', nation.value);
    formData.append('job', job);
    formData.append('imgUrl1', img1);
    formData.append('imgUrl2', img2);
    formData.append('imgUrl3', img3);
    requestToken({
      method: 'POST',
      url: API_URL.KYC.POST,
      data: formData,
    })
      .then(res => {
        // setToggleModal(true);
        dispatch(getStatusAccount());
        Alert({
          name: 'Cập nhật thông tin thành công',
          icon: 'success',
        });
      })
      .catch(err => {
        Alert({
          name: err.message,
          icon: 'error',
        });
      });
  };
  useEffect(() => {
    dispatch(getStatusAccount());
  }, [dispatch]);
  return (
    <ErrorBound>
      <ColRightWrapper header="Thông tin cá nhân" links={breadcumLinks}>
        <WrapUserKyc>
          <div className="module">
            <div className="module-header">
              <div className="title">Xác minh danh tính (KYC)</div>
              {!statusAccount.kycCompleted && (
                <div className="desc">
                  Nhập vào các thông tin theo yêu cầu để hoàn tất xác thực
                </div>
              )}
            </div>
            {statusAccount.kycCompleted ? (
              <div className="module-content">
                <div className="kyc-completed">
                  <div className="image-container">
                    <img src={kycCompleted} alt=""/>
                  </div>
                  <div className="desc">
                    Bạn đã thực hiện xác minh danh tính thành công!
                  </div>
                </div>
              </div>
            ) : statusAccount.infoCompleted ? (
              <div className="module-content">
                <div className="kyc-completed">
                  <div className="image-container">
                    <img src={kycCompleted} alt=""/>
                  </div>
                  <div className="desc">
                    Bạn đã gửi thông tin, vui lòng chờ xác nhận từ người quản
                    trị!
                  </div>
                </div>
              </div>
            ) : (
              <form
                className="module-content"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={`step step1 ${step === 1 ? 'active' : ''}`}>
                  <div className="item">
                    <Input.Wrapper
                      label="Họ & tên trong CMND"
                      icon={<FaUser size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        name="name"
                        ref={register({ required: true })}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="item">
                    <Input.Wrapper
                      isLabelOnTop
                      //hasDropdown
                      label="Quốc gia"
                      icon={<BiWorld size={16} />}
                    >
                      <Input.Select
                        value={nation}
                        onChange={setNation}
                        options={optionsNation}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="item">
                    <Input.Wrapper
                      label="Địa chỉ"
                      icon={<FaRegMap size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        name="address"
                        ref={register({ required: true })}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="item">
                    <Input.Wrapper
                      label="Công việc"
                      icon={<MdWork size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        name="job"
                        ref={register({ required: true })}
                      />
                    </Input.Wrapper>
                  </div>
                </div>
                <div className={`step step2 ${step === 2 ? 'active' : ''}`}>
                  <div className="item item2">
                    <Input.Wrapper
                      isLabelOnTop
                      //hasDropdown
                      label="Loại giấy tờ"
                      icon={<AiFillFileText size={16} />}
                    >
                      <Input.Select
                        value={type}
                        onChange={setType}
                        options={optionsType}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="item item2">
                    <Input.Wrapper label="Số CMND" icon={<FaTh size={16} />}>
                      <Input.Text
                        placeholder=" "
                        name="idNumber"
                        ref={register({ required: true })}
                      />
                    </Input.Wrapper>
                  </div>
                </div>
                <div className={`step step3 ${step === 3 ? 'active' : ''}`}>
                  <div className="item item-images">
                    <div className="choose_img">
                      <div className="image-container">
                        <img src={imageSrc1 ? imageSrc1 : emtpyIdcard} alt="" />
                      </div>
                      <div className="button-upload">
                        <label>
                          <RiUpload2Line />
                          <input
                            type="file"
                            className="input-hide"
                            onChange={event =>
                              isFile(event, setImg1, setImagesSrc1)
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div className="desc">
                      Tải lên ảnh mặt trước CMND/CCCD/Hộ chiếu/GPLX
                    </div>
                  </div>
                  <div className="item item-images">
                    <div className="choose_img">
                      <div className="image-container">
                        <img src={imageSrc2 ? imageSrc2 : emtpyIdcard} alt="" />
                      </div>
                      <div className="button-upload">
                        <label>
                          <RiUpload2Line />
                          <input
                            type="file"
                            className="input-hide"
                            onChange={event =>
                              isFile(event, setImg2, setImagesSrc2)
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div className="desc">
                      Tải lên ảnh mặt sau CMND/CCCD/Hộ chiếu/GPLX
                    </div>
                  </div>
                  <div className="item item-images">
                    <div className="choose_img">
                      <div className="image-container">
                        <img src={imageSrc3 ? imageSrc3 : emtpyIdcard} alt="" />
                      </div>
                      <div className="button-upload">
                        <label>
                          <RiUpload2Line />
                          <input
                            type="file"
                            className="input-hide"
                            onChange={event =>
                              isFile(event, setImg3, setImagesSrc3)
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div className="desc">
                      Tải lên ảnh chụp CMND/CCCD/Hộ chiếu/GPLX bao gồm cả khuôn
                      mặt, tờ giấy ghi “BVote - ngày”
                    </div>
                  </div>
                </div>

                <div className="button-group">
                  {step !== 1 && (
                    <Button
                      background="white"
                      color="#718098"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                    >
                      Quay lại
                    </Button>
                  )}
                  {step !== 3 && (
                    <>
                      {(step === 1 &&
                        nameWatch &&
                        addressWatch &&
                        jobWatch &&
                        nation.value !== '') ||
                      (step === 2 && idNumberWatch && type.value !== '') ? (
                        <Button
                          className="next"
                          type="button"
                          onClick={() => {
                            setStep(step + 1);
                          }}
                        >
                          Tiếp theo
                        </Button>
                      ) : (
                        ''
                      )}
                    </>
                  )}
                  {step === 3 && (
                    <Button className="next" type="submit">
                      Xác nhận
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </WrapUserKyc>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(UserKyc);

