class Contact {
  name: string;
  phone: string;
  email: string;
  avatarImg: string;
  id: number;
  favorite: number;

  constructor(
    name: string,
    phone: string,
    email: string,
    avatarImg: string,
    id: number,
    favorite: number
  ) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.avatarImg = avatarImg;
    this.id = id;
    this.favorite = favorite;
  }
}

export default Contact;
