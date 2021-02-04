import React from "react";
import usePersistedState from "./hooks/usePersistedState";
import { PrimaryButton, TextField, DatePicker } from "office-ui-fabric-react";
import { createOutOfOfficeEvents } from "./api";

export default function Form() {
  let [flowUrl, setFlowUrl] = usePersistedState("", "flow-url");
  let [start, setStart] = React.useState();
  let [end, setEnd] = React.useState();

  let isValid = start && end && flowUrl;
  const handleSubmit = async e => {
    e.preventDefault();
    console.log({ flowUrl, start, end });
    await createOutOfOfficeEvents({ flowUrl, start, end });
    alert("Success!");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
      <div className="form-control">
        <DatePicker value={start} label="Start Date" onSelectDate={setStart} />
      </div>

      <div className="form-control">
        <DatePicker value={end} label="End Date" onSelectDate={setEnd} />
      </div>

      <div className="form-control">
        <TextField
          required
          multiline
          value={flowUrl}
          label="Flow Url"
          onChange={(e, val) => setFlowUrl(val)}
        />
      </div>

      <div className="actions" style={{ marginTop: "20px" }}>
        <PrimaryButton
          disabled={!isValid}
          style={{ width: "200px" }}
          type="submit"
        >
          Save
        </PrimaryButton>
      </div>
    </form>
  );
}
