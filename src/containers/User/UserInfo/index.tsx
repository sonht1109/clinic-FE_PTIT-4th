import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SUserInfo, SUserInfoBound } from './style';
import demoAvatar from '../../../assets/images/demoAvatar.png';
import { RiUpload2Line } from 'react-icons/ri';
import Button from 'components/Button';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import ErrorBound from 'components/ErrorBound';
import Input from 'components/Input';
import {
  FaUser,
  FaCalendar,
  FaPhoneAlt,
  FaFacebookSquare,
} from 'react-icons/fa';
import { ILink } from 'components/Breadcum';
import { AiFillMail } from 'react-icons/ai';
import { BiBuildings, BiMapAlt } from 'react-icons/bi';
import { MdGTranslate } from 'react-icons/md';
import useInjectReducer from 'redux/useInjectReducer';
import reducersUserInformations from './store/reducers';
// import axios, { AxiosRequestConfig } from 'axios';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { Alert } from 'components/Alert';
// import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getInformations } from './store/actions';
import { userInformations } from './store/selecters';

const breadcumLinks: ILink[] = [
  {
    name: 'Trang chủ',
  },
  {
    name: 'Quản lý thông tin',
  },
  {
    name: 'Thông tin cá nhân',
  },
];

// registerLocale("vi", vi);
// registerLocale("en", en);

type Inputs = {
  name: string;
  company: string;
  address: string;
  email: string;
  facebook: string;
  emailRestore?: string;
  phoneRestore?: string;
};

const genderOtions = [
  {
    value: 'none',
    label: 'Không',
  },
  {
    value: 'male',
    label: 'Nam',
  },
  {
    value: 'female',
    label: 'Nữ',
  },
  {
    value: 'other',
    label: 'Khác',
  },
];

const languageOptions = [
  {
    value: 'vi',
    label: 'vi',
  },
  {
    value: 'en',
    label: 'en',
  },
];

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
// function dataURLtoFile(dataurl: any, filename: any) {
//   var arr = dataurl.split(','),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new File([u8arr], filename + '.' + mime.slice(mime.indexOf('/') + 1), {
//     type: mime,
//   });
// }
// const getImage = (
//   url: string,
//   setFileFn: any,
//   setImageFn: any,
//   name: string,
// ) => {
//   const config: AxiosRequestConfig = {
//     method: 'get',
//     url: url,
//     responseType: 'blob',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//   };
//   return axios(config).then(function (response: any) {
//     var reader = new FileReader();
//     reader.readAsDataURL(response.data);
//     reader.onloadend = function () {
//       var file: File = dataURLtoFile(reader.result, name);
//       setFileFn(file);
//       setImageFn(reader.result);
//     };
//   });
// };

export default function UserInfo() {
  // useInjectReducer
  useInjectReducer('UserInformations', reducersUserInformations);
  // end useInjectReducer

  // const intl = useIntl();
  const dispatch = useDispatch();
  const { info } = useSelector(userInformations);
  const [birthday, setBirthday] = useState(new Date());
  const [avatar, setAvatar] = useState<any>('');
  const [avatarImageSrc, setAvatarImagesSrc] = useState<any>('');
  const [gender, setGender] = useState<any>(genderOtions[0]);
  const [language, setLanguage] = useState<any>(languageOptions[0]);
  const { register, handleSubmit } = useForm<Inputs>();
  useEffect(() => {
    if (info.gender) {
      setGender(genderOtions.filter(item => item.value === info.gender)[0]);
    }
    if (info.language) {
      setLanguage(
        languageOptions.filter(item => item.value === info.language)[0],
      );
    }
    if (info.birthday) {
      setBirthday(new Date(info.birthday));
    }
    if (info.avatar) {
      let url = process.env.REACT_APP_API;
      let urlConfig = url?.replace('/api', '');
      // getImage(
      //   `${urlConfig}/${info.avatar}`,
      //   setAvatar,
      //   setAvatarImagesSrc,
      //   info.avatar.split('/').pop(),
      // );
      setAvatarImagesSrc(`${urlConfig}${info.avatar}`);
    }
  }, [info]);

  const onSubmit = (value: Inputs) => {
    const {
      name,
      company,
      address,
      email,
      facebook,
      // emailRestore,
      // phoneRestore,
    } = value;
    let formData = new FormData();
    // formData.append("type", UserTypeEnum.USER);
    formData.append('name', name);
    formData.append('company', company);
    formData.append('address', address);
    formData.append('email', email);
    formData.append('birthday', birthday.toISOString());
    formData.append('facebook', facebook);
    formData.append('avatar', avatar);
    formData.append('language', language.value);
    formData.append('gender', gender.value);

    requestToken({
      method: 'PUT',
      url: API_URL.USER.USER_INFO,
      data: formData,
    })
      .then(res => {
        console.log(res)
        localStorage.setItem('infor', JSON.stringify(res.data));
        dispatch(getInformations());
        Alert({ name: 'Update thông tin thành công', icon: 'success' });
      })
      .catch(err => {
        Alert({
          name: err.message,
          icon: 'error',
        });
      });
  };

  const readURL = (input: any) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (event: any) {
        setAvatarImagesSrc(event.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const isFile = (event: any) => {
    if (Validate(event)) {
      var files = event.target.files[0];
      readURL(event.target);
      setAvatar(files);
      Alert({ name: 'Chọn ảnh thành công', icon: 'success' });
    } else {
      Alert({
        name: 'Phải là file ảnh (jpg, jpeg, .gif, .png, .bmp)',
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    dispatch(getInformations());
  }, [dispatch]);

  return (
    <ErrorBound>
      <ColRightWrapper header="Thông tin cá nhân" links={breadcumLinks}>
        <SUserInfo>
          <SUserInfoBound>
            <div className="header">Thông tin cá nhân</div>
            <div className="content">
              <div className="title">
                Hồ sơ
                <div className="desc">
                  Một số thông tin có thể hiển thị cho những người dùng khác
                  đang sử dụng dịch vụ của Bvote khi bạn khởi tạo sự kiện
                </div>
              </div>
              <div className="form">
                {/* <Row>
                  <Col sm={3}> */}
                <div className="avatar-upload_container">
                  <div className="avatar-upload">
                    <div className="avatar-container">
                      <img
                        src={avatarImageSrc ? avatarImageSrc : demoAvatar}
                        alt=""
                      />
                    </div>
                    <div className="button-upload">
                      <label>
                        <RiUpload2Line />
                        <input
                          type="file"
                          onChange={event => isFile(event)}
                          className="input-hide"
                        />
                      </label>
                    </div>
                    <div className="desc">Ảnh hồ sơ</div>
                  </div>
                </div>

                <div className="handle">
                  <div className="handle-item">
                    <Input.Wrapper
                      label="Họ và tên"
                      icon={<FaUser size={16} />}
                    >
                      <Input.Text
                        name="name"
                        ref={register}
                        placeholder=" "
                        defaultValue={info.name ? info.name : ''}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="handle-item">
                    <Input.Wrapper
                      label="Date"
                      icon={<FaCalendar size={16} />}
                      isLabelOnTop 
                    >
                      <Input.Date
                        placeholder=" "
                        value={birthday}
                        onDayChange={(date: Date) => {
                          setBirthday(date);
                          console.log(date);
                        }}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="handle-item">
                    <Input.Wrapper
                    isLabelOnTop
                      label="Giới tính"
                      icon={<FaUser size={16} />}
                    >
                      <Input.Select 
                        name="gender"
                        value={gender}
                        onChange={setGender}
                        options={genderOtions}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="handle-item">
                    <Input.Wrapper
                      label="Email"
                      icon={<AiFillMail size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        name="email"
                        ref={register}
                        defaultValue={info.email ? info.email : ''}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="handle-item">
                    <Input.Wrapper
                      label="Số điện thoại"
                      icon={<FaPhoneAlt size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        ref={register}
                        defaultValue={info.phone ? info.phone : undefined}
                      />
                    </Input.Wrapper>
                  </div>

                  <div className="handle-item">
                    <Input.Wrapper
                      label="Facebook"
                      icon={<FaFacebookSquare size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        name="facebook"
                        ref={register}
                        defaultValue={info.facebook ? info.facebook : ''}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="handle-item handle-address">
                    <Input.Wrapper
                      label="Địa chỉ"
                      icon={<BiMapAlt size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        name="address"
                        ref={register}
                        defaultValue={info.address ? info.address : ''}
                      />
                    </Input.Wrapper>
                  </div>
                  <div className="handle-item">
                    <Input.Wrapper
                      label="Công ty"
                      icon={<BiBuildings size={16} />}
                    >
                      <Input.Text
                        placeholder=" "
                        name="company"
                        ref={register}
                        defaultValue={info.company ? info.company : ''}
                      />
                    </Input.Wrapper>
                  </div>

                  <div className="handle-item">
                    <Input.Wrapper
                      label="Ngôn ngữ"
                      isLabelOnTop
                      icon={<MdGTranslate size={16} />}
                    >
                      <Input.Select
                        placeholder=" "
                        value={language}
                        onChange={setLanguage}
                        options={languageOptions}
                      />
                    </Input.Wrapper>
                  </div>

                  <div className="button-group">
                    <div
                      className="button-wrapper"
                      style={{ marginRight: '16px' }}
                    >
                      <Button background="white" color="#718098">
                        Hủy bỏ
                      </Button>
                    </div>
                    <div className="button-wrapper">
                      <Button onClick={handleSubmit(onSubmit)}>Cập nhật</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SUserInfoBound>
        </SUserInfo>
      </ColRightWrapper>
    </ErrorBound>
  );
}
