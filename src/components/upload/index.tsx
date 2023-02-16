import { FC } from "react";
import { postUpload, postAccountLogin } from "@/api";

const Upload: FC = () => {
  const handleChange = (v: React.ChangeEvent<HTMLInputElement>) => {
    if (!v.target.files || v.target.files?.length < 0) {
      return;
    }

    const form = new FormData();

    form.append("name", v.target.files[0], v.target.files[0].name);

    postUpload(form, { headers: { ["Content-Type"]: "multipart/form-data" } });
  };

  return <input type="file" onChange={(v) => handleChange(v)} />;
};

export default Upload;
