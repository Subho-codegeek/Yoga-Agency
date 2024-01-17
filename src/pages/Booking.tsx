import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  Name: string;
  PhoneNumber: string;
  Email?: string;
  SelectedInstructor: string | null;
}

const instructorDetails = [
  {
    type: "General",
    details: [
      {
        name: "John Doe",
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        time: ['6:00-8:00pm', '8:00-10:00am', '4:00-6:00pm', '10:00-12:00pm', '2:00-4:00pm'],
      },
      {
        name: "Jane Doe",
        days: ['Monday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'],
        time: ['6:00-8:00pm', '10:00-12:00pm', '2:00-4:00pm'],
      },
      {
        name: "John Smith",
        days: ['Saturday', 'Sunday'],
        time: ['6:00-8:00pm', '8:00-10:00am',],
      },
      {
        name: "Jane Smith",
        days: ['Monday', 'Wednesday', 'Friday'],
        time: ['4:00-6:00pm', '10:00-12:00pm', '2:00-4:00pm'],
      }
    ]
  },
  {
    type: "Type1",
    details: [
      {
        name: "abc",
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        time: ['6:00-8:00pm', '8:00-10:00am', '4:00-6:00pm', '10:00-12:00pm', '2:00-4:00pm'],
      },
      {
        name: "def",
        days: ['Monday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'],
        time: ['6:00-8:00pm', '10:00-12:00pm', '2:00-4:00pm'],
      },
    ]
  },
  {
    type: "Type2",
    details: [
      {
        name: "ghi",
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        time: ['6:00-8:00pm', '8:00-10:00am', '4:00-6:00pm', '10:00-12:00pm', '2:00-4:00pm'],
      },
      {
        name: "jkl",
        days: ['Monday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'],
        time: ['6:00-8:00pm', '10:00-12:00pm', '2:00-4:00pm'],
      }
    ]
  },
];

const Booking = () => {

  const [_selectedInstructor, setselectedInstructor] = useState<string | null>("Nothing selected");

  const [formData, setFormData] = useState<FormData>({
    Name: '',
    PhoneNumber: '',
    Email: '',
    SelectedInstructor: '',
  });

  const handleInstructorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(selectedInstructor);
    const selectedInstructorName = e.target.value;
    setselectedInstructor(selectedInstructorName);

    setFormData({
      ...formData,
      SelectedInstructor: selectedInstructorName,
    });
  }

  {/* INSTRCTOR DETAILS LOGIC*/ }
  // const getInstructorDetails = () => {
  //   if (!selectedInstructor) {
  //     return null;
  //   }

  //   for (const group of instructorDetails) {
  //     for (const instructor of group.details) {
  //       if (instructor.name === selectedInstructor) {
  //         return instructor;
  //       }
  //     }
  //   }
  //   return null;
  // };
  // const selectedInstructorDetails = getInstructorDetails();

  {/* FORM HANDLE LOGIC */ }
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    const formElement = document.querySelector('form');
    if (formElement !== null) {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      const form_Data = new FormData(formElement);
      if (formData.SelectedInstructor !== null) {
        form_Data.append("SelectedInstructor", formData.SelectedInstructor);
      }
      console.log(formData.SelectedInstructor);
      fetch("https://script.google.com/macros/s/AKfycbw6ujo2PukYS8OzQaFHS4riduhKFL8E2OnYkcuc89pxVzSMvNbskyXlO8MQmWnl_A2n/exec", {
        method: "POST",
        body: form_Data
      })
        .then((_response) => {
          // console.log("Success!", response);
          alert("Form submitted successfully!");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error!", error.message);
          alert("Error! Please try again.");
        });
    }
    else {
      console.error('Form element not found');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h2>Available Instructors</h2>
      <div className="dropdown">
        <select defaultValue="default" onChange={handleInstructorChange}>
          <option value="default" disabled hidden>Select your instructor</option>
          {instructorDetails.map((group) => (
            <optgroup key={group.type} label={group.type}>
              {group.details.map((instructor) => (
                <option key={instructor.name} value={instructor.name}>
                  {instructor.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        {/* {selectedInstructorDetails && (
          <div>
            <h3>{selectedInstructorDetails.name}'s Availability:</h3>
            <ul>
              {selectedInstructorDetails.days.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
            <ul>
              {selectedInstructorDetails.time.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
      <div className="flex flex-col justify-center items-center w-screen">
        <form className="form flex flex-col justify-center gap-5" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="Name"
              placeholder="Enter your full name"
              value={formData.Name}
              onChange={handleChange}
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </label>
          

          <label>
            Phone Number:
            <input
              type="tel"
              name="PhoneNumber"
              placeholder="Enter your phone number"
              value={formData.PhoneNumber}
              onChange={handleChange}
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </label>
          

          <label>
            Email (Optional):
            <input
              type="email"
              name="Email"
              placeholder="yourname@example.com"
              value={formData.Email}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </label>
          

          <p className="text-center"><button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded" type="submit">Submit</button></p>
        </form>
      </div>
    </div>
  );
};

export default Booking;