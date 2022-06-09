export default interface Member {
  _id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  inventory: string[];
  certifications: string[];
  address: string;
  type: string;
  group: string;
  decorations: string[];
  qualifications: string[];
}
