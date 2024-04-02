import DisplayMessage from "./DisplayMessage/DisplayMessage";

const SecretMessage = () => {
  return (
    <div className="space-y-2 max-w-[315px] sm:max-w-[450px] lg:max-w-[520px]">
      <h2 className="hidden px-1 text-5xl lg:inline lg:text-6xl bg-custHotpink text-custYellow">
        .hello thurr
      </h2>
      <p className="text-4xl font-light lg:pt-5 sm:text-6xl lg:7xl font-header">
        I am a
        <DisplayMessage
          msg_01={".bold"}
          msg_02={".curious"}
          msg_03={".social"}
        />
        <br />
        web developer,
      </p>
      <p className="text-center text-custTurq/50 font-header sm:text-2xl">
        who thrives in the <span className="md:hover:cursor-wait md:text-custTurq/15 md:hover:text-gray-100">unknown,</span>
      </p>
      <p className="text-3xl font-light text-right sm:text-4xl font-header">
        finds <span className="font-medium">solutions</span> through{" "}
        <u>.hardWork</u> and a <u>.quickUptake</u>,
      </p>
      <p className="text-xl font-light text-center text-teal-100 sm:text-2xl font-header">
        and whose strength lies in
        <span className="text-nowrap"> [ structured ]</span> and
        <span className="text-nowrap">{" <clean code>"}</span>.
      </p>
    </div>
  );
};

export default SecretMessage;