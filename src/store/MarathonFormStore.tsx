import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confpassword: "",
  total: 500,
  coupon: "",
  havecoupon: false,
  correct: "",

  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  setPassword:(_password) =>
    set(() => ({
      password: _password,
    })),
  setconfpassword:(_confpassword) =>
    set(() => ({
      confpassword : _confpassword,
    })),
  setCoupon: (_coupon) =>
    set(() => ({
      coupon : _coupon,
    })),
  sethaveCoupon: (_havecoupon) =>
      set(() => ({
        havecoupon : !_havecoupon,
      })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: (type: string , correct = "", have: boolean) => {
    let val = 500;
    switch (type) {
      case "funrun":
        val = 500;
        break;
    case "mini":
        val = 800;
        break;
    case "half":
        val = 1200;
        break;
    case "full":
        val = 1500;
        break;
      default:
        val = 500;
        break;
    }
    if(correct == "CMU2025" && have){
      val = val * 7 / 10
    }
    set(() => ({
    total: val
    }))},

  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password: "",
      confpassword: "",
      total: 500,
      coupon: "",
      havecoupon: false,
      correct: "",
    }),
}));