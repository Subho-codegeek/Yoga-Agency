import { SetStateAction, useState } from "react";

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

  const [selectedInstructor, setselectedInstructor] = useState<string | null>("Nothing selected");

  const handleInstructorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedInstructor(e.target.value);
  }

  const getInstructorDetails = () => {
    if (!selectedInstructor) {
      return null;
    }

    for (const group of instructorDetails) {
      for (const instructor of group.details) {
        if (instructor.name === selectedInstructor) {
          return instructor;
        }
      }
    }

    return null;
  };

  const selectedInstructorDetails = getInstructorDetails();

  return (
    <div>
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

        {selectedInstructorDetails && (
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
        )}
      </div>
    </div>
  );
};

export default Booking;