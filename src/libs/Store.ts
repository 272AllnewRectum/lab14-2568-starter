import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  total:number;
  confpassword:string;
  coupon: string;
  havecoupon:boolean;
  correct:string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  setconfpassword: (v: string) => void;
  setCoupon: (v:string) => void;
  sethaveCoupon:(v:boolean) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon:  (v:string , c:string, have: boolean) => void;
  reset: () => void;
}
export type { MarathonFormState }