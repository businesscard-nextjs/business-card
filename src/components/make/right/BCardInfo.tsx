"use client";

interface PropsType {
  info: {
    label: string;
    text: string;
    color: string;
    placeholder: string;
    header: string;
  };
}

const BCardInfo = ({ info }: PropsType) => {
  return (
    <>
      {info?.label !== "Name" &&
      info?.label !== "Position" &&
      info?.label !== "Logo" ? (
        <div
          className="text-14"
          style={{
            color: info?.text?.length ? info?.color : "#CBCBCB",
          }}
        >
          {info?.text?.length
            ? `${info.header} ${info.text}`
            : `${info.header} ${info.placeholder}`}
        </div>
      ) : null}
    </>
  );
};

export default BCardInfo;
