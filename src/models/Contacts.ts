class Contact {
  name: string;
  avatarImg: string;
  id: number;
  favorite: number;

  constructor(name: string, avatarImg: string, id: number, favorite: number) {
    this.name = name;
    this.avatarImg = avatarImg;
    this.id = id;
    this.favorite = favorite;
  }
}

export default Contact;
