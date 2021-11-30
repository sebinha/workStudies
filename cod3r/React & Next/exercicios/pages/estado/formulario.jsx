import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState(undefined);

  return (
    <div>
        <p>{form}</p>
      <input type="text" onChange={(e) => setForm(e.target.value)} />
    </div>
  );
}
