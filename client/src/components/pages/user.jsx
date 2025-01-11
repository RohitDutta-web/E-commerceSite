import NavBar from "../navBar";
import { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom";



import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import Footer from "../footer"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setUser,setIsLoggedin, setAddress } from "../../../features/auth/authSlice";







export default function User() {

  const { user,isLoggedin,address } = useSelector(store => store.user)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [form, setForm] = useState("login");
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    profile: "customer"
  })

  const [logInData, setLogInData] = useState({
    email: "",
    password: ""

  })
  const onChangeSignUp = (e) => {
    const { name, value } = e.target
    setSignUpFormData({
      ...signUpFormData,
      [name]: value,
    })
  }

  const onChangeLogIn = (e) => {
    const { name, value } = e.target
    setLogInData({
      ...logInData,
      [name]: value,
    })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/user/register", signUpFormData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setForm("login")
      }

      return
    } catch (e) {
      return toast.error(e.response.data.message);
    }

  }




  const handleLogIn = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", logInData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.user))
        dispatch(setIsLoggedin(true));
        
        
        return

      }
    } catch (e) {
      return toast.error(e.response.data.message);
    }

  }



  const getAddress = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/address/getAddress", {
        withCredentials: true,
      });
  
      if (res.data) {
        dispatch(setAddress(res.data));
        console.log(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    if (user) {
      getAddress();
    }
  }, [user]);


  return (
    <>
      <NavBar />
      {isLoggedin ?
        <div className="w-full max-w-screen flex flex-col items-center justify-center">
          <FaCircleUser className=" text-9xl bg-zinc-200 rounded-full text-zinc-300 " />
          <div className="shadow-[0_1px_6px_2px_rgba(0,0,0,0.35)] p-5 mt-5">


            <form action="" className="flex flex-col">
              <label htmlFor="" className="mt-2 mb-1">Name</label>
              <input type="text" value={user?.name} readOnly className="outline-none bg-zinc-200 p-2" />
              <label htmlFor="" className="mt-2 mb-1">Phone Number</label>
              <input type="text" value={user?.phoneNumber} readOnly className="outline-none bg-zinc-200 p-2" />
            </form>

            <Dialog>
              <DialogTrigger className=" outline ml-1 mt-3 text-white rounded hover:text-zinc-900 hover:bg-white   bg-zinc-900 p-2">Edit profile</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.

                    <form action="" className="flex flex-col mt-5 ">
                      <label htmlFor="">Name</label>
                      <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
                      " type="text" name="" id="" />
                      <label htmlFor="">Phone Number</label>
                      <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
                      " type="text" name="" id="" />
                      <label htmlFor="">Password</label>
                      <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
                      " type="password" name="" id="" />
                      <input type="submit" value=" save changes " className="outline  w-1/2 mt-3 rounded pt-2 pb-2 text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 cursor-pointer" />
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="max-w-screen w-full p-4 mt-10">
            <div className="w-full flex justify-between">
              <p className="text-xl font-bold">Address info</p>
              <Dialog>
                <DialogTrigger className=" outline  text-white rounded hover:text-zinc-900 hover:bg-white   bg-zinc-900 p-2">Register address info</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>register your address info here</DialogTitle>
                    <DialogDescription>
                      Make changes to your address here. Click save when you're done.

                      <form action="" className="flex flex-col mt-5 ">
                        <label htmlFor="">Street</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">Land mark</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">City</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="password" name="" id="" />
                        <label htmlFor="">District</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">State</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">Zip code</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="number" name="" id="" />
                        <label htmlFor="">Country</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <input type="submit" value=" save changes " className="outline  w-1/2 mt-3 rounded pt-2 pb-2 text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 cursor-pointer" />
                      </form>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className=" outline  text-white rounded hover:text-zinc-900 hover:bg-white   bg-zinc-900 p-2">Update address info</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update your address info here</DialogTitle>
                    <DialogDescription>
                      Make changes to your address here. Click save when you're done.

                      <form action="" className="flex flex-col mt-5 ">
                        <label htmlFor="">Street</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">Land mark</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">City</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="password" name="" id="" />
                        <label htmlFor="">District</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">State</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <label htmlFor="">Zip code</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="number" name="" id="" />
                        <label htmlFor="">Country</label>
                        <input className="p-2 w-4/5 mt-2 outline mb-2 rounded
  " type="text" name="" id="" />
                        <input type="submit" value=" save changes " className="outline  w-1/2 mt-3 rounded pt-2 pb-2 text-white bg-zinc-900 hover:bg-white hover:text-zinc-900 cursor-pointer" />
                      </form>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </div>
            <form action="" className="flex flex-col w-full ">
              <label htmlFor="" className="mt-2 mb-1">Street</label>
              <input type="text" value={address?.street || "please register address"} readOnly className="outline-none bg-zinc-100 p-2 " />
              <label htmlFor="" className="mt-2 mb-1">Land mark</label>
              <input type="text" value={address?.landMark || "please register address" } readOnly className="outline-none bg-zinc-100 p-2 " />
              <label htmlFor="" className="mt-2 mb-1">City</label>
              <input type="text" value={address?.city || "please register address" } readOnly className="outline-none bg-zinc-100 p-2 " />
              <label htmlFor="" className="mt-2 mb-1">District</label>
              <input type="text" value={address?.district || "please register address" } readOnly className="outline-none bg-zinc-100 p-2 " />
              <label htmlFor="" className="mt-2 mb-1">State</label>
              <input type="text" value={address?.state || "please register address" } readOnly className="outline-none bg-zinc-100 p-2 " />
              <label htmlFor="" className="mt-2 mb-1">Zip code</label>
              <input type={ address?.zipCode ? "number" : "text"} value={address?.zipCode || "please register address"} readOnly className="outline-none bg-zinc-100 p-2 " />
              <label htmlFor="" className="mt-2 mb-1">Country</label>
              <input type="text" value={address?.country || "please register address"} readOnly className="outline-none bg-zinc-100 p-2 " />
            </form>
          </div>

          <AlertDialog className="w-full max-w-screen ">
            <AlertDialogTrigger className="w-1/3 outline pt-2 pb-2 font-bold  text-xl hover:text-zinc-900 text-white hover:bg-white bg-zinc-900 rounded mt-20 mb-20">Log out</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>




        </div>





        :
        <div className="w-full max-w-screen h-auto mt-20 flex justify-center">
          {(form === "login") ? <div className=" w-1/2 shadow-[0_1px_6px_2px_rgba(0,0,0,0.35)] h-auto p-5 rounded-xl  ">
            <form action="" className="flex flex-col" onSubmit={handleLogIn}>
              <label htmlFor="email" className="font-bold mt-2 mb-2">Email</label>
              <input className="rounded outline-none p-2 bg-zinc-200 " type="Email" name="email" id="email" placeholder="Enter mail id" onChange={onChangeLogIn} />
              <label htmlFor="password" className="font-bold mt-2 mb-2">Password</label>
              <input className="rounded outline-none p-2 bg-zinc-200 " type="password" placeholder="Enter password" name="password" id="password" onChange={onChangeLogIn} />
              <input className="rounded  mt-4 outline  pt-2 pb-2 text-center font-bold hover:bg-zinc-900 hover:text-white   cursor-pointer" type="submit" value="login" />
            </form>
            <p className="text-xs mt-5 ">don&apos;t have an account ? <span className="cursor-pointer text-blue-600" onClick={() => setForm("signup")}>sign up here !</span></p>
          </div>

            :



            <div className=" w-1/2 shadow-[0_1px_6px_2px_rgba(0,0,0,0.35)] h-auto p-5 rounded-xl">
              <form action="" className="flex flex-col" onSubmit={handleSignUp}>
                <label htmlFor="name" className="font-bold mt-2 mb-2">Name</label>
                <input className="rounded outline-none p-2 bg-zinc-200 " type="text" name="name" id="name" placeholder="Enter Name" onChange={onChangeSignUp} />
                <label htmlFor="email" className="font-bold mt-2 mb-2">Email</label>
                <input className="rounded outline-none p-2 bg-zinc-200 " type="email" name="email" id="email" placeholder="Enter mail id" onChange={onChangeSignUp} />
                <label htmlFor="phoneNumber" className="font-bold mt-2 mb-2">Phone Number</label>
                <input className="rounded outline-none p-2 bg-zinc-200 " type="text" placeholder="Enter phone number" name="phoneNumber" id="phoneNumber" onChange={onChangeSignUp} />
                <label htmlFor="password" className="font-bold mt-2 mb-2">Password</label>
                <input className="rounded outline-none p-2 bg-zinc-200 " type="password" placeholder="Enter password" name="password" id="password" onChange={onChangeSignUp} />
                <label htmlFor="profile" className="font-bold mt-2 mb-2" >Profile</label>
                <input className="rounded outline-none p-2 bg-zinc-200 " type="text" value={signUpFormData.profile} readOnly name="profile" id="profile" />
                <input className="rounded  mt-4 outline  pt-2 pb-2 text-center font-bold hover:bg-zinc-900 hover:text-white   cursor-pointer" type="submit" value="signup" />
              </form>
              <p className="text-xs mt-5 ">already have an account ? <span className="cursor-pointer text-blue-600" onClick={() => setForm("login")}>log in here !</span></p>
            </div>}
        </div>}

      <Footer />





    </>
  )
}
