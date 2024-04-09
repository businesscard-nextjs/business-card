"use client";
import { useRecoilState } from "recoil";
import { rc_logoFile } from "@/src/components/make/left/leftAtom";
import { InboxOutlined } from "@ant-design/icons";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import InputCard from "./InputCard";

const ALLOW_FILE_EXTENSION = "jpg, jpeg, png";
const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export default function LogoNav() {
  const [logoImageFile, setLogoImageFile] = useRecoilState<File | undefined>(
    rc_logoFile,
  );

  // drag&drop 이미지 파일
  const { Dragger } = Upload;

  // 파일 유효성 검사
  const fileUploadValidHandler = (file: any) => {
    if (file === undefined) {
      return;
    }
    // 파일 확장자 체크
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/jpg" &&
      file.type !== "image/png"
    ) {
      message.error(`You can only upload ${ALLOW_FILE_EXTENSION} file!`);
      return;
    }
    // 파일 용량 체크
    if (file.size > FILE_SIZE_MAX_LIMIT) {
      message.error("You can upload under 5MB");
      return;
    }
    setLogoImageFile(file);
  };

  // drag&drop 기능
  const props: UploadProps = {
    name: "file",
    accept: "image/png, image/jpeg, image/jpg",
    multiple: false,
    beforeUpload(file) {
      fileUploadValidHandler(file);
      message.success(`${file.name} file uploaded successfully.`);
      return false;
    },
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    onRemove(e: any) {
      if (e) {
        console.log("222", e);
        setLogoImageFile(undefined);
      }
    },
  };

  return (
    <div className="flex flex-col gap-40">
      {/* 이미지 */}
      <div className="flex flex-col gap-24">
        <div className="text-20 text-main3">Image</div>
        <ImgCrop rotationSlider>
          <Dragger {...props} multiple={false} maxCount={1}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Only png, jpg can be uploaded, and the size does not exceed 500MB.
            </p>
          </Dragger>
        </ImgCrop>
      </div>

      {/* 회사명 - 추가기능 */}
      {/* <div className="flex flex-col gap-24">
        <InputCard
          element={{ label: "Company name", text: "", color: "#000" }}
        />
      </div> */}
    </div>
  );
}
