"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bounce, Slide } from "react-awesome-reveal";
import register_img from "@/public/assets/images/register_img.png";
import girl_walk from "@/public/assets/images/girl_walk.png";
import guy_walk from "@/public/assets/images/guy_walk.png";
import Success from "@/components/modals/Success";
import { useState, useEffect, FormEvent } from "react";

interface ICategories {
  id: number;
  name: string;
}

interface IForm {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
}

export default function Home() {
  const [form, setForm] = useState<IForm>({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 0,
    project_topic: "",
    category: 0,
    privacy_poclicy_accepted: false,
  });
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState<ICategories[]>();
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_baseUrl}/hackathon/categories-list`
      );
      const data = await response.json();

      setCategories(data);
    };

    fetchCategories();
  });

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_baseUrl}/hackathon/registration`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            phone_number: form.phone_number,
            team_name: form.team_name,
            group_size: form.group_size,
            project_topic: form.project_topic,
            category: form.category,
            privacy_poclicy_accepted: form.privacy_poclicy_accepted,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        console.log(response);
      } else {
        alert("Server Unavailable, Please try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="back-btn" onClick={() => router.back()}>
        <div className="back-btn-wrapper">
          <div className="back-btn-wrapper-inner">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        </div>
      </div>
      <div className="register-inner">
        <div className="register-title mobile-title">
          <h1 className="register-title-heading">Register</h1>
        </div>
        <div className="register-image">
          <Slide>
            <Image src={register_img} alt="register img" />
          </Slide>
        </div>

        <div className="register-form">
          <Bounce>
            <div className="register-form-wrapper">
              <form onSubmit={handleSubmit} className="form">
                <div className="register-form-title">
                  <h1 className="register-title desktop-title">
                    <div className="register-title-heading">Register</div>
                  </h1>

                  <div className="register-form-title-movement">
                    <p>Be part of this movement!</p>
                    <div className="movement">
                      <div className="movement-wrapper">
                        <Image src={girl_walk} alt="girl walking" />
                        <Image src={guy_walk} alt="guy walking" />
                      </div>
                    </div>
                  </div>

                  <h1 className="register-form-semi-title">
                    CREATE YOUR ACCOUNT
                  </h1>
                </div>
                <div className="form-inputs">
                  <div className="form-group">
                    <label htmlFor="">Team's Name</label>
                    <input
                      type="text"
                      placeholder="Enter the name of your group"
                      name="team_name"
                      value={form.team_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone_number"
                      value={form.phone_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Project Topic</label>
                    <input
                      type="text"
                      placeholder="What is your group project topic"
                      name="project_topic"
                      value={form.project_topic}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Category</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      required
                    >
                      {categories?.map((category, index): any => {
                        return (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Group Size</label>
                    <select
                      name="group_size"
                      value={form.group_size}
                      onChange={handleChange}
                      required
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>

                <div className="terms">
                  <p className="warning">
                    Please review your registration details before submitting
                  </p>

                  <div className="condition">
                    <input
                      type="checkbox"
                      name="privacy_poclicy_accepted"
                      checked={form.privacy_poclicy_accepted}
                      onChange={handleChange}
                      required
                    />
                    <p>
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>
                </div>

                <div className="register-form-button">
                  <button className="btn-primary">
                    <div className="btn-primary-inner">Submit</div>
                  </button>
                </div>
              </form>
            </div>
          </Bounce>
        </div>
      </div>

      {success && (
        <Success
          message={"You have Succesfully registered"}
          sub_message={"Check your mail box for the next step"}
        />
      )}
    </div>
  );
}
