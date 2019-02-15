
export interface IUsers {
  gender?: string;
  name?: IName;
  location: Location;
  email: string;
  login: ILogin;
  dob: {
    date: number,
    age: number
 };
 registered: {
  date: string,
  age: number
};
phone: number;
cell: number;
id: {
    name: string,
    value: number
};
picture: {
  large: string,
  medium: string,
  thumbnail: string
};
nat: string;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface ILocation {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: {
     latitude: number;
     longitude: number;
  };
  timezone: {
     offset: number;
     description: string;
  };
}

export interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: number;
  md5: number;
  sha1: number;
  sha256: number;
}

export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
