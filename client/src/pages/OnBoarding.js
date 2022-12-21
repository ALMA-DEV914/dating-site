import { useState } from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {
   const [formData, setFormData] = useState({
    user_id:'',
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: '',
    gender_identity: 'man',
    gender_interest: 'woman',
    email: '',
    url: '',
    about: '',
    matches: []
   });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const hanldeChange = (e) => {
    console.log("e", e);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.trget.value;
    const name = e.target.name;

    setFormData((previousState) => ({
        ...previousState,
        [name] : value
    }))
    
  };

  console.log(formData)

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={hanldeChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="Date"
                required={true}
                value={formData.dob_day}
                onChange={hanldeChange}
              />
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="Month"
                required={true}
                value={formData.dob_month}
                onChange={hanldeChange}
              />

              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="Year"
                required={true}
                value={formData.dob_year}
                onChange={hanldeChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-identity"
                name="gender_identity"
                checked={false}
                required={true}
                value="man"
                onChange={hanldeChange}
              />
              <label htmlFor="man-gender-identity">Man</label>

              <input
                type="radio"
                id="woman-gender-identity"
                name="gender_identity"
                checked={false}
                required={true}
                value="woman"
                onChange={hanldeChange}
              />
              <label htmlFor="woman-gender-identity">Woman</label>

              <input
                type="radio"
                id="more-gender-interest"
                name="gender_interest"
                checked={false}
                required={true}
                value="more"
                onChange={hanldeChange}
              />
              <label htmlFor="more-gender-interest">More</label>
            </div>

            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show-gender"
              name="show_gender"
              checked={false}
              required={true}
              onChange={hanldeChange}
            />

            <label>Show me</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-interest"
                name="gender_interest"
                checked={false}
                required={true}
                value="man"
                onChange={hanldeChange}
              />
              <label htmlFor="man-gender-interest">Man</label>

              <input
                type="radio"
                id="woman-gender-interest"
                name="gender_interest"
                checked={false}
                required={true}
                value="woman"
                onChange={hanldeChange}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                type="radio"
                id="more-gender-interest"
                name="gender_interest"
                checked={false}
                required={true}
                value="everyone"
                onChange={hanldeChange}
              />
              <label htmlFor="more-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              type="text"
              id="about"
              name="about"
              required={true}
              placeholder="I like hiking and climbing...."
              value={formData.about}
              onChange={hanldeChange}
            />
             <input type="submit" placeholder="Submit"/>
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              required={true}
              onChange={hanldeChange}
            />
            <div className="profile-photo">
                <img src={formData.url} alt="profile-pic"/>
            </div>
          </section>
         
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
