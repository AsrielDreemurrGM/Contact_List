class Contact {
  name: string;
  phone: string;
  avatarImg: string;
  id: number;
  favorite: number;

  constructor(
    name: string,
    phone: string,
    avatarImg: string,
    id: number,
    favorite: number
  ) {
    this.name = name;
    this.avatarImg = avatarImg;
    this.id = id;
    this.favorite = favorite;
    this.phone = phone;
  }
}

export default Contact;
