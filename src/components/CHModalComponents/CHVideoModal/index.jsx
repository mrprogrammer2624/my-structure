import { CHButton } from "../../CHFormComponents";
import { CHVideoPlayer } from "../../CHFormComponents/CHVideoPlayer";
import { CHModal } from "../CHModal";

export const CHVideoModal = ({
  src,
  poster,
  open,
  title,
  width,
  handleClose,
  children,
  ...rest
}) => {
  function closeHandler() {
    let video = document.querySelectorAll("video");
    video.forEach((video) => {
      video.pause();
    });
    handleClose();
  }

  return (
    <CHModal
      className="ratio ratio-16x9"
      contentClassName={"full-video-modal"}
      open={open}
      title={title}
      width={width}
      handleClose={closeHandler}
      {...rest}
    >
      <CHVideoPlayer
        videoSrc={src}
        poster={poster}
        modalOpen={open}
        endingContent={
          <CHButton onClick={(e) => e.stopPropagation()}>
            Create Automation Now
          </CHButton>
        }
      />
    </CHModal>
  );
};
