import ColumnRight from "../../_components/_aboutMe/ColumnRight";
import ColumnLeft from "../../_components/_aboutMe/ColumnLeft";
import ColumnMiddle from "../../_components/_aboutMe/ColumnMiddle";
import avatar from '../../_assets/self-portrait_photo.png';
import TextImageSection from "../../_components/TextImageSection";
import CoverLetterEng from "../../_components/CoverLetterEng";

const page = () => {
console.log('im in about');
  return (
    <div className="flex flex-row w-full h-full min-h-screen max-w-7xl">
      <TextImageSection image={avatar} alt='A professional picture of me smiling into the camera, standing in front of a gradient backdrop' component={ CoverLetterEng } />

      {/* <div className="flex-grow w-1/4 px-2 bg-green-100/20">
        <ColumnLeft />
      </div>
      <div className="flex-grow w-2/4 bg-red-300/25">
        <ColumnMiddle />
      </div>
      <div className="flex-grow w-1/4 bg-blue-200/15">
        {" "}
        <ColumnRight />
      </div> */}
    </div>
  );
};

export default page;
