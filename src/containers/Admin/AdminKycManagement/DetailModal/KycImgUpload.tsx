import { SKycUpload } from '../style';
import imgUploadPlaceholderSrc from 'assets/images/layout/img-upload-placeholder.png';
// import { FaUpload } from 'react-icons/fa';
import { imgUrl } from 'configs';

interface Props {
  title: string;
  value: string;
}

export default function KycImgUpload({ title, value }: Props) {

  return (
    <SKycUpload>
      <div className="upload-container">
        {/* <input type="file" accept="images/png, images/jpeg" /> */}
        {value ? (
          <img
            src={imgUrl(value)}
            className="img-uploaded"
            alt='kyc'
          />
        ) : (
          <img
            src={imgUploadPlaceholderSrc}
            width={132}
            height={37}
            className="img-placeholder"
            alt="kyc"
          />
        )}
        {/* <div className="icon">
          <FaUpload size={12} color="white" />
        </div> */}

      </div>
      <p className="upload-title">{title}</p>
    </SKycUpload>
  );
}
