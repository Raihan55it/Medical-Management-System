import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import type { PatientFormErrors } from "../../types/formError";
import { UIContext } from "../../context/UIContext";

const PatientForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<PatientFormErrors>({
    name: "",
    age: "",
    gender: "",
    bloodType: "",
    phone: "",
    address: "",
    email: "",
  });

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const uiContext = useContext(UIContext);
  if (!uiContext) return null;
  const { addPatient, updatePatient } = appContext;
  const { editingPatient, setEditingPatient } = uiContext;
  useEffect(() => {
    if (!editingPatient) return;
    setName(editingPatient.name);
    setAge(String(editingPatient.age));
    setGender(editingPatient.gender);
    setBloodType(editingPatient.bloodType);
    setPhone(editingPatient.phone);
    setEmail(editingPatient.email);
    setAddress(editingPatient.address);
  }, [editingPatient]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: PatientFormErrors = {
      name: "",
      age: "",
      gender: "",
      bloodType: "",
      phone: "",
      address: "",
      email: "",
    };
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!age.trim()) {
      newErrors.age = "Age is required.";
    } else if (Number(age) < 1 || Number(age) > 120) {
      newErrors.age = "Age must be between 1 and 120.";
    }
    if (!gender.trim()) {
      newErrors.gender = "Gender is required.";
    }
    if (!bloodType.trim()) {
      newErrors.bloodType = "Blood type is required.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^01[3-9]\d{8}$/.test(phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!address.trim()) {
      newErrors.address = "Address is required.";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address.";
    }
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((value) => value !== "");
    if (hasErrors) return;

    const patient = {
      id: editingPatient ? editingPatient.id : crypto.randomUUID(),
      name,
      age: Number(age),
      gender: gender as "male" | "female" | "other",
      phone,
      email,
      bloodType: bloodType as
        | "A+"
        | "A-"
        | "B+"
        | "B-"
        | "AB+"
        | "AB-"
        | "O+"
        | "O-",
      address,
      createdAt: editingPatient
        ? editingPatient.createdAt
        : new Date().toISOString(),
    };
    // reset form
    if (editingPatient) {
      updatePatient(patient);
      setEditingPatient(null);
    } else {
      addPatient(patient);
    }
    setName("");
    setAge("");
    setGender("");
    setBloodType("");
    setPhone("");
    setEmail("");
    setAddress("");
    setErrors({
      name: "",
      age: "",
      gender: "",
      bloodType: "",
      phone: "",
      address: "",
      email: "",
    });
  };
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4 text-xl font-semibold dark:text-white">
          {editingPatient ? "Update Patient" : "Add Patient"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium dark:text-white">
              Patient Name
            </label>
            <input
              type="text"
              placeholder="Enter patient name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium dark:text-white">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-500">{errors.age}</p>
            )}
          </div>
          {/* gender */}
          <div>
            <label className="mb-2 block text-sm font-medium dark:text-white">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
            )}
          </div>
          {/* blood group */}
          <div>
            <label className="mb-2 block text-sm font-medium dark:text-white">
              Blood Group
            </label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {errors.bloodType && (
              <p className="mt-1 text-sm text-red-500">{errors.bloodType}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium dark:text-white">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium dark:text-white">
              Address
            </label>
            <textarea
              rows={3}
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:text-white"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {editingPatient ? "Update Patient" : "Add Patient"}
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
