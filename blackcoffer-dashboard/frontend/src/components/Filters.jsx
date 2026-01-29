import { useState } from "react";

export default function Filters({ data, onChange }) {
  const [form, setForm] = useState({
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    country: "",
  });

  const unique = (key) =>
    [...new Set(data.map((d) => d[key]).filter(Boolean))];

  const options = {
    topic: unique("topic"),
    sector: unique("sector"),
    region: unique("region"),
    pestle: unique("pestle"),
    country: unique("country"),
  };

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    onChange(updated);
  };

  return (
    <div className="filters">
      {Object.keys(form).map((key) => (
        <div key={key}>
          <input
            name={key}
            placeholder={key.toUpperCase()}
            list={`${key}-list`}
            value={form[key]}
            onChange={handleChange}
          />
          <datalist id={`${key}-list`}>
            {options[key].map((v, i) => (
              <option key={i} value={v} />
            ))}
          </datalist>
        </div>
      ))}
    </div>
  );
}
