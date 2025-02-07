import { useRef } from 'react';
import { HiddenInput } from '../../styles';
import { Picture } from '../Contact/styles';

type AvatarUploadProps = {
  avatarImg: string;
  onAvatarChange?: (ImageUrl: string) => void;
};

const AvatarUpload = ({ avatarImg, onAvatarChange }: AvatarUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const imageClick = () => {
    inputRef.current?.click();
  };

  const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);

      if (onAvatarChange) {
        onAvatarChange(newImage);
      }
    }
  };
  return (
    <>
      <Picture src={avatarImg} alt="Avatar" onClick={imageClick} />
      <HiddenInput type="file" ref={inputRef} onChange={changeImage} />
    </>
  );
};

export default AvatarUpload;
